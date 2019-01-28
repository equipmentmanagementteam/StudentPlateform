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

/***/ "./src/app/Services/catalog-services.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/catalog-services.service.ts ***!
  \******************************************************/
/*! exports provided: CatalogServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogServicesService", function() { return CatalogServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CatalogServicesService = /** @class */ (function () {
    function CatalogServicesService(http) {
        this.http = http;
    }
    CatalogServicesService.prototype.getEquipementsList = function () {
        return this.http.get("http://localhost:8080/equipements/all");
    };
    CatalogServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogServicesService);
    return CatalogServicesService;
}());



/***/ }),

/***/ "./src/app/Services/command.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/command.service.ts ***!
  \*********************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CommandService = /** @class */ (function () {
    function CommandService(http) {
        this.http = http;
    }
    CommandService.prototype.addCommand = function (equipement, date, ref, user) {
        for (var _i = 0, equipement_1 = equipement; _i < equipement_1.length; _i++) {
            var eq = equipement_1[_i];
            var command = { "id": "0", "ref": ref, "equipement": eq, "student": user, "quantity": eq.quan, "date": date, "status": "false" };
            this.http.post("http://localhost:8080/command/add", command)
                .subscribe(function (data) { console.log("got smthg back", data); }, function (error) { console.log("Error!!!", error); });
        }
    };
    CommandService.prototype.getAllCommands = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa('user:mohamed') });
        return this.http.get("http://localhost:8080/command/mycommands");
    };
    CommandService.prototype.deleteCommand = function (id) {
        this.http.post("http://localhost:8080/command/delete", id);
    };
    CommandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommandService);
    return CommandService;
}());



/***/ }),

/***/ "./src/app/Services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getAllNotifications = function () {
        return this.http.get("http://localhost:8080/notification/all");
    };
    NotificationService.prototype.addNotif = function (notif) {
        this.http.post("http://localhost:8080/notification/add", notif)
            .subscribe(function (data) { console.log("got smthg back", data); }, function (error) { console.log("Error!!!", error); });
    };
    NotificationService.prototype.getUnseen = function () {
        return this.http.get("http://localhost:8080/notification/unseen");
    };
    NotificationService.prototype.allSeen = function () {
        return this.http.get("http://localhost:8080/notification/allseen");
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/Services/socket-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/socket-data.service.ts ***!
  \*************************************************/
/*! exports provided: SocketDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketDataService", function() { return SocketDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var SocketDataService = /** @class */ (function () {
    function SocketDataService() {
        var _this = this;
        this.url = 'http://localhost:2000';
        this.getMessages = function (n) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('client1', function (message) {
                    observer.next(message);
                    n = n + 1;
                });
            });
        };
        this.getMessages1 = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('client2', function (message) {
                    observer.next(message);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.url);
    }
    SocketDataService.prototype.sendMessage = function (message) {
        this.socket.emit('client1', message);
    };
    SocketDataService.prototype.sendMessage1 = function (message) {
        this.socket.emit('client2', message);
    };
    SocketDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketDataService);
    return SocketDataService;
}());



/***/ }),

/***/ "./src/app/Services/student-services.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/student-services.service.ts ***!
  \******************************************************/
/*! exports provided: StudentServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServicesService", function() { return StudentServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StudentServicesService = /** @class */ (function () {
    function StudentServicesService(http) {
        this.http = http;
    }
    StudentServicesService.prototype.adduser = function (user) {
        /*
          const  headers = new Headers();
          headers.append('Content-Type','application/X-www-form=urlencoded');
          headers.append('Content-Type', 'application/json');
          let dataAsString = JSON.stringify(user);
          console.log(dataAsString);
          return this.http.post("http://localhost:8001/question",dataAsString)
          .map((response:Response)=>response.json())import { map } from 'rxjs/operators';
          .subscribe((data)=>{console.log("got smthg back",data);}
            ,(error)=>{console.log("Error!!!", error);}
             );*/
    };
    StudentServicesService.prototype.getProductLList = function () {
        return this.http.get("http://localhost:8080/product/all");
    };
    StudentServicesService.prototype.getUserById = function (id) {
        return this.http.get("http://localhost:8080/user/userbyid?id=" + id);
    };
    StudentServicesService.prototype.greeting = function () {
        console.log("hello mohamed");
    };
    StudentServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentServicesService);
    return StudentServicesService;
}());



/***/ }),

/***/ "./src/app/Services/toaster/toaster.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/toaster/toaster.service.ts ***!
  \*****************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ToastService = /** @class */ (function () {
    function ToastService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        this.notifnumber = 0;
        this.missionConfirmedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.missionAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Observable string streams
        this.num$ = this.missionAnnouncedSource.asObservable();
        this.missionConfirmed$ = this.missionConfirmedSource.asObservable();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    _this.keepAfterRouteChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    ToastService.prototype.getToast = function () {
        return this.subject.asObservable();
    };
    ToastService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = true; }
        this.toast(message + " notifivation number " + this.notifnumber, keepAfterRouteChange);
    };
    ToastService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = true; }
        this.toast(message, keepAfterRouteChange);
    };
    ToastService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = true; }
        this.toast(message, keepAfterRouteChange);
    };
    ToastService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = true; }
        this.toast(message, keepAfterRouteChange);
    };
    ToastService.prototype.toast = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = true; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ message: message });
    };
    ToastService.prototype.clear = function () {
        this.subject.next();
    };
    // Observable string streams
    // Service message commands
    ToastService.prototype.incrNotif = function () {
        this.notifnumber = this.notifnumber + 1;
        console.log(this.notifnumber);
    };
    ToastService.prototype.getNotifNumber = function () {
        return this.notifnumber;
    };
    // Service message commands
    ToastService.prototype.announceMission = function (mission) {
        this.missionAnnouncedSource.next(mission);
    };
    ToastService.prototype.confirmMission = function (astronaut) {
        this.missionConfirmedSource.next(astronaut);
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ToastService);
    return ToastService;
}());



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
/* harmony import */ var _student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student/student-details/student-details.component */ "./src/app/student/student-details/student-details.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _command_command_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command/command.component */ "./src/app/command/command.component.ts");







var routes = [{ path: 'studentdetails', component: _student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentDetailsComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"] },
    { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"] },
    { path: 'command', component: _command_command_component__WEBPACK_IMPORTED_MODULE_6__["CommandComponent"] },];
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-top-nav-bar  >\n\n</app-top-nav-bar>\n<!----<>app-toast-alerts></app-toast-alerts>-->\n<!--<app-socket></app-socket>-->\n\n<app-navbarmenu></app-navbarmenu>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to Student Platform\n  </h1>\n  \n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/toaster/toaster.service */ "./src/app/Services/toaster/toaster.service.ts");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/notification.service */ "./src/app/Services/notification.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(notifierService, ts, notifService) {
        var _this = this;
        this.notifService = notifService;
        this.title = 'Equipement Management';
        this.notifications = [];
        this.unSeenNotifications = [];
        this.mission = '<no mission announced>';
        this.confirmed = false;
        this.announced = false;
        this.toastservice = ts;
        this.notifier = notifierService;
        this.notifier.show({
            type: 'success',
            message: 'You are awesome! I mean it!',
            id: 'THAT_NOTIFICATION_ID',
        });
        this.notif = this.toastservice.getNotifNumber();
        this.subscription = ts.num$.subscribe(function (mission) {
            _this.notif = mission;
            _this.announced = true;
            _this.confirmed = false;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.confirm = function () {
        this.confirmed = true;
        //this.missionService.confirmMission(this.astronaut);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"], _Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
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
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/student-details/student-details.component */ "./src/app/student/student-details/student-details.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-edit/student-edit.component */ "./src/app/student-edit/student-edit.component.ts");
/* harmony import */ var _navbarmenu_navbarmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbarmenu/navbarmenu.component */ "./src/app/navbarmenu/navbarmenu.component.ts");
/* harmony import */ var _panier_panier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panier/panier.component */ "./src/app/panier/panier.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_socket_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/socket-data.service */ "./src/app/Services/socket-data.service.ts");
/* harmony import */ var _socket_socket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./socket/socket.component */ "./src/app/socket/socket.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _toast_alerts_toast_alerts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toast-alerts/toast-alerts.component */ "./src/app/toast-alerts/toast-alerts.component.ts");
/* harmony import */ var _components_toast_alerts_toast_toast_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/toast-alerts/toast/toast.component */ "./src/app/components/toast-alerts/toast/toast.component.ts");
/* harmony import */ var _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./top-nav-bar/top-nav-bar.component */ "./src/app/top-nav-bar/top-nav-bar.component.ts");
/* harmony import */ var _command_command_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./command/command.component */ "./src/app/command/command.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
                _student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__["CatalogComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
                _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentEditComponent"],
                _navbarmenu_navbarmenu_component__WEBPACK_IMPORTED_MODULE_11__["NavbarmenuComponent"],
                _panier_panier_component__WEBPACK_IMPORTED_MODULE_12__["PanierComponent"],
                _socket_socket_component__WEBPACK_IMPORTED_MODULE_15__["SocketComponent"],
                _toast_alerts_toast_alerts_component__WEBPACK_IMPORTED_MODULE_17__["ToastAlertsComponent"],
                _components_toast_alerts_toast_toast_component__WEBPACK_IMPORTED_MODULE_18__["ToastComponent"],
                _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["TopNavBarComponent"],
                _command_command_component__WEBPACK_IMPORTED_MODULE_20__["CommandComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_16__["NotifierModule"]
            ],
            providers: [_Services_socket_data_service__WEBPACK_IMPORTED_MODULE_14__["SocketDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/*!***********************************************!*\
  !*** ./src/app/catalog/catalog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Global #gauche {\n    float:left;\n    width:60%;\n}\n#Global #droite {\n    margin-left:60%   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjR2xvYmFsICNnYXVjaGUge1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6NjAlO1xufVxuI0dsb2JhbCAjZHJvaXRlIHtcbiAgICBtYXJnaW4tbGVmdDo2MCUgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Global\">\n  <div id=\"gauche\">\n\n  \n<h1>Catalog</h1>\n\n\n  <div class=\"container\">\n    <h2>Equipements List</h2>\n     <table class=\"table\">\n      <thead>\n        <tr>\n          <th>id</th>\n          <th>Name</th>\n          <th>Description</th>\n          <th>Quantity</th>\n          <th>Maximum</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n            <tr *ngFor=\"let  eq of Equipements\">\n                    <td>\n                        {{eq.id}}\n                    </td>\n                    <td>\n                        {{eq.name}}\n                    </td>\n                    <td>\n                        {{eq.description}}\n                    </td>\n                    <td>\n                      {{eq.quantity}}\n                  </td>\n                  <td>\n                    {{eq.max}}\n                </td>\n               \n              <td>\n                \n                  <button type=\"button\" (click)=\"onAddClick(eq)\" class=\"btn btn-success\">add to your cart</button>\n              </td>\n                  </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n  <div id=\"droite\">\n    <app-panier  [selectedEquipements]=\"selectedEquipements\" ></app-panier>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_catalog_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/catalog-services.service */ "./src/app/Services/catalog-services.service.ts");



var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(service) {
        this.service = service;
        this.selectedEquipements = [];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.getEquipementsList();
    };
    CatalogComponent.prototype.getEquipementsList = function () {
        var _this = this;
        this.service.getEquipementsList().subscribe(function (data) { return _this.Equipements = data; });
    };
    CatalogComponent.prototype.onAddClick = function (eq) {
        if (this.selectedEquipements.find(function (x) { return x == eq; }) != null) {
            console.log("existe deja");
        }
        else {
            this.selectedEquipements.push(eq);
        }
    };
    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/catalog/catalog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_catalog_services_service__WEBPACK_IMPORTED_MODULE_2__["CatalogServicesService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/command/command.component.css":
/*!***********************************************!*\
  !*** ./src/app/command/command.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmQvY29tbWFuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/command/command.component.html":
/*!************************************************!*\
  !*** ./src/app/command/command.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"card text-black bg-light mb-3\" style=\"width: auto;\">\n  <div class=\"card-header\">\n    <h2>Your Commands</h2>\n  </div>\n  <div class=\"card-body\">\n  \n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th>ref</th>\n            <th>equipment</th>\n            <th>quantity</th>\n            <th>Date of the Command</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n              <tr *ngFor=\"let  command of myCommands\">\n                     \n                      <td>\n                          {{command.ref}}\n                      </td>\n                      \n                      <td>\n                        {{command.equipement.name}}\n                    </td>\n                    <td>\n                      {{command.quantity}}\n                  </td>\n                  <td>\n                    {{command.date}}\n                </td>\n                <td>\n                  {{command.student.name}} {{command.student.lastname}}\n                </td>\n                 \n                 </tr>\n        </tbody>\n      </table>\n \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/command/command.component.ts":
/*!**********************************************!*\
  !*** ./src/app/command/command.component.ts ***!
  \**********************************************/
/*! exports provided: CommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandComponent", function() { return CommandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/command.service */ "./src/app/Services/command.service.ts");



var CommandComponent = /** @class */ (function () {
    function CommandComponent(service) {
        this.service = service;
        this.myCommands = [];
    }
    CommandComponent.prototype.ngOnInit = function () {
        this.getCommands();
    };
    CommandComponent.prototype.getCommands = function () {
        var _this = this;
        console.log(this.service.getAllCommands().subscribe(function (data) { return _this.myCommands = data; }));
    };
    CommandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-command',
            template: __webpack_require__(/*! ./command.component.html */ "./src/app/command/command.component.html"),
            styles: [__webpack_require__(/*! ./command.component.css */ "./src/app/command/command.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_command_service__WEBPACK_IMPORTED_MODULE_2__["CommandService"]])
    ], CommandComponent);
    return CommandComponent;
}());



/***/ }),

/***/ "./src/app/components/toast-alerts/toast/toast.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/toast-alerts/toast/toast.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 13px;\n\t/* for demo only */\n\tmargin: 8px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-family: inherit;\n  font-weight: bold;\n  color: inherit;\n  text-rendering: optimizelegibility;\n}\n\nh4 {\nfont-size: 14px;\n}\n\nh4, h5, h6 {\nline-height: 18px;\n}\n\np {\n  margin: 0 0 9px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  line-height: 18px;\n}\n\n.close {\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 18px;\n  color: #000000;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover {\n  color: #000000;\n  text-decoration: none;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n  cursor: pointer;\n}\n\n.alert {\n  padding: 8px 35px 8px 14px;\n  margin-bottom: 18px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  background-color: #fcf8e3;\n  border: 1px solid #fbeed5;\n  border-radius: 4px;\n  color: #c09853;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  line-height: 18px;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #468847;\n}\n\n.alert-danger,\n.alert-error {\n  background-color: #f2dede;\n  border-color: #eed3d7;\n  color: #b94a48;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #3a87ad;\n}\n\n.alert-block {\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.alert-block > p,\n.alert-block > ul {\n  margin-bottom: 0;\n}\n\n.alert-block p + p {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC1hbGVydHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDREQUE0RDtDQUM1RCxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjs7QUFFRDs7Ozs7O0VBTUUsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1DQUFtQztDQUNwQzs7QUFDRDtBQUNBLGdCQUFnQjtDQUNmOztBQUNEO0FBQ0Esa0JBQWtCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDREQUE0RDtFQUM1RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsMEJBQTBCO0VBRzFCLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjs7QUFDRDs7RUFFRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUNEOztFQUVFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3QtYWxlcnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcblx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHQvKiBmb3IgZGVtbyBvbmx5ICovXG5cdG1hcmdpbjogOHB4O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG59XG5oNCB7XG5mb250LXNpemU6IDE0cHg7XG59XG5oNCwgaDUsIGg2IHtcbmxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgOXB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC4yO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xufVxuLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMC40O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDhweCAzNXB4IDhweCAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYmVlZDU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2MwOTg1Mztcbn1cbi5hbGVydC1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYWxlcnQgLmNsb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtMjFweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uYWxlcnQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgY29sb3I6ICM0Njg4NDc7XG59XG4uYWxlcnQtZGFuZ2VyLFxuLmFsZXJ0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWVkM2Q3O1xuICBjb2xvcjogI2I5NGE0ODtcbn1cbi5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcbiAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuICBjb2xvcjogIzNhODdhZDtcbn1cbi5hbGVydC1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5hbGVydC1ibG9jayA+IHAsXG4uYWxlcnQtYmxvY2sgPiB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWxlcnQtYmxvY2sgcCArIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/toast-alerts/toast/toast.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/toast-alerts/toast/toast.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let toast of toasts\" >\n  <div class=\"alert alert-success\" style=\"width: 25%\">\n    <a class=\"close\" data-dismiss=\"alert\">×</a>\n    <strong>Hey You</strong> {{ toast.message }}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/toast-alerts/toast/toast.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/toast-alerts/toast/toast.component.ts ***!
  \******************************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/toaster/toaster.service */ "./src/app/Services/toaster/toaster.service.ts");



var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
        this.toasts = [];
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toastService.getToast().subscribe(function (toast) {
            if (!toast) {
                _this.toasts = [];
                return;
            }
            _this.toasts.push(toast);
            setTimeout(function () { return _this.removeToast(toast); }, 3000);
        });
    };
    ToastComponent.prototype.removeToast = function (toast) {
        this.toasts = this.toasts.filter(function (x) { return x !== toast; });
    };
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/components/toast-alerts/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.css */ "./src/app/components/toast-alerts/toast/toast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">MESSAGES</h1>\n    <p class=\"lead\">Here you can suggest something</p>\n  </div>\n</div>\n\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"sub\">Subject</label>\n    <input type=\"email\" class=\"form-control\" id=\"sub\" aria-describedby=\"emailHelp\" placeholder=\"Enter the subject of your message\">\n  \n  </div>\n \n    <div class=\"form-group\">\n      <label for=\"msg\">Message:</label>\n      <textarea class=\"form-control\" rows=\"5\" id=\"msg\" placeholder=\"Enter your message here\"></textarea>\n    </div>\n \n  \n  <button type=\"button\" class=\"btn btn-outline-success\">Send</button>\n</form>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/navbarmenu/navbarmenu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navbarmenu/navbarmenu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhcm1lbnUvbmF2YmFybWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navbarmenu/navbarmenu.component.html":
/*!******************************************************!*\
  !*** ./src/app/navbarmenu/navbarmenu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\" >\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample01\" aria-controls=\"navbarsExample01\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n   </button>\n<div class=\"navbar-collapse collapse hide\" id=\"navbarsExample01\" >\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n       \n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Profile</a>\n          <div  class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/studentdetails\">View your profile details</a>\n            <a class=\"dropdown-item\" routerLink=\"#\">Update your profile</a>\n            \n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link \" routerLink=\"/catalog\" >Catalog</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link \" routerLink=\"/command\" >Commands</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Messenger</a>\n          <div  class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/message\">Send a message</a>\n            <a class=\"dropdown-item\" routerLink=\"#\">Conversations</a>\n          </div>\n        </li>\n       \n      </ul>\n     \n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbarmenu/navbarmenu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navbarmenu/navbarmenu.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarmenuComponent", function() { return NavbarmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarmenuComponent = /** @class */ (function () {
    function NavbarmenuComponent() {
    }
    NavbarmenuComponent.prototype.ngOnInit = function () {
    };
    NavbarmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbarmenu',
            template: __webpack_require__(/*! ./navbarmenu.component.html */ "./src/app/navbarmenu/navbarmenu.component.html"),
            styles: [__webpack_require__(/*! ./navbarmenu.component.css */ "./src/app/navbarmenu/navbarmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarmenuComponent);
    return NavbarmenuComponent;
}());



/***/ }),

/***/ "./src/app/panier/panier.component.css":
/*!*********************************************!*\
  !*** ./src/app/panier/panier.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhbmllci9wYW5pZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/panier/panier.component.html":
/*!**********************************************!*\
  !*** ./src/app/panier/panier.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card text-white bg-dark mb-3\" style=\"width: auto;\">\n  <div class=\"card-header\">\n    <h2>Your Cart</h2>\n    <p style=\"float: right;\"> date: {{date}} </p>\n  </div>\n  <div class=\"card-body\">\n  \n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Quantity</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n              <tr *ngFor=\"let  eq of selectedEquipements\">\n                     \n                      <td>\n                          {{eq.name}}\n                      </td>\n                      \n                      <td>\n              \n                            <input  type=\"number\" [(ngModel)]=\"eq.quan\" max=\"eq.max\" max=\"eq.max\">\n                            <p *ngIf=\"eq.quan > eq.max\" >\n                              You have depassed the maximum permitted\n                             \n                            </p>\n                         \n                    </td>\n                   <td>\n                    <button type=\"button\" (click)=\"removeFromList(eq)\" class=\"btn btn-danger\" style=\"margin-left:50%;\">remove</button>\n                   </td>\n                 </tr>\n        </tbody>\n      </table>\n \n  </div>\n  <div class=\"card-footer\">\n    <button type=\"button\" (click)=\"onCommand()\" class=\"btn btn-success\" style=\"margin-left:35%;\">Submit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/panier/panier.component.ts":
/*!********************************************!*\
  !*** ./src/app/panier/panier.component.ts ***!
  \********************************************/
/*! exports provided: PanierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanierComponent", function() { return PanierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/command.service */ "./src/app/Services/command.service.ts");
/* harmony import */ var _Services_student_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/student-services.service */ "./src/app/Services/student-services.service.ts");




var PanierComponent = /** @class */ (function () {
    function PanierComponent(service, studentservice) {
        this.service = service;
        this.studentservice = studentservice;
        this.commands = [];
        this.ref = "";
        this.d = new Date();
        this.date = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDay();
    }
    PanierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref = "123456";
        this.studentservice.getUserById(2).subscribe(function (data) { return _this.student = data; });
    };
    PanierComponent.prototype.removeFromList = function (eq) {
        var index = this.selectedEquipements.indexOf(eq, 0);
        if (index > -1) {
            this.selectedEquipements.splice(index, 1);
        }
    };
    PanierComponent.prototype.onSubmit = function (eq) {
        console.log(eq.quan);
    };
    PanierComponent.prototype.onCommand = function () {
        this.service.addCommand(this.selectedEquipements, "", this.ref, this.student);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PanierComponent.prototype, "selectedEquipements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('master'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PanierComponent.prototype, "masterName", void 0);
    PanierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panier',
            template: __webpack_require__(/*! ./panier.component.html */ "./src/app/panier/panier.component.html"),
            styles: [__webpack_require__(/*! ./panier.component.css */ "./src/app/panier/panier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_command_service__WEBPACK_IMPORTED_MODULE_2__["CommandService"], _Services_student_services_service__WEBPACK_IMPORTED_MODULE_3__["StudentServicesService"]])
    ], PanierComponent);
    return PanierComponent;
}());



/***/ }),

/***/ "./src/app/socket/socket.component.css":
/*!*********************************************!*\
  !*** ./src/app/socket/socket.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2tldC9zb2NrZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/socket/socket.component.html":
/*!**********************************************!*\
  !*** ./src/app/socket/socket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  socket works!\n</p>\n\n<div *ngFor=\"let m of messages\">\n  {{m}}\n</div>\n\n<input [(ngModel)]=\"message\" (keyup)=\"$event.keyCode == 13 && sendMessage()\" />\n<button (click)=\"sendMessage()\">Send</button>\n\n<div *ngFor=\"let m of messages1\">\n  {{m}}\n</div>\n\n<input [(ngModel)]=\"message1\" (keyup)=\"$event.keyCode == 13 && sendMessage()\" />\n<button (click)=\"sendMessage1()\">Send</button>\n<app-toast></app-toast>"

/***/ }),

/***/ "./src/app/socket/socket.component.ts":
/*!********************************************!*\
  !*** ./src/app/socket/socket.component.ts ***!
  \********************************************/
/*! exports provided: SocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketComponent", function() { return SocketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_socket_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/socket-data.service */ "./src/app/Services/socket-data.service.ts");
/* harmony import */ var _Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/toaster/toaster.service */ "./src/app/Services/toaster/toaster.service.ts");




var SocketComponent = /** @class */ (function () {
    function SocketComponent(service, toastService) {
        this.service = service;
        this.toastService = toastService;
        this.message = "hi";
        this.message1 = "hi";
        this.messages = [];
        this.messages1 = [];
    }
    SocketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getMessages(this.n)
            .subscribe(function (message) {
            _this.messages.push(message);
            _this.Notif("client 1 recieve a message");
        });
        this.service
            .getMessages1()
            .subscribe(function (message) {
            _this.messages1.push(message);
            _this.Notif("client 2 recieve a message");
        });
    };
    SocketComponent.prototype.sendMessage = function () {
        this.service.sendMessage(this.message);
        this.message = '';
    };
    SocketComponent.prototype.sendMessage1 = function () {
        this.service.sendMessage1(this.message1);
        this.message1 = '';
    };
    SocketComponent.prototype.Notif = function (msg) {
        this.toastService.success(msg);
    };
    SocketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-socket',
            template: __webpack_require__(/*! ./socket.component.html */ "./src/app/socket/socket.component.html"),
            styles: [__webpack_require__(/*! ./socket.component.css */ "./src/app/socket/socket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_socket_data_service__WEBPACK_IMPORTED_MODULE_2__["SocketDataService"], _Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], SocketComponent);
    return SocketComponent;
}());



/***/ }),

/***/ "./src/app/student-edit/student-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-edit/student-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZWRpdC9zdHVkZW50LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-edit/student-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-edit/student-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/student-edit/student-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-edit/student-edit.component.ts ***!
  \********************************************************/
/*! exports provided: StudentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function() { return StudentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentEditComponent = /** @class */ (function () {
    function StudentEditComponent() {
    }
    StudentEditComponent.prototype.ngOnInit = function () {
    };
    StudentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-edit',
            template: __webpack_require__(/*! ./student-edit.component.html */ "./src/app/student-edit/student-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-edit.component.css */ "./src/app/student-edit/student-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentEditComponent);
    return StudentEditComponent;
}());



/***/ }),

/***/ "./src/app/student/student-details/student-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/student/student-details/student-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n}\n.emp-profile{\n    padding: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #fff;\n}\n.profile-img{\n    text-align: center;\n}\n.profile-img img{\n    width: 70%;\n    height: 100%;\n}\n.profile-img .file {\n    position: relative;\n    overflow: hidden;\n    margin-top: -20%;\n    width: 70%;\n    border: none;\n    border-radius: 0;\n    font-size: 15px;\n    background: #212529b8;\n}\n.profile-img .file input {\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n}\n.profile-head h5{\n    color: #333;\n}\n.profile-head h6{\n    color: #0062cc;\n}\n.profile-edit-btn{\n    border: none;\n    border-radius: 1.5rem;\n    width: 70%;\n    padding: 2%;\n    font-weight: 600;\n    color: #6c757d;\n    cursor: pointer;\n}\n.proile-rating{\n    font-size: 12px;\n    color: #818182;\n    margin-top: 5%;\n}\n.proile-rating span{\n    color: #495057;\n    font-size: 15px;\n    font-weight: 600;\n}\n.profile-head .nav-tabs{\n    margin-bottom:5%;\n}\n.profile-head .nav-tabs .nav-link{\n    font-weight:600;\n    border: none;\n}\n.profile-head .nav-tabs .nav-link.active{\n    border: none;\n    border-bottom:2px solid #0062cc;\n}\n.profile-work{\n    padding: 14%;\n    margin-top: -15%;\n}\n.profile-work p{\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n    margin-top: 10%;\n}\n.profile-work a{\n    text-decoration: none;\n    color: #495057;\n    font-weight: 600;\n    font-size: 14px;\n}\n.profile-work ul{\n    list-style: none;\n}\n.profile-tab label{\n    font-weight: 600;\n}\n.profile-tab p{\n    font-weight: 600;\n    color: #0062cc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LWRldGFpbHMvc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0REFBNEQ7Q0FDL0Q7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87Q0FDVjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XG59XG4uZW1wLXByb2ZpbGV7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJvZmlsZS1pbWd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1nIGltZ3tcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogLTIwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbn1cbi5wcm9maWxlLWhlYWQgaDV7XG4gICAgY29sb3I6ICMzMzM7XG59XG4ucHJvZmlsZS1oZWFkIGg2e1xuICAgIGNvbG9yOiAjMDA2MmNjO1xufVxuLnByb2ZpbGUtZWRpdC1idG57XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2lsZS1yYXRpbmd7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODE4MTgyO1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuLnByb2lsZS1yYXRpbmcgc3BhbntcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJze1xuICAgIG1hcmdpbi1ib3R0b206NSU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDYyY2M7XG59XG4ucHJvZmlsZS13b3Jre1xuICAgIHBhZGRpbmc6IDE0JTtcbiAgICBtYXJnaW4tdG9wOiAtMTUlO1xufVxuLnByb2ZpbGUtd29yayBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzgxODE4MjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5wcm9maWxlLXdvcmsgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZmlsZS13b3JrIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJvZmlsZS10YWIgbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLXRhYiBwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDYyY2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/student/student-details/student-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/student/student-details/student-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container emp-profile\">\n            <form method=\"post\">\n              \n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"profile-head\">\n                                <h5>{{user.name}} {{user.lastname}}</h5>\n                                <h6>\n                                    {{user.role}} \n                                </h6>\n                              \n                        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                    <div class=\"col-md-8\">\n                        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                        \n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <label>Name</label>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <p>{{user.name}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                          <div class=\"col-md-6\">\n                                              <label>Last Name</label>\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <p>{{user.lastname}}</p>\n                                          </div>\n                                      </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <label>Email</label>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <p>{{user.email}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <label>Phone</label>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <p>{{user.tel}} </p>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <label>Birthdate</label>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <p>{{user.birthdate}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                          <div class=\"col-md-6\">\n                                              <label>Adress</label>\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <p>{{user.adress}}</p>\n                                          </div>\n                                      </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </form>           \n        </div>"

/***/ }),

/***/ "./src/app/student/student-details/student-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/student/student-details/student-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_student_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/student-services.service */ "./src/app/Services/student-services.service.ts");



var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(service) {
        this.service = service;
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserById(2).subscribe(function (data) { return _this.user = data; });
        this.fullname = this.user.name + " " + this.user.lastname;
    };
    StudentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details.component.html */ "./src/app/student/student-details/student-details.component.html"),
            styles: [__webpack_require__(/*! ./student-details.component.css */ "./src/app/student/student-details/student-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_student_services_service__WEBPACK_IMPORTED_MODULE_2__["StudentServicesService"]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Hello dear Student!</h4>\n\n<nav>\n  <a routerLink=\"/studentdetails\" >Your details</a> <br>\n    <a routerLink=\"/catalog\" >Catalog</a> <br>\n    <a routerLink=\"/message\" >Send a message</a>\n</nav>\n<div>\n<p>{{this.x}}</p> \n<button (click)=\"add(this.x)\"type=\"button\" class=\"btn btn-success\">increment</button>\n</div>\n<div class=\"container\">\n  <h2>Users List</h2>\n   <table class=\"table\">\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>Name</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n          <tr *ngFor=\"let  user of users\">\n                  <td>\n                      {{user.id}}\n                  </td>\n                  <td>\n                      {{user.name}}\n                  </td>\n                  <td>\n                      {{user.description}}\n                  </td>\n                \n                  <td> \n                    <div class=\"container\">\n                      <button routerLink=\"/quizedit\" class=\"btn btn-outline-success btn-md\" (click)=\"edit(user.id)\" >Edit</button>\n                       <button class=\"btn btn-outline-dark btn-md\" >Details</button>\n                        <button (click)=\"delete(user.id)\" class=\"btn btn-outline-danger btn-md\">Delete</button>\n                    </div>\n                  </td>\n                </tr>\n    </tbody>\n  </table>\n</div>\n\n<label>\n  name: {{this.name}}\n</label>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_student_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/student-services.service */ "./src/app/Services/student-services.service.ts");



var StudentComponent = /** @class */ (function () {
    function StudentComponent(service) {
        this.service = service;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.greeting();
        this.name = "mohamed";
        console.log(this.service.getProductLList().subscribe(function (data) { return _this.users = data; }));
    };
    StudentComponent.prototype.add = function (a) {
        console.log(this.service.getProductLList());
    };
    StudentComponent.prototype.getList = function () {
        console.log(this.service.getProductLList());
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_student_services_service__WEBPACK_IMPORTED_MODULE_2__["StudentServicesService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/toast-alerts/toast-alerts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/toast-alerts/toast-alerts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvYXN0LWFsZXJ0cy90b2FzdC1hbGVydHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/toast-alerts/toast-alerts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/toast-alerts/toast-alerts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Toaster Notifications</h1>\n<div class=\"flex\">\n  \n  <button type=\"button\" (click)=\"success()\" class=\"btn btn-success\" style=\"margin-left:10px;\">success</button>\n  <button class=\"btn btn-danger\" (click)=\"error()\"style=\"margin-left:10px;\">Error</button>\n  <button class=\"btn btn-primary\" (click)=\"info()\"style=\"margin-left:10px;\">Info</button>\n  <button class=\"btn btn-dark\" (click)=\"warn()\"style=\"margin-left:10px;\">Warn</button>\n  <button class=\"btn btn-light\" (click)=\"clear()\" aria-label=\"clear all\"style=\"margin-left:10px;\">X</button>\n</div>\n<div class=\"toast-container absolute bottom-2 right-2\">\n  <app-toast></app-toast>\n</div>"

/***/ }),

/***/ "./src/app/toast-alerts/toast-alerts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/toast-alerts/toast-alerts.component.ts ***!
  \********************************************************/
/*! exports provided: ToastAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastAlertsComponent", function() { return ToastAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/toaster/toaster.service */ "./src/app/Services/toaster/toaster.service.ts");



var ToastAlertsComponent = /** @class */ (function () {
    function ToastAlertsComponent(toastService) {
        this.toastService = toastService;
    }
    ToastAlertsComponent.prototype.success = function () {
        this.toastService.success('Success!');
        this.toastService.incrNotif();
    };
    ToastAlertsComponent.prototype.error = function () {
        this.toastService.error('Oops, something went wrong.');
    };
    ToastAlertsComponent.prototype.info = function () {
        this.toastService.info('Here is some more info...');
    };
    ToastAlertsComponent.prototype.warn = function () {
        this.toastService.warn('This is a warning.');
    };
    ToastAlertsComponent.prototype.clear = function () {
        this.toastService.clear();
    };
    ToastAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast-alerts',
            template: __webpack_require__(/*! ./toast-alerts.component.html */ "./src/app/toast-alerts/toast-alerts.component.html"),
            styles: [__webpack_require__(/*! ./toast-alerts.component.css */ "./src/app/toast-alerts/toast-alerts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], ToastAlertsComponent);
    return ToastAlertsComponent;
}());



/***/ }),

/***/ "./src/app/top-nav-bar/top-nav-bar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/top-nav-bar/top-nav-bar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n\n.navbar-icon-top .navbar-nav .nav-link > .fa {\n  position: relative;\n  width: 36px;\n  font-size: 24px;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {\n  font-size: 0.75rem;\n  position: absolute;\n  right: 0;\n  font-family: sans-serif;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa {\n  top: 3px;\n  line-height: 12px;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {\n  top: -10px;\n}\n\n@media (min-width: 576px) {\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvdG9wLW5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7O0FBRXJGO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxVQUFVO0dBQ1g7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixPQUFPO0lBQ1Asa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsVUFBVTtHQUNYO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLFVBQVU7R0FDWDtDQUNGOztBQUVEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxVQUFVO0dBQ1g7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3RvcC1uYXYtYmFyL3RvcC1uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcblxuLm5hdmJhci1pY29uLXRvcCAubmF2YmFyLW5hdiAubmF2LWxpbmsgPiAuZmEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5uYXZiYXItaWNvbi10b3AgLm5hdmJhci1uYXYgLm5hdi1saW5rID4gLmZhID4gLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLm5hdmJhci1pY29uLXRvcCAubmF2YmFyLW5hdiAubmF2LWxpbmsgPiAuZmEge1xuICB0b3A6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5uYXZiYXItaWNvbi10b3AgLm5hdmJhci1uYXYgLm5hdi1saW5rID4gLmZhID4gLmJhZGdlIHtcbiAgdG9wOiAtMTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXItaWNvbi10b3AubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLm5hdmJhci1pY29uLXRvcC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5uYXYtbGluayA+IC5mYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgbWFyZ2luOiAycHggYXV0byA0cHggYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAubmF2YmFyLWljb24tdG9wLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLm5hdi1saW5rID4gLmZhID4gLmJhZGdlIHtcbiAgICB0b3A6IC03cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItaWNvbi10b3AubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLm5hdmJhci1pY29uLXRvcC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5uYXYtbGluayA+IC5mYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgbWFyZ2luOiAycHggYXV0byA0cHggYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAubmF2YmFyLWljb24tdG9wLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rID4gLmZhID4gLmJhZGdlIHtcbiAgICB0b3A6IC03cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXItaWNvbi10b3AubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLm5hdmJhci1pY29uLXRvcC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayA+IC5mYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgbWFyZ2luOiAycHggYXV0byA0cHggYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAubmF2YmFyLWljb24tdG9wLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rID4gLmZhID4gLmJhZGdlIHtcbiAgICB0b3A6IC03cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubmF2YmFyLWljb24tdG9wLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5uYXZiYXItaWNvbi10b3AubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAubmF2LWxpbmsgPiAuZmEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIG1hcmdpbjogMnB4IGF1dG8gNHB4IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLm5hdmJhci1pY29uLXRvcC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5uYXYtbGluayA+IC5mYSA+IC5iYWRnZSB7XG4gICAgdG9wOiAtN3B4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/top-nav-bar/top-nav-bar.component.html":
/*!********************************************************!*\
  !*** ./src/app/top-nav-bar/top-nav-bar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<nav class=\"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          Home\n          <span class=\"sr-only\">(current)</span>\n          </a>\n      </li>\n    \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/message\">\n          <i class=\"fa fa-envelope-o\">\n            <span class=\"badge badge-danger\">0</span>\n          </i>\n          Messages\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a (click)=\"notifSeen()\" class=\"nav-link\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n           <i id=\"notificationsIcon\" class=\"fa fa-bell-o\" >\n            <span class=\"badge badge-danger\">{{unSeenNotifications.length}}</span>\n            \n           </i>\n           Notification\n          </a>\n          <div  class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a *ngFor=\"let  eq of notifications\" class=\"dropdown-item\"> {{eq.text}}</a>\n            \n            \n          </div>\n      </li>\n      \n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/top-nav-bar/top-nav-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-nav-bar/top-nav-bar.component.ts ***!
  \******************************************************/
/*! exports provided: TopNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function() { return TopNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/notification.service */ "./src/app/Services/notification.service.ts");



var TopNavBarComponent = /** @class */ (function () {
    function TopNavBarComponent(notifService) {
        this.notifService = notifService;
        this.notifications = [];
        this.unSeenNotifications = [];
        this.no = [];
    }
    TopNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifService.getAllNotifications().subscribe(function (data) { return _this.notifications = data; });
        this.notifService.getUnseen().subscribe(function (data) { return _this.unSeenNotifications = data; });
        this.num = this.notifications.length;
    };
    TopNavBarComponent.prototype.notifSeen = function () {
        var _this = this;
        this.notifService.allSeen().subscribe(function (data) { return _this.notifications = data; });
        this.notifService.getAllNotifications().subscribe(function (data) { return _this.notifications = data; });
        // this.notifService.getUnseen().subscribe((data: Notification[]) => this.unSeenNotifications = data);
        this.unSeenNotifications.length = 0;
    };
    TopNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-nav-bar',
            template: __webpack_require__(/*! ./top-nav-bar.component.html */ "./src/app/top-nav-bar/top-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-nav-bar.component.css */ "./src/app/top-nav-bar/top-nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], TopNavBarComponent);
    return TopNavBarComponent;
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

module.exports = __webpack_require__(/*! /home/mohamed/NetBeansProjects/sp/src/main/EquipementManagement/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map