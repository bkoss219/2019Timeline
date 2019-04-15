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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1>Events: {{dispEvents.length}}</h1>\n\n  <h2>Sort By:</h2>\n  <button class=\"button\" (click)=\"orderToYear()\">Year</button>\n  <button class=\"button\" (click)=\"orderToType()\">Type</button>\n\n<div *ngFor=\"let event of dispEvents | orderBy: order ; let i = index\">\n  <button class=\"accordian\" [style.color]=\"event.getTextColor()\" [style.background-color]=\"event.getColor()\" (click)=\"toggleAccordian($event, i)\"><b>{{event.year}}</b>- {{event.name}}</button>\n  <div class=\"panel\" hide=\"!event.isActive\">\n    <p>{{event.description}}</p>\n    <img [src]=\"event.image\" *ngIf=\"event.hasImage\" />\n    </div>\n</div>\n\n\n  \n  </div>\n   \n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordian {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s; }\n\n.active, .accordian:hover {\n  background-color: #ccc; }\n\n.accordian:after {\n  content: '\\002B';\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px; }\n\n.active:after {\n  content: \"\\2212\"; }\n\n.panel {\n  padding: 0 18px;\n  background-color: silver;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out; }\n\n.button {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxia29zc1xcRG9jdW1lbnRzXFxHaXRIdWJcXDIwMTlUaW1lbGluZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSx5QkFBeUI7RUFBRSxVQUFBO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYWN0aXZlLCAuYWNjb3JkaWFuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5hY2NvcmRpYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMDAyQic7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjIxMlwiO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gICAgcGFkZGluZzogMCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il19 */"

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
/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/event */ "./src/app/event/event.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Timeline';
        this.dispEvents = _event_event__WEBPACK_IMPORTED_MODULE_2__["EVENTS"];
        this.order = "year";
    }
    AppComponent.prototype.onSelect = function (e) {
        this.selectedEvent = e;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };
    AppComponent.prototype.toggleAccordian = function (event, index) {
        var element = event.target;
        element.classList.toggle("active");
        if (this.dispEvents[index].isActive) {
            this.dispEvents[index].isActive = false;
        }
        else {
            this.dispEvents[index].isActive = true;
        }
        var panel = element.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    AppComponent.prototype.orderToType = function () {
        this.order = "type";
    };
    AppComponent.prototype.orderToYear = function () {
        this.order = "year";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot(),
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.scss":
/*!********************************************!*\
  !*** ./src/app/event/event.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.makeEvents = function () {
        console.log("thisWorked");
    };
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/event/event.ts":
/*!********************************!*\
  !*** ./src/app/event/event.ts ***!
  \********************************/
/*! exports provided: Event, EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
var Event = /** @class */ (function () {
    function Event(name, year, type, description, image) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.description = description;
        if (image != null) {
            this.hasImage = true;
            this.image = "../assets/images/" + image + ".jpg";
        }
        else
            this.hasImage = false;
    }
    Event.prototype.getColor = function () {
        switch (this.type) {
            case 0:
                return "black";
            case 1:
                return "pink";
            case 2:
                return "orange";
            case 3:
                return "red";
            case 4:
                return "Chartreuse";
            case 5:
                return "purple";
            case 6:
                return "aqua";
        }
    };
    Event.prototype.getTextColor = function () {
        if (this.type == 0 || this.type == 5)
            return "white";
        else
            return "black";
    };
    return Event;
}());

var EVENTS = [
    new Event("Women get the Right to Vote", 1919, 1, "Congress passes the 19th amendment to give women the right to practice their democratic rights.", null),
    new Event("The Little Rock Nine", 1957, 0, "Nine black students in Arkansas are prevented from integrating into a previously white-only school; They are given support by troops, sent by Eisenhower.", null),
    new Event("Homosexuality is Decriminalized for the First Time", 1961, 5, "Illinois is the first state in the United States to repeal the sodomy laws, in July of 1961.", null),
    new Event("The Stonewall Riots", 1969, 5, "Police raid an inn in New York well known for gay activism, sparking the movement for LGBT rights across the United States.", "stonewall"),
    new Event("Harvey Milk is Elected", 1978, 5, "Harvey Milk becomes the first openly gay man to serve in office. He is murdered later that year by Dan White. In the 2008 film, Milk, he is portrayed by Sean Penn.", "milkjpg"),
    new Event("Zoot Suit Riots", 1943, 4, "A political fashion statement characterized by intentionally baggy clothing that often wasted material that should have been saved.", null),
    new Event("The United Farm Workers is Founded", 1965, 4, "Cesar Chavez and Dolores Huerta found the UFW, a labor union for farmers. The UFW also made history for being the first led by a woman.", null),
    new Event("Lauro Cavazos is Elected", 1988, 4, "Dr. Lauro Cavazos becomes the first Mexican American to be placed in a presidential cabinet, Secretary of Education, by Ronald Reagan.", "cavazos"),
    new Event("The Equal Pay Act", 1963, 1, "Kennedy signed a law prohibiting the discrimination of sex for wages between two people performing the same tasks.", null),
    new Event("Billie Jean King wins the Battle of the Sexes", 1973, 1, "In tennis, Billie Jean King wins the Battle of the Sexes against Bobby Riggs. She was also an activist for the LGBT community. In the 2018 film, Battle of the Sexes, she is portrayed by Emma Stone.", "kingAndRiggs"),
    new Event("The Grapes of Wrath is Published", 1939, 4, "John Steinbeck publishes a novel depicting the struggles of farm workers in California", null),
    new Event("The Indian Civil Rights Act is Passed", 1968, 3, "The act was passed by President Johnson, giving many Native American tribes something closer to citizenship: some civil rights (the Bill of Rights)", null),
    new Event("The Society of Human Rights is Founded", 1924, 5, "The Society of Human Rights, in Chicago, is founded. This organization is often claimed to be one of the first gay rights activist organizations.", null),
    new Event("Alfred Kinsey Becomes Well-Known", 1948, 5, "Alfred Kinsey, commonly known for his book, Sexual Behavior in the Human Male, and his theory of sexuality, the Kinsey Scale, becomes relatively popular. He is credited for educating the public on the widespread existence of homosexuality.", null),
    new Event("Rosa Parks is Arrested", 1955, 0, "Rosa Parks refuses to give her seat up to a white person on a bus in Alabama. As a result, the bus boycott in Montgomery, that lasted over a year, and word of her arrest apread across America, further bringing to the light the need for civil justice for African Americans.", null),
    new Event("\"Don't Ask, Don't Tell\"", 1993, 5, "While the act made it legal for gay men to serve in the army, it banned the expression of homosexuality. Passed by Clinton, it sparked a march on Washington pushing for recognition and in opposition of a rising number of hate crimes.", null),
    new Event("Executive Order 9981", 1948, 6, "President Truman signs the Executive Order 9981, declaring equal treatment and opportunity of people in the army.", null),
    new Event("Civil Rights Act of 1964", 1964, 6, "President Johnson signs the Civil Rights Act of 1964, expanding the prohibition of discrimination based on race, sex, religion, etc. in many aspects of American life. (see the Civil Rights Act of 1968 as well)", null),
    new Event("Civil Rights Act of 1968", 1968, 6, "President Johnson signs the Civil Rights Act of 1968, prohibiting descrimination based on color, sex or religion in the sale of land.", null),
    new Event("Civil Rights Act of 1991", 1991, 6, "President Bush signs the Civil Rights Act of 1991, further inforcing the prohibition of descrimination and providing support for those unlawfully descriminated in the workplace.", null),
    new Event("The Freedom Riders", 1961, 0, "A group of both African American and white people used facilities meant for the \"other color\" in opposition of segregation (seperate, but equal).", null),
    new Event("\"I Have a Dream\"", 1963, 0, "Martin Luther King Jr. leads a peaceful march on Washington, reciting his famous I Have a Dream speech, one of the strongest symbols of African American rights in US history.", "mlk"),
    new Event("MLK is Assassinated", 1968, 0, "Martin Luther King Jr. is assassinated 5 years following his famous I Have a Dream speech, becoming somewhat of a martyr in the African American rights movement.", null),
    new Event("Weeks v. Southern Bell", 1965, 1, "Many laws restricting women's work hours and conditions were loosened, opening up many previously male-only jobs.", null),
    new Event("Executive Order 11246", 1968, 1, "An Executive Order is passed that prohibits the descrimination of sex in government contractors, as well as many steps to hire more women.", null)
];


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

module.exports = __webpack_require__(/*! C:\Users\bkoss\Documents\GitHub\2019Timeline\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map