export default class MenuView {
  constructor(menuModel, rootElementId, sectionViews) {
    this.menuModel = menuModel;
    this.rootElement = document.getElementById(rootElementId);
    this.menuContainer = null;
    this.sectionViews = sectionViews;
    this.currentSectionView = null;
  }

  init() {
    this.menuContainer = document.createElement("div");
    this.menuContainer.className = "menu-container";
    this.rootElement.appendChild(this.menuContainer);
    this.updateView();
  }

  updateView() {
    // clear all current items
    while (this.menuContainer.firstChild) {
      this.menuContainer.firstChild.remove();
    }

    // create and append new items
    const selectedItem = this.menuModel.getSelectedItem();
    const nextItem = this.menuModel.getNextItem();
    const prevItem = this.menuModel.getPreviousItem();

    if (prevItem) {
      const prevElem = this.createMenuItem(prevItem, "small");
      this.menuContainer.appendChild(prevElem);
    }

    const selectedElem = this.createMenuItem(selectedItem, "large");
    this.menuContainer.appendChild(selectedElem);

    if (nextItem) {
      const nextElem = this.createMenuItem(nextItem, "small");
      this.menuContainer.appendChild(nextElem);
    }

    // Update displayed section:
    if (this.currentSectionView) {
      this.currentSectionView.hide(); // will need to add this method to SectionView
    }

    this.currentSectionView = this.sectionViews.get(selectedItem.sectionId);
    this.currentSectionView = this.sectionViews.get(selectedItem.sectionId);
    if (this.currentSectionView) {
      this.currentSectionView.display(); // will need to add this method to SectionView
    }
  }

  createMenuItem(menuItem, size) {
    const menuItemElem = document.createElement("div");
    menuItemElem.className = `menu-item ${size}`;
    menuItemElem.innerText = menuItem.name;
    return menuItemElem;
  }
}
