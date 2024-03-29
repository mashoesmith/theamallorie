import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

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
