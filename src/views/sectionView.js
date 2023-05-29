export default class SectionView {
  constructor(sectionModel, rootElementId) {
    this.sectionModel = sectionModel;
    this.rootElement = document.getElementById(rootElementId);
    this.sectionContainer = null;
  }

  init() {
    this.sectionContainer = document.createElement("div");
    this.sectionContainer.id = this.sectionModel.sectionId;
    this.sectionContainer.className = "section-container";
    this.rootElement.appendChild(this.sectionContainer);
    this.hide();
    this.updateView(); // call updateView() in init()
  }

  createSectionBanner(title) {
    // add the banner
    const banner = document.createElement("div");
    banner.classList.add("section-banner");

    // add the heading to the banner
    const bannerHeading = document.createElement("h1");
    bannerHeading.classList.add("banner-heading");
    bannerHeading.textContent = title;
    banner.appendChild(bannerHeading);
    this.sectionContainer.appendChild(banner);
  }

  display() {
    this.sectionContainer.style.display = "block";
  }

  hide() {
    this.sectionContainer.style.display = "none";
  }

  updateView() {
    this.sectionContainer.innerText = this.sectionModel.content;
  }
}
