import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProjectsQuery {
          projects {
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
            }
          }
        }
      `,
    });
    return res.status(200).json({
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
