import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => {
    const top = menuItem.menuItem?.destination;

    return {
      id: uuid(),
      url: top?.url || null,
      label: top?.title || "",
      target: top?.target || "",
      subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
        id: uuid(),
        destination: subMenuItem.destination?.uri,
        label: subMenuItem.label || "",
      })),
    };
  });
};
