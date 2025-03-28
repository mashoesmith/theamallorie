import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const filters = await request.json();

    let illustrationFilter = ``;
    let miniatureFilter = ``;
    let stationeryFilter = ``;
    let productFilter = ``;

    if (filters.illustration) {
      illustrationFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Illustration"
      },
      `;
    }
    if (filters.miniature) {
      miniatureFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Miniature"
      },
      `;
    }
    if (filters.stationery) {
      stationeryFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Stationery"
      },
      `;
      if (filters.product) {
        productFilter = `
        {
          key: "category", 
          compare: LIKE, 
          value: "Product"
        },
        `;
      }
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query AllProjectsQuery {
          projects(where: { offsetPagination: { size: 100, offset: ${
            ((filters.page || 1) - 1) * 100
          } }
          metaQuery: {
            relation: OR
            metaArray: [
              ${illustrationFilter}
              ${miniatureFilter}
              ${stationeryFilter}
                            ${productFilter}
            ] 
            }
          }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              projectFeatures {
                category
                location
                date
              }
            }
          }
        }
      `,
      }),
    });

    const { data } = await response.json();
    return NextResponse.json({
      total: data.projects.pageInfo.offsetPagination.total,
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
}
