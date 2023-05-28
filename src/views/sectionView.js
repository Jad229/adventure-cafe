export default class SectionView {
  constructor(sectionModel, rootElementId) {
    this.sectionModel = sectionModel;
    this.rootElement = document.getElementById(rootElementId);
    this.sectionContainer = null;
  }

  init() {
    this.sectionContainer = document.createElement("div");
    this.sectionContainer.className = "section-container";
    this.rootElement.appendChild(this.sectionContainer);
    this.updateView();
  }

  updateView() {
    this.sectionContainer.innerText = this.sectionModel.content;
  }
}
