import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.url || null,
    label: menuItem.menuItem.destination?.title,
    target: menuItem.menuItem.destination?.target,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri,
      label: subMenuItem.label,
    })),
  }));
};
