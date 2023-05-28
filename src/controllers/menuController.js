import Menu from "../models/menuModel.js";
import MenuView from "../views/menuView.js";

export default class MenuController {
  constructor() {
    this.menuModel = new Menu();
    this.menuView = new MenuView();
  }

  handleMenuItemClick(itemId) {
    this.menuModel.setSelectedIndex(itemId);
    const selectedItem = this.menuModel.getSelectedItem();
    this.menuView.showSection(selectedItem.sectionId);
  }
}
