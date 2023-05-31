import SectionView from "./sectionView";

export default class ContactSectionView extends SectionView {
  updateView() {
    while (this.sectionContainer.firstChild) {
      this.sectionContainer.firstChild.remove();
    }

    // add the banner
    this.createSectionBanner("Contact Us");

    // add a container for our contact info
    this.contactContainer = document.createElement("div");
    this.contactContainer.classList.add("contact-container");
    this.contactContainer.classList.add("section-inner-container");

    this.contactContainer.innerHTML = `
      <div class="address-wrapper">
        <p>Adventurer's Cafe</p>
        <p>123 Guild Street</p>
        <p>Rivervale, Kingdom of Gaia</p>
      </div>
      <div class="info-wrapper">
        <p>Phone: +1 555-123-4567</p>
        <p>Email: info@adventurerscafe.com</p>
      </div>
      <div class="socials-wrapper">
        <p>Follow us on social media:</p>
        <p>Facebook: @adventurerscafe</p>
        <p>Instagram: @adventurerscafe</p>
        <p>Twitter: @adventurerscafe</p>
      </div>
    `;

    this.sectionContainer.appendChild(this.contactContainer);
  }
}
