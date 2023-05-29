import paragraphs from "../data/story.js";
import SectionView from "./sectionView";

export default class AboutSectionView extends SectionView {
  updateView() {
    // Clear all current items
    while (this.sectionContainer.firstChild) {
      this.sectionContainer.firstChild.remove();
    }

    // add the banner
    this.createSectionBanner("About Us");

    // add a container for all of our paragraphs
    this.contentContainer = document.createElement("div");
    this.contentContainer.classList.add("about-content-container");
    this.sectionContainer.appendChild(this.contentContainer);

    // create paragraphs for our story
    paragraphs.forEach((paragraph) => {
      const paragraphElem = this.createStoryParagraphElement(paragraph);
      this.contentContainer.appendChild(paragraphElem);
    });
  }

  createStoryParagraphElement(content) {
    const paragraph = document.createElement("p");
    paragraph.className = "story-paragraph";
    paragraph.innerText = content;

    return paragraph;
  }
}
