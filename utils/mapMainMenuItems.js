export const mapMainMenuItems = (menuItems = []) => {
  return menuItems.map((menuItem = {}) => {
    const dest = menuItem?.menuItem?.destination || {};
    return {
      id: dest.url || dest.title || "menu-item",
      destination: dest.url || null,
      label: dest.title || "",
      target: dest.target || "_self",
      // subMenuItems: Array.isArray(menuItem.items)
      //   ? menuItem.items.map((subMenuItem = {}) => {
      //       const subDest = subMenuItem?.destination || {};
      //       return {
      //         id: subDest.url || subMenuItem?.label || "submenu-item",
      //         destination: subDest.url || null,
      //         label: subMenuItem?.label || "",
      //         target: subDest.target || "_self",
      //       };
      //     })
      //   : [],
    };
  });
};
