import SectionView from "./sectionView";

export default class MenuSectionView extends SectionView {
  updateView() {
    // clear all current items
    while (this.sectionContainer.firstChild) {
      this.sectionContainer.firstChild.remove();
    }

    // creates banner with menu as title
    this.createSectionBanner("Menu");

    // adding the meals container to the menu-section
    this.mealsContainer = document.createElement("div");
    this.mealsContainer.classList.add("meals-container");
    this.mealsContainer.classList.add("section-inner-container");
    this.sectionContainer.appendChild(this.mealsContainer);

    // add the meals to the meals container
    this.sectionModel.content.forEach((meal) => {
      const mealElem = this.createMealElement(meal);
      this.mealsContainer.appendChild(mealElem);
    });
  }

  createMealElement(meal) {
    // create a div to hold the meal info

    const mealElem = document.createElement("div");
    mealElem.className = "meal";

    // add the meal image
    const image = document.createElement("img");
    image.src = meal.image;
    image.alt = meal.title;
    mealElem.appendChild(image);

    // add the meal description
    const description = document.createElement("p");
    description.innerText = meal.description;
    mealElem.appendChild(description);

    // add the button that will open the modal
    const button = document.createElement("button");
    button.innerText = "View Stats";
    button.addEventListener("click", () => {
      this.openModal(meal);
    });
    mealElem.appendChild(button);

    return mealElem;
  }
  openModal(meal) {
    // This would open a modal showing the stats of the meal.
    // Need to write code for this
  }
}
