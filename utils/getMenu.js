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

  try {
    if (!process.env.WP_GRAPHQL_URL) {
      throw new Error("WP_GRAPHQL_URL environment variable is not set");
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL fetch failed: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    const { data, errors } = result;

    if (errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
    }

    if (!data?.acfOptionsMainMenu?.mainMenu?.menuItems) {
      throw new Error(`Invalid menu data structure: ${JSON.stringify(data)}`);
    }

    const mainMenuItems = mapMainMenuItems(
      data.acfOptionsMainMenu.mainMenu.menuItems
    );

    return {
      mainMenuItems,
    };
  } catch (error) {
    // Re-throw the error so it bubbles up and shows in error.tsx
    console.error("MENU ERROR:", error);
    throw new Error(`Failed to load menu: ${error.message}`);
  }
};
