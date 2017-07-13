webpackJsonp([3],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSearchResultsPageModule", function() { return ProfileSearchResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_search_results__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileSearchResultsPageModule = (function () {
    function ProfileSearchResultsPageModule() {
    }
    return ProfileSearchResultsPageModule;
}());
ProfileSearchResultsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_search_results__["a" /* ProfileSearchResultsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_search_results__["a" /* ProfileSearchResultsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_search_results__["a" /* ProfileSearchResultsPage */]
        ]
    })
], ProfileSearchResultsPageModule);

//# sourceMappingURL=profile-search-results.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_git_hub_service_github_service__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileSearchResultsPage = (function () {
    function ProfileSearchResultsPage(github, navCtrl, navParams) {
        this.github = github;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfileSearchResultsPage.prototype.getUserInformation = function () {
        var _this = this;
        this.github.getUserInformation(this.username).subscribe(function (data) { return _this.user = data; });
        this.github.getRepositoryInformation(this.username).subscribe(function (data) { return _this.repositories = data; });
        // this.github.mockGetUserInformation(this.username).subscribe((data:User)=> this.user=data);
        // this.github.mockGetRepositoryInfo(this.username).subscribe((data:Repository[]) => this.repositories = data );
    };
    ProfileSearchResultsPage.prototype.ionViewDidLoad = function () {
        this.username = this.navParams.get('username');
        if (this.username) {
            this.getUserInformation();
        }
    };
    return ProfileSearchResultsPage;
}());
ProfileSearchResultsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: 'profile/results/:username'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-profile-search-results',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\GitHub\src\pages\profile-search-results\profile-search-results.html"*/'<!--\n  Generated template for the ProfileSearchResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <search-results [user] ="user"></search-results>\n  <repositories *ngFor="let repo of repositories" [repository]= "repo" ></repositories>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Eduardo\Projects\GitHub\src\pages\profile-search-results\profile-search-results.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_git_hub_service_github_service__["a" /* GitHubServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_git_hub_service_github_service__["a" /* GitHubServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], ProfileSearchResultsPage);

var _a, _b, _c;
//# sourceMappingURL=profile-search-results.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_results_search_results_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repositories_repositories_component__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__search_results_search_results_component__["a" /* SearchResultsComponent */], __WEBPACK_IMPORTED_MODULE_3__repositories_repositories_component__["a" /* RepositoriesComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__search_results_search_results_component__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__repositories_repositories_component__["a" /* RepositoriesComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    return SearchResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], SearchResultsComponent.prototype, "user", void 0);
SearchResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'search-results',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\GitHub\src\components\search-results\search-results.component.html"*/'\n<ion-item *ngIf = "user" text-wrap> \n  <ion-avatar item-left>\n    <img [src]="user.avatar_url" alt="">\n  </ion-avatar>\n  <h2>{{user.name}}</h2>\n  <h3>{{user.company}}</h3>\n  <p>{{user.location}}</p>\n  <p text-wrap>{{user.bio}}</p>\n</ion-item>'/*ion-inline-end:"C:\Users\Eduardo\Projects\GitHub\src\components\search-results\search-results.component.html"*/
    })
], SearchResultsComponent);

//# sourceMappingURL=search-results.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var RepositoriesComponent = (function () {
    function RepositoriesComponent() {
    }
    return RepositoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], RepositoriesComponent.prototype, "repository", void 0);
RepositoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'repositories',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\GitHub\src\components\repositories\repositories.component.html"*/'<ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      {{repository.name}}\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    {{repository.description}}\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"C:\Users\Eduardo\Projects\GitHub\src\components\repositories\repositories.component.html"*/
    })
], RepositoriesComponent);

//# sourceMappingURL=repositories.component.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map