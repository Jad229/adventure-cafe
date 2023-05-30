import MenuController from "./controllers/menuController";
import meals from "./data/meals.js";
import specials from "./data/specials";
import MenuModel from "./models/MenuModel";
import SectionModel from "./models/sectionModel";
import "./styles/styles.css";
import AboutSectionView from "./views/aboutSectionView";
import MenuSectionView from "./views/menuSectionView";
import MenuView from "./views/menuView";
import SectionView from "./views/sectionView";
import SpecialsSectionView from "./views/specialsSectionView";

const mainMenu = new MenuModel();

mainMenu.addItem({ name: "Menu", sectionId: "menu-section" });
mainMenu.addItem({ name: "About Us", sectionId: "about-section" });
mainMenu.addItem({ name: "Specials", sectionId: "specials-section" });
mainMenu.addItem({ name: "Contact", sectionId: "contact-section" });

const sectionModels = [
  new SectionModel("menu-section", meals), // pass the meals data here
  new SectionModel("about-section", "Content for About Us"),
  new SectionModel("specials-section", specials),
  new SectionModel("contact-section", "Content for Contact"),
];

const sectionViews = new Map();
sectionModels.forEach((model) => {
  let view;

  // create the correct view based on the sectionId
  switch (model.sectionId) {
    case "menu-section":
      view = new MenuSectionView(model, "app");
      break;
    case "about-section":
      view = new AboutSectionView(model, "app");
      break;
    case "specials-section":
      view = new SpecialsSectionView(model, "app");
      break;
    default:
      view = new SectionView(model, "app");
      break;
  }

  view.init();
  sectionViews.set(model.sectionId, view);
});

const menuView = new MenuView(mainMenu, "app", sectionViews);
const menuController = new MenuController(mainMenu, menuView);

menuController.init();
