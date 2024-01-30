import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let illustrationFilter = ``;
    let paintingFilter = ``;
    let dollsHouseFilter = ``;
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
    if (filters.painting) {
      paintingFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Painting"
      },
      `;
    }
    if (filters.dollsHouse) {
      dollsHouseFilter = `
      {
        key: "category", 
        compare: LIKE, 
        value: "Dollshouse"
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

    const { data } = await client.query({
      query: gql`
        query AllProjectsQuery {
          projects(where: { offsetPagination: { size: 6, offset: ${
            ((filters.page || 1) - 1) * 6
          } } 
          metaQuery: 
          {
            relation: OR
            metaArray: [
              ${illustrationFilter}
              ${paintingFilter}
              ${dollsHouseFilter}
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
    });
    return res.status(200).json({
      total: data.projects.pageInfo.offsetPagination.total,
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

console.log(data);

export default handler;
