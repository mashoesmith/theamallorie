import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

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
    }
    if (filters.product) {
      productFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Product"
      },
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllProjectsQuery {
          projects(where: { offsetPagination: { size: 6, offset: ${
            ((filters.page || 1) - 1) * 6
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
    });
    return res.status(200).json({
      total: data.projects.pageInfo.offsetPagination.total,
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};
// console.log(data);

export default handler;
