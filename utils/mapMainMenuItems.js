import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  if (!Array.isArray(menuItems)) {
    console.error("menuItems is not an array:", menuItems);
    return [];
  }

  return menuItems
    .filter((item) => item?.menuItem?.destination)
    .map((menuItem) => ({
      id: uuid(),
      destination: menuItem.menuItem.destination?.url || "/",
      label: menuItem.menuItem.destination?.title || "Untitled",
      target: menuItem.menuItem.destination?.target || "",
    }));
};
