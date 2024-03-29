import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const filters = await request.json();

    let illustrationFilter = ``;
    let miniaturesFilter = ``;
    let stationeryFilter = ``;

    if (filters.illustration) {
      illustrationFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Illustration"
      },
      `;
    }
    if (filters.miniatures) {
      miniaturesFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "miniatures"
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
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query AllProjectsQuery {
          projects(where: { offsetPagination: { size: 6, offset: ${
            ((filters.page || 1) - 1) * 6
          } }
          metaQuery: {
            relation: OR
            metaArray: [
              ${illustrationFilter}
              ${miniaturesFilter}
              ${stationeryFilter}
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
