import MenuController from "./controllers/menuController";
import MenuModel from "./models/MenuModel";
import SectionModel from "./models/sectionModel";
import "./styles/styles.css";
import MenuView from "./views/menuView";
import SectionView from "./views/sectionView";

const mainMenu = new MenuModel();

mainMenu.addItem({ name: "Menu", sectionId: "menu-section" });
mainMenu.addItem({ name: "About Us", sectionId: "about-section" });
mainMenu.addItem({ name: "Specials", sectionId: "specials-section" });
mainMenu.addItem({ name: "Contact", sectionId: "contact-section" });

const sectionModels = [
  new SectionModel("menu-section", "Content for Menu"),
  new SectionModel("about-section", "Content for About Us"),
  new SectionModel("specials-section", "Content for Specials"),
  new SectionModel("contact-section", "Content for Contact"),
];

const sectionViews = new Map();
sectionModels.forEach((model) => {
  const view = new SectionView(model, "app");
  view.init(model.id); // Initialize each view
  sectionViews.set(model.sectionId, view);
});

const menuView = new MenuView(mainMenu, "app", sectionViews);
const menuController = new MenuController(mainMenu, menuView);

menuController.init();
