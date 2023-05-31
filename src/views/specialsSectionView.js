import SectionView from "./sectionView";

export default class SpecialsSectionView extends SectionView {
  updateView() {
    // clear all current items
    while (this.sectionContainer.firstChild) {
      this.sectionContainer.firstChild.remove();
    }

    // creates banner with Specials as title
    this.createSectionBanner("Specials");

    // add specials container
    this.specialsContainer = document.createElement("div");
    this.specialsContainer.classList.add("specials-container");
    this.specialsContainer.classList.add("section-inner-container");
    this.sectionContainer.appendChild(this.specialsContainer);

    //add the specials to the specials container
    this.sectionModel.content.forEach((special) => {
      const specialElem = this.createSpecialElement(special);
      this.specialsContainer.appendChild(specialElem);
    });
  }

  createSpecialElement(special) {
    // create a div to hold the meal info

    const specialElem = document.createElement("div");
    specialElem.className = "special";

    // add the meal image
    const image = document.createElement("img");
    image.src = special.image;
    image.alt = special.title;
    specialElem.appendChild(image);

    // add the meal description
    const description = document.createElement("p");
    description.innerText = special.description;
    specialElem.appendChild(description);

    // add the button that will open the modal
    const button = document.createElement("button");
    button.innerText = "View Stats";
    button.addEventListener("click", () => {
      this.openModal(special);
    });
    specialElem.appendChild(button);

    return specialElem;
  }
}
