import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async () => {
  const params = {
    query: `
    query MenuQuery {
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
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();
  return {
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
  };
};
