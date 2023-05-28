"use strict";
(self["webpackChunkadventure_cafe"] = self["webpackChunkadventure_cafe"] || []).push([["index"],{

/***/ "./src/controllers/menuController.js":
/*!*******************************************!*\
  !*** ./src/controllers/menuController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuController)
/* harmony export */ });
class MenuController {
  constructor(menuModel, menuView) {
    this.menuModel = menuModel;
    this.menuView = menuView;
  }

  init() {
    this.menuView.init();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // For now, let's just add keyboard events for up and down arrow keys
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowUp") {
        this.menuModel.selectPreviousItem();
        this.menuView.updateView();
      } else if (event.code === "ArrowDown") {
        this.menuModel.selectNextItem();
        this.menuView.updateView();
      }
    });
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_menuController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/menuController */ "./src/controllers/menuController.js");
/* harmony import */ var _models_MenuModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/MenuModel */ "./src/models/MenuModel.js");
/* harmony import */ var _views_menuView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/menuView */ "./src/views/menuView.js");




const menuModel = new _models_MenuModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
menuModel.addItem({ name: "Menu", sectionId: "menu-section" });
menuModel.addItem({ name: "About Us", sectionId: "about-section" });
menuModel.addItem({ name: "Specials", sectionId: "specials-section" });
menuModel.addItem({ name: "Contact", sectionId: "contact-section" });

const menuView = new _views_menuView__WEBPACK_IMPORTED_MODULE_2__["default"](menuModel, "app");
const menuController = new _controllers_menuController__WEBPACK_IMPORTED_MODULE_0__["default"](menuModel, menuView);

menuController.init();


/***/ }),

/***/ "./src/models/MenuModel.js":
/*!*********************************!*\
  !*** ./src/models/MenuModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
  constructor() {
    this.menuItems = [];
    this.selectedIndex = 0;
  }

  addItem(item) {
    this.menuItems.push(item);
  }

  getSelectedItem() {
    return this.menuItems[this.selectedIndex];
  }

  getNextItem() {
    if (this.selectedIndex < this.menuItems.length - 1) {
      return this.menuItems[this.selectedIndex + 1];
    } else {
      return null;
    }
  }

  getPreviousItem() {
    if (this.selectedIndex > 0) {
      return this.menuItems[this.selectedIndex - 1];
    } else {
      return null;
    }
  }

  selectNextItem() {
    if (this.selectedIndex < this.menuItems.length - 1) {
      this.selectedIndex++;
    }
  }

  selectPreviousItem() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }
}


/***/ }),

/***/ "./src/views/menuView.js":
/*!*******************************!*\
  !*** ./src/views/menuView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuView)
/* harmony export */ });
class MenuView {
  constructor(menuModel, rootElementId) {
    this.menuModel = menuModel;
    this.rootElement = document.getElementById(rootElementId);
    this.menuContainer = null;
  }

  init() {
    this.menuContainer = document.createElement("div");
    this.menuContainer.className = "menu-container";
    this.rootElement.appendChild(this.menuContainer);
    this.updateView();
  }

  updateView() {
    // clear all current items
    while (this.menuContainer.firstChild) {
      this.menuContainer.firstChild.remove();
    }

    // create and append new items
    const selectedItem = this.menuModel.getSelectedItem();
    const nextItem = this.menuModel.getNextItem();
    const prevItem = this.menuModel.getPreviousItem();

    if (prevItem) {
      const prevElem = this.createMenuItem(prevItem, "small");
      this.menuContainer.appendChild(prevElem);
    }

    const selectedElem = this.createMenuItem(selectedItem, "large");
    this.menuContainer.appendChild(selectedElem);

    if (nextItem) {
      const nextElem = this.createMenuItem(nextItem, "small");
      this.menuContainer.appendChild(nextElem);
    }
  }

  createMenuItem(menuItem, size) {
    const menuItemElem = document.createElement("div");
    menuItemElem.className = `menu-item ${size}`;
    menuItemElem.innerText = menuItem.name;
    return menuItemElem;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QjBEO0FBQ2Y7QUFDSDtBQUN4QztBQUNBLHNCQUFzQix5REFBUztBQUMvQixvQkFBb0IseUNBQXlDO0FBQzdELG9CQUFvQiw4Q0FBOEM7QUFDbEUsb0JBQW9CLGlEQUFpRDtBQUNyRSxvQkFBb0IsK0NBQStDO0FBQ25FO0FBQ0EscUJBQXFCLHVEQUFRO0FBQzdCLDJCQUEyQixtRUFBYztBQUN6QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2ZW50dXJlLWNhZmUvLi9zcmMvY29udHJvbGxlcnMvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYWR2ZW50dXJlLWNhZmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWR2ZW50dXJlLWNhZmUvLi9zcmMvbW9kZWxzL01lbnVNb2RlbC5qcyIsIndlYnBhY2s6Ly9hZHZlbnR1cmUtY2FmZS8uL3NyYy92aWV3cy9tZW51Vmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IobWVudU1vZGVsLCBtZW51Vmlldykge1xyXG4gICAgdGhpcy5tZW51TW9kZWwgPSBtZW51TW9kZWw7XHJcbiAgICB0aGlzLm1lbnVWaWV3ID0gbWVudVZpZXc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tZW51Vmlldy5pbml0KCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBGb3Igbm93LCBsZXQncyBqdXN0IGFkZCBrZXlib2FyZCBldmVudHMgZm9yIHVwIGFuZCBkb3duIGFycm93IGtleXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICB0aGlzLm1lbnVNb2RlbC5zZWxlY3RQcmV2aW91c0l0ZW0oKTtcclxuICAgICAgICB0aGlzLm1lbnVWaWV3LnVwZGF0ZVZpZXcoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TW9kZWwuc2VsZWN0TmV4dEl0ZW0oKTtcclxuICAgICAgICB0aGlzLm1lbnVWaWV3LnVwZGF0ZVZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBNZW51Q29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9tZW51Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgTWVudU1vZGVsIGZyb20gXCIuL21vZGVscy9NZW51TW9kZWxcIjtcclxuaW1wb3J0IE1lbnVWaWV3IGZyb20gXCIuL3ZpZXdzL21lbnVWaWV3XCI7XHJcblxyXG5jb25zdCBtZW51TW9kZWwgPSBuZXcgTWVudU1vZGVsKCk7XHJcbm1lbnVNb2RlbC5hZGRJdGVtKHsgbmFtZTogXCJNZW51XCIsIHNlY3Rpb25JZDogXCJtZW51LXNlY3Rpb25cIiB9KTtcclxubWVudU1vZGVsLmFkZEl0ZW0oeyBuYW1lOiBcIkFib3V0IFVzXCIsIHNlY3Rpb25JZDogXCJhYm91dC1zZWN0aW9uXCIgfSk7XHJcbm1lbnVNb2RlbC5hZGRJdGVtKHsgbmFtZTogXCJTcGVjaWFsc1wiLCBzZWN0aW9uSWQ6IFwic3BlY2lhbHMtc2VjdGlvblwiIH0pO1xyXG5tZW51TW9kZWwuYWRkSXRlbSh7IG5hbWU6IFwiQ29udGFjdFwiLCBzZWN0aW9uSWQ6IFwiY29udGFjdC1zZWN0aW9uXCIgfSk7XHJcblxyXG5jb25zdCBtZW51VmlldyA9IG5ldyBNZW51VmlldyhtZW51TW9kZWwsIFwiYXBwXCIpO1xyXG5jb25zdCBtZW51Q29udHJvbGxlciA9IG5ldyBNZW51Q29udHJvbGxlcihtZW51TW9kZWwsIG1lbnVWaWV3KTtcclxuXHJcbm1lbnVDb250cm9sbGVyLmluaXQoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1lbnVJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5tZW51SXRlbXMucHVzaChpdGVtKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkSXRlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVJdGVtc1t0aGlzLnNlbGVjdGVkSW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dEl0ZW0oKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5tZW51SXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZW51SXRlbXNbdGhpcy5zZWxlY3RlZEluZGV4ICsgMV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzSXRlbSgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtc1t0aGlzLnNlbGVjdGVkSW5kZXggLSAxXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TmV4dEl0ZW0oKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5tZW51SXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFByZXZpb3VzSXRlbSgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmlldyB7XHJcbiAgY29uc3RydWN0b3IobWVudU1vZGVsLCByb290RWxlbWVudElkKSB7XHJcbiAgICB0aGlzLm1lbnVNb2RlbCA9IG1lbnVNb2RlbDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290RWxlbWVudElkKTtcclxuICAgIHRoaXMubWVudUNvbnRhaW5lciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtY29udGFpbmVyXCI7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWVudUNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAvLyBjbGVhciBhbGwgY3VycmVudCBpdGVtc1xyXG4gICAgd2hpbGUgKHRoaXMubWVudUNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgIHRoaXMubWVudUNvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIG5ldyBpdGVtc1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5tZW51TW9kZWwuZ2V0U2VsZWN0ZWRJdGVtKCk7XHJcbiAgICBjb25zdCBuZXh0SXRlbSA9IHRoaXMubWVudU1vZGVsLmdldE5leHRJdGVtKCk7XHJcbiAgICBjb25zdCBwcmV2SXRlbSA9IHRoaXMubWVudU1vZGVsLmdldFByZXZpb3VzSXRlbSgpO1xyXG5cclxuICAgIGlmIChwcmV2SXRlbSkge1xyXG4gICAgICBjb25zdCBwcmV2RWxlbSA9IHRoaXMuY3JlYXRlTWVudUl0ZW0ocHJldkl0ZW0sIFwic21hbGxcIik7XHJcbiAgICAgIHRoaXMubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2RWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtID0gdGhpcy5jcmVhdGVNZW51SXRlbShzZWxlY3RlZEl0ZW0sIFwibGFyZ2VcIik7XHJcbiAgICB0aGlzLm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtKTtcclxuXHJcbiAgICBpZiAobmV4dEl0ZW0pIHtcclxuICAgICAgY29uc3QgbmV4dEVsZW0gPSB0aGlzLmNyZWF0ZU1lbnVJdGVtKG5leHRJdGVtLCBcInNtYWxsXCIpO1xyXG4gICAgICB0aGlzLm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEVsZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVudUl0ZW0obWVudUl0ZW0sIHNpemUpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51SXRlbUVsZW0uY2xhc3NOYW1lID0gYG1lbnUtaXRlbSAke3NpemV9YDtcclxuICAgIG1lbnVJdGVtRWxlbS5pbm5lclRleHQgPSBtZW51SXRlbS5uYW1lO1xyXG4gICAgcmV0dXJuIG1lbnVJdGVtRWxlbTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9