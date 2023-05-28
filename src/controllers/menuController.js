export default class MenuController {
  constructor(menuModel, menuView) {
    this.menuModel = menuModel;
    this.menuView = menuView;
  }

  init() {
    this.menuView.init();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // For now, let's just add keyboard events for up and down arrow keys
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowUp") {
        this.menuModel.selectPreviousItem();
        this.menuView.updateView();
      } else if (event.code === "ArrowDown") {
        this.menuModel.selectNextItem();
        this.menuView.updateView();
      }
    });
  }
}
