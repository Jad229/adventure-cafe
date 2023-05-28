export default class SectionView {
  constructor(sectionModel, rootElementId) {
    this.sectionModel = sectionModel;
    this.rootElement = document.getElementById(rootElementId);
    this.sectionContainer = null;
  }

  init(sectionName) {
    this.sectionContainer = document.createElement("div");
    this.sectionContainer.id = this.sectionModel.sectionId;
    this.sectionContainer.className = sectionName;
    this.sectionContainer.innerText = this.sectionModel.content;
    this.rootElement.appendChild(this.sectionContainer);
    this.hide(); // new line
  }

  display() {
    // new method
    this.sectionContainer.style.display = "block";
  }

  hide() {
    // new method
    this.sectionContainer.style.display = "none";
  }
}
