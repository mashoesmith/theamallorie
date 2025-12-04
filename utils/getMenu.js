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
                target
                title
                url
              }
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

  console.log("GraphQL endpoint:", process.env.WP_GRAPHQL_URL);

  const { data } = await response.json();
  return {
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
  };
};
