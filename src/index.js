import MenuController from "./controllers/menuController";
import MenuModel from "./models/MenuModel";
import MenuView from "./views/menuView";

const mainMenu = new MenuModel();
mainMenu.addItem({ name: "Menu", sectionId: "menu-section" });
mainMenu.addItem({ name: "About Us", sectionId: "about-section" });
mainMenu.addItem({ name: "Specials", sectionId: "specials-section" });
mainMenu.addItem({ name: "Contact", sectionId: "contact-section" });

const menuView = new MenuView(mainMenu, "app");
const menuController = new MenuController(mainMenu, menuView);

menuController.init();
