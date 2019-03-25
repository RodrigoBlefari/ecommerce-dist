(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'entrar', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ecommerce-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _produtogrid_produtogrid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./produtogrid/produtogrid.component */ "./src/app/produtogrid/produtogrid.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _cadastro_cadastroform_cadastroform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cadastro/cadastroform/cadastroform.component */ "./src/app/cadastro/cadastroform/cadastroform.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cadastro_cadastrosidebar_cadastrosidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cadastro/cadastrosidebar/cadastrosidebar.component */ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _produtogrid_produtogrid_component__WEBPACK_IMPORTED_MODULE_7__["ProdutogridComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_8__["CadastroComponent"],
                _cadastro_cadastroform_cadastroform_component__WEBPACK_IMPORTED_MODULE_9__["CadastroformComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _cadastro_cadastrosidebar_cadastrosidebar_component__WEBPACK_IMPORTED_MODULE_11__["CadastrosidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cadastro-container{\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n}\n.div-sidebar{\n    width: 50%;\n}\n.div-cadastro{\n    background-color: white;\n    width: 50%;\n    padding: 10px;\n    box-shadow: 0px 0px 18px -2px rgba(0,0,0,0.75);\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsYUFBYTtJQUdiLDhDQUE4Qzs7QUFFbEQiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhZGFzdHJvLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpdi1zaWRlYmFye1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5kaXYtY2FkYXN0cm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxOHB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMThweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOHB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cadastro-container\">\n  <div class=\"div-cadastro\">\n    <app-cadastroform></app-cadastroform>\n  </div>\n  <div class=\".div-sidebar\">\n    <app-cadastrosidebar></app-cadastrosidebar>\n</div>\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CadastroComponent = /** @class */ (function () {
    function CadastroComponent() {
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastroform/cadastroform.component.css":
/*!******************************************************************!*\
  !*** ./src/app/cadastro/cadastroform/cadastroform.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvZm9ybS9jYWRhc3Ryb2Zvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cadastro/cadastroform/cadastroform.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/cadastro/cadastroform/cadastroform.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card red lighten-2 center\">\n  <div class=\"card-content white-text\">\n    <span class=\"card-title\">Cadastro de usuario</span>\n  </div>\n</div>\n<div class=\"progress\">\n    <div class=\"determinate\" style=\"width: 10%\"></div>\n</div>\n<div class=\"center\">\n  <form class=\"col s12\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate character-counter\" data-length=\"10\">\n        <label for=\"first_name\">Nome</label>\n      </div>\n      <div class=\"input-field col s6\">\n        <input id=\"last_name\" type=\"text\" class=\"validate character-counter\" data-length=\"10\">\n        <label for=\"last_name\">Sobre nome</label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate character-counter\" data-length=\"10\">\n        <label for=\"first_name\">RG</label>\n      </div>\n      <div class=\"input-field col s6\">\n          <input type=\"text\" class=\"datepicker character-counter\" data-length=\"10\">\n          <label for=\"disabled\">Data de nascimento</label>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email\" type=\"email\" class=\"validate character-counter\" data-length=\"10\">\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"password\" type=\"password\" class=\"validate character-counter\" data-length=\"10\">\n        <label for=\"password\">Password</label>\n      </div>\n      <div class=\"input-field col s6\">\n          <input id=\"re-password\" type=\"password\" class=\"validate character-counter\" data-length=\"10\">\n          <label for=\"re-password\">Confirmar Password</label>\n        </div>\n    </div>\n    <p>\n        <label>\n          <input type=\"checkbox\" />\n          <span>Red</span>\n        </label>\n      </p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/cadastro/cadastroform/cadastroform.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cadastro/cadastroform/cadastroform.component.ts ***!
  \*****************************************************************/
/*! exports provided: CadastroformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroformComponent", function() { return CadastroformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CadastroformComponent = /** @class */ (function () {
    function CadastroformComponent() {
    }
    CadastroformComponent.prototype.ngOnInit = function () {
    };
    CadastroformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastroform',
            template: __webpack_require__(/*! ./cadastroform.component.html */ "./src/app/cadastro/cadastroform/cadastroform.component.html"),
            styles: [__webpack_require__(/*! ./cadastroform.component.css */ "./src/app/cadastro/cadastroform/cadastroform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CadastroformComponent);
    return CadastroformComponent;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvc2lkZWJhci9jYWRhc3Ryb3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: CadastrosidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrosidebarComponent", function() { return CadastrosidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CadastrosidebarComponent = /** @class */ (function () {
    function CadastrosidebarComponent() {
    }
    CadastrosidebarComponent.prototype.ngOnInit = function () {
    };
    CadastrosidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastrosidebar',
            template: __webpack_require__(/*! ./cadastrosidebar.component.html */ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.html"),
            styles: [__webpack_require__(/*! ./cadastrosidebar.component.css */ "./src/app/cadastro/cadastrosidebar/cadastrosidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CadastrosidebarComponent);
    return CadastrosidebarComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Footer Content</h5>\n          <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      © 2014 Copyright Text\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header-nav li{\n    cursor: pointer;\n    position: relative;\n    z-index: 7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVyLW5hdiBsaXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDc7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-nav\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo right\">ECOMMERCE</a>\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/']\">Home</a></li>\n      <li><a [routerLink]=\"['entrar']\">Entrar</a></li>\n      <li><a [routerLink]=\"['cadastro']\">Cadastrar</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel{\n    z-index: 3;\n    top: -620px;    \n    height: 660px;\n}\n.carousel img {\n    width: 160%;\n    height: 370px;\n    box-shadow: 0px 12px 29px -4px rgba(0,0,0,0.75);\n}\n.carousel .carousel-item {\n    left: -70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBR2IsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbHtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRvcDogLTYyMHB4OyAgICBcbiAgICBoZWlnaHQ6IDY2MHB4O1xufVxuLmNhcm91c2VsIGltZyB7XG4gICAgd2lkdGg6IDE2MCU7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMnB4IDI5cHggLTRweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEycHggMjlweCAtNHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjlweCAtNHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgbGVmdDogLTcwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n        <ul class=\"slides\">\n          <li>\n            <img src=\"https://png.pngtree.com/thumb_back/fw800/back_pic/00/01/89/25560cf970544c2.jpg\"> <!-- random image -->\n          </li>\n          <li>\n            <img src=\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B1eYNZGrripnnry82/on-the-table-at-library-blurred-background_srzsdgyye_thumbnail-full01.png\"> <!-- random image -->\n          </li>\n        </ul>\n        <div class=\"carousel\">\n            <a class=\"carousel-item\" href=\"#one!\"><img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_o-picapau-amarelo.jpg\"></a>\n            <a class=\"carousel-item\" href=\"#two!\"><img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_o-comprador-de-fazendas.jpg\"></a>\n            <a class=\"carousel-item\" href=\"#three!\"><img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_a-hidra-de-lerna.jpg\"></a>\n            <a class=\"carousel-item\" href=\"#four!\"><img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400_o-leao-de-nemeia.jpg\"></a>\n            <a class=\"carousel-item\" href=\"#five!\"><img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/4906_resized_150x200.jpg\"></a>\n        </div>\n      </div>\n      \n<app-produtogrid></app-produtogrid>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/produtogrid/produtogrid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/produtogrid/produtogrid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9ncmlkL3Byb2R1dG9ncmlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/produtogrid/produtogrid.component.html":
/*!********************************************************!*\
  !*** ./src/app/produtogrid/produtogrid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo left\">PRODUTOS</a>\n    </div>\n  </nav>\n<div class=\"fixed-action-btn \\\">\n    <a class=\"btn-floating btn-large red\">\n    <i class=\"large material-icons \">shopping_cart</i>\n    </a>\n    <ul>\n       <li><a class=\"btn-floating red\"><i class=\"material-icons\">insert_chart</i></a></li>\n       <li><a class=\"btn-floating yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\n       <li><a class=\"btn-floating green\"><i class=\"material-icons\">publish</i></a></li>\n       <li><a class=\"btn-floating blue\"><i class=\"material-icons\">attach_file</i></a></li>\n    </ul>\n </div>\n <ul class=\"collapsible\">\n    <li class=\"active\">\n       <div class=\"collapsible-header\">\n          <i class=\"material-icons\">trending_up</i>\n            PRODUTOS MAIS VENDIDOS\n          <span class=\"new badge\">4</span>\n       </div>\n       <div class=\"collapsible-body\">\n          <div class=\"row col s12 m12 l12 left\">\n              <div class=\"col s3 m3 l3\">\n                 <div class=\"card\">\n                    <div class=\"card-image\">\n                       <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/13200613_resized_150x200.jpg\">\n                       <span class=\"card-title\">Produto Titulo</span>\n                       <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                    </div>\n                    <div class=\"card-content\">\n                       <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                 </div>\n              </div>\n              <div class=\"col s3 m3 l3\">\n                 <div class=\"card\">\n                    <div class=\"card-image\">\n                       <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/4906_resized_150x200.jpg\">\n                       <span class=\"card-title\">Produto Titulo</span>\n                       <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                    </div>\n                    <div class=\"card-content\">\n                       <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                 </div>\n              </div>\n              <div class=\"col s3 m3 l3\">\n                 <div class=\"card\">\n                    <div class=\"card-image\">\n                       <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/5309_resized_150x200.jpg\">\n                       <span class=\"card-title\">Produto Titulo</span>\n                       <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                    </div>\n                    <div class=\"card-content\">\n                       <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                 </div>\n              </div>\n              <div class=\"col s3 m3 l3\">\n                 <div class=\"card\">\n                    <div class=\"card-image\">\n                       <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/11519081_resized_148x200.jpg\">\n                       <span class=\"card-title\">Produto Titulo</span>\n                       <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                    </div>\n                    <div class=\"card-content\">\n                       <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                 </div>\n              </div>\n              <div class=\"col s3 m3 l3\">\n                 <div class=\"card\">\n                    <div class=\"card-image\">\n                       <img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400__his9.jpg\">\n                       <span class=\"card-title\">Produto Titulo</span>\n                       <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                    </div>\n                    <div class=\"card-content\">\n                       <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                 </div>\n              </div>\n           </div>\n       </div>\n    </li>\n    <li>\n        <div class=\"collapsible-header\">\n           <i class=\"material-icons\">fiber_new</i>\n           NOVOS PRODUTOS\n           <span class=\"new badge\">4</span>\n        </div>\n        <div class=\"collapsible-body\">\n           <div class=\"row col s12 m12 l12 left\">\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/13200613_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/4906_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/5309_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/11519081_resized_148x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400__his9.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n            </div>\n        </div>\n     </li>\n     <li>\n        <div class=\"collapsible-header\">\n           <i class=\"material-icons\">monetization_on</i>\n           PRODUTOS COM DESCONTO\n           <span class=\"new badge\">4</span>\n        </div>\n        <div class=\"collapsible-body\">\n           <div class=\"row col s12 m12 l12 left\">\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/13200613_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/4906_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/5309_resized_150x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/11519081_resized_148x200.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col s3 m3 l3\">\n                  <div class=\"card\">\n                     <div class=\"card-image\">\n                        <img src=\"http://catalogo.ftd.com.br.s3.amazonaws.com/280x400__his9.jpg\">\n                        <span class=\"card-title\">Produto Titulo</span>\n                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n                     </div>\n                     <div class=\"card-content\">\n                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n                     </div>\n                  </div>\n               </div>\n            </div>\n        </div>\n     </li>\n </ul>"

/***/ }),

/***/ "./src/app/produtogrid/produtogrid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/produtogrid/produtogrid.component.ts ***!
  \******************************************************/
/*! exports provided: ProdutogridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutogridComponent", function() { return ProdutogridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdutogridComponent = /** @class */ (function () {
    function ProdutogridComponent() {
    }
    ProdutogridComponent.prototype.ngOnInit = function () {
    };
    ProdutogridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtogrid',
            template: __webpack_require__(/*! ./produtogrid.component.html */ "./src/app/produtogrid/produtogrid.component.html"),
            styles: [__webpack_require__(/*! ./produtogrid.component.css */ "./src/app/produtogrid/produtogrid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProdutogridComponent);
    return ProdutogridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodrigoblefari/Documents/STUDIES/ECOMMERCE/ecommerce-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map