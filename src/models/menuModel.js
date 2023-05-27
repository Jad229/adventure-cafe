export default class Menu {
  constructor() {
    this.menuItems = [];
    this.selectedIndex = 0;
  }

  addItem(item) {
    this.menuItems.push(item);
  }

  getSelectedItem() {
    return this.menuItems[this.selectedIndex];
  }

  getNextItem() {
    if (this.selectedIndex < this.menuItems.length - 1) {
      return this.menuItems[this.selectedIndex + 1];
    } else {
      return null;
    }
  }

  getPreviousItem() {
    if (this.selectedIndex > 0) {
      return this.menuItems[this.selectedIndex - 1];
    } else {
      return null;
    }
  }

  selectNextItem() {
    if (this.selectedIndex < this.menuItems.length - 1) {
      this.selectedIndex++;
    }
  }

  selectPreviousItem() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }
}
