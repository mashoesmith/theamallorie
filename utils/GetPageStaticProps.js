import client from "client";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { Footer } from "components/Footer";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
            mouseHouse {
              mouseHouse
            }
          }
          ... on Project {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                    id
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                    id
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    props: {
      seo: data.nodeByUri.seo,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks,
      mouseHouse: data.nodeByUri.mouseHouse,
    },
  };
};
