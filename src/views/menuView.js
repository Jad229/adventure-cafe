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

    // Creates Up arrow before menu items
    this.upButton = document.createElement("button");
    this.upButton.classList.add("arrow-button");
    this.upButton.classList.add("up");
    this.upButton.addEventListener("click", () => {
      this.menuModel.selectPreviousItem();
      this.updateView();
    });
    this.menuContainer.appendChild(this.upButton);

    // Create a separate container for the menu items
    this.menuItemsContainer = document.createElement("div");
    this.menuItemsContainer.className = "menu-items-container";
    this.menuContainer.appendChild(this.menuItemsContainer);

    // Creates Down arrow after menu items
    this.downButton = document.createElement("button");
    this.downButton.classList.add("arrow-button");
    this.downButton.classList.add("down"); // added the "down" class
    this.downButton.addEventListener("click", () => {
      this.menuModel.selectNextItem();
      this.updateView();
    });
    this.menuContainer.appendChild(this.downButton);

    this.rootElement.appendChild(this.menuContainer);
    this.updateView();
  }

  updateView() {
    // clear all current items
    while (this.menuItemsContainer.firstChild) {
      this.menuItemsContainer.firstChild.remove();
    }

    // create and append new items
    const selectedItem = this.menuModel.getSelectedItem();
    const nextItem = this.menuModel.getNextItem();
    const prevItem = this.menuModel.getPreviousItem();

    if (prevItem) {
      const prevElem = this.createMenuItem(prevItem, "small");
      this.menuItemsContainer.appendChild(prevElem);
    }

    const selectedElem = this.createMenuItem(selectedItem, "large");
    this.menuItemsContainer.appendChild(selectedElem);

    if (nextItem) {
      const nextElem = this.createMenuItem(nextItem, "small");
      this.menuItemsContainer.appendChild(nextElem);
    }

    // Update displayed section:
    if (this.currentSectionView) {
      this.currentSectionView.hide(); // will need to add this method to SectionView
    }
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
