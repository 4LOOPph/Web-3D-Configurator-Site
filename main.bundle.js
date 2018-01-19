webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__furniture_furniture_component__ = __webpack_require__("../../../../../src/app/furniture/furniture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cars_cars_component__ = __webpack_require__("../../../../../src/app/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_basiclayout_basiclayout_component__ = __webpack_require__("../../../../../src/app/layout/basiclayout/basiclayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__furniture2_furniture2_component__ = __webpack_require__("../../../../../src/app/furniture2/furniture2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fbxsample_fbxsample_component__ = __webpack_require__("../../../../../src/app/fbxsample/fbxsample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__furniture_furniture_component__["a" /* FurnitureComponent */],
                __WEBPACK_IMPORTED_MODULE_7__cars_cars_component__["a" /* CarsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__layout_basiclayout_basiclayout_component__["a" /* BasiclayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__furniture2_furniture2_component__["a" /* Furniture2Component */],
                __WEBPACK_IMPORTED_MODULE_10__fbxsample_fbxsample_component__["a" /* FbxsampleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__test_test_component__["a" /* TestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* ROUTES */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__furniture_furniture_component__ = __webpack_require__("../../../../../src/app/furniture/furniture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cars_cars_component__ = __webpack_require__("../../../../../src/app/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture2_furniture2_component__ = __webpack_require__("../../../../../src/app/furniture2/furniture2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_basiclayout_basiclayout_component__ = __webpack_require__("../../../../../src/app/layout/basiclayout/basiclayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fbxsample_fbxsample_component__ = __webpack_require__("../../../../../src/app/fbxsample/fbxsample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");






var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'furnitures', pathMatch: 'full' },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__layout_basiclayout_basiclayout_component__["a" /* BasiclayoutComponent */],
        children: [
            { path: 'furnitures', component: __WEBPACK_IMPORTED_MODULE_0__furniture_furniture_component__["a" /* FurnitureComponent */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__layout_basiclayout_basiclayout_component__["a" /* BasiclayoutComponent */],
        children: [
            { path: 'cars', component: __WEBPACK_IMPORTED_MODULE_1__cars_cars_component__["a" /* CarsComponent */] },
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__layout_basiclayout_basiclayout_component__["a" /* BasiclayoutComponent */],
        children: [
            { path: 'furniture2', component: __WEBPACK_IMPORTED_MODULE_2__furniture2_furniture2_component__["a" /* Furniture2Component */] },
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__layout_basiclayout_basiclayout_component__["a" /* BasiclayoutComponent */],
        children: [
            { path: 'fbxsample', component: __WEBPACK_IMPORTED_MODULE_4__fbxsample_fbxsample_component__["a" /* FbxsampleComponent */] },
            { path: 'test', component: __WEBPACK_IMPORTED_MODULE_5__test_test_component__["a" /* TestComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'furnitures' }
];


/***/ }),

/***/ "../../../../../src/app/cars/cars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cars/cars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cars works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/cars/cars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarsComponent = (function () {
    function CarsComponent() {
    }
    CarsComponent.prototype.ngOnInit = function () {
    };
    CarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cars',
            template: __webpack_require__("../../../../../src/app/cars/cars.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cars/cars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fbxsample/fbxsample.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fbxsample/fbxsample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 mb-3\">\n          <select class=\"form-control\" id=\"inputGroupSelect01\" [(ngModel)]=\"appModels\" (change)=\"selectModel()\">\n            <option selected value=\"\">Select Model</option>\n            <option value=\"sofa\">Sofa</option>\n            <option value=\"bed_v1\">bedV1</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-9\" id=\"rendererDiv\">\n      <div id=\"renderHere\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fbxsample/fbxsample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbxsampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FbxsampleComponent = (function () {
    function FbxsampleComponent() {
        this.title = 'app';
        this.appModels = "";
    }
    FbxsampleComponent.prototype.ngOnInit = function () {
        if (!Detector.webgl)
            Detector.addGetWebGLMessage();
        this.initGUI();
    };
    FbxsampleComponent.prototype.initGUI = function () {
        var color = 0x000000;
        var backgroundMesh;
        var texturePainting;
        var texturePainting2;
        var texturePainting_Table;
        var _mesh;
        var tableObject = this;
        var innerW = document.getElementById('rendererDiv').offsetWidth;
        var innerH = document.getElementById('rendererDiv').offsetHeight;
        var appModel = localStorage.getItem('app.model');
        var appTextureTop = localStorage.getItem('app.texture.top');
        var appTextureLegs = localStorage.getItem('app.texture.legs');
        if (appModel) {
            this.appModels = appModel;
        }
        var camera, controls, scene, renderer;
        var lighting, ambient, keyLight, fillLight, backLight;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        /* Camera */
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 3;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        /* Scene */
        scene = new THREE.Scene();
        this.currentScene = scene;
        lighting = false;
        ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);
        keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);
        fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);
        backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();
        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(innerW, window.innerHeight);
        document.getElementById('renderHere').style.cssText = 'margin-right: 50px; border: 1px solid black;';
        document.getElementById('renderHere').appendChild(renderer.domElement);
        if (appModel === 'sofa') {
            modelSofa();
        }
        else if (appModel === 'bed_v1') {
            modelBed_v1();
        }
        window.addEventListener('resize', onWindowResize, false);
        function modelSofa() {
            var _textureLoader = new THREE.TextureLoader();
            var objLoaderOfficeChair = new THREE.OBJLoader();
            objLoaderOfficeChair.setPath('assets/models/Sofa_FBX/');
            objLoaderOfficeChair.load('Sofa.obj', function (object) {
                object.scale.set(200, 200, 200);
                center3DModel(object);
                camera.position.z = 600;
                object.traverse(function (child) {
                    if (child.material) {
                        if (child instanceof THREE.Mesh) {
                            console.log('THREE.Mesh');
                        }
                        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
                            console.log('MeshPhongMaterial');
                            child.material.map = _textureLoader.load('assets/models/Sofa_FBX/Sofa_AlbedoTransparency.png');
                            child.material.aoMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_AO.png');
                            child.material.metalnessMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_MetallicSmoothness.png');
                            child.material.normalMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_Normal.png');
                        }
                        console.log('chld', child.material);
                        child.material.needsUpdate = true;
                    }
                });
                object.updateMatrix();
                scene.add(object);
            });
        }
        this.functionModelSofa = modelSofa;
        function modelBed_v1() {
            var _textureLoader = new THREE.TextureLoader();
            var mtlLoaderSofa = new THREE.MTLLoader();
            mtlLoaderSofa.setBaseUrl('assets/models/Bed_v1/');
            mtlLoaderSofa.setPath('assets/models/Bed_v1/');
            mtlLoaderSofa.load('Bed.mtl', function (materials) {
                materials.preload();
                console.log('materials', materials);
                var objLoaderOfficeChair = new THREE.OBJLoader();
                objLoaderOfficeChair.setMaterials(materials);
                objLoaderOfficeChair.setPath('assets/models/Bed_v1/');
                objLoaderOfficeChair.load('Bed.obj', function (object) {
                    object.scale.set(260, 260, 260);
                    center3DModel(object);
                    camera.position.z = 600;
                    object.traverse(function (child) {
                        if (child.material) {
                            if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
                                console.log('MeshPhongMaterial');
                                if (child.material.name === "Base") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Base_AlbedoTransparency.jpg');
                                    child.material.aoMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_AO.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_Normal.jpg');
                                }
                                if (child.material.name === "Pillows") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_AlbedoTransparency.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_Normal.jpg');
                                }
                                if (child.material.name === "Covers") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_AlbedoTransparency.jpg');
                                    child.material.aoMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_AO.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_Normal.jpg');
                                }
                            }
                            console.log('chld', child.material);
                            child.material.needsUpdate = true;
                        }
                    });
                    object.updateMatrix();
                    scene.add(object);
                });
            });
        }
        this.functionModelBed_v1 = modelBed_v1;
        function onWindowResize() {
            camera.aspect = innerW / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerW, window.innerHeight);
        }
        function control() {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;
            controls.minDistance = 0;
            //controls.maxDistance = 3;
            controls.minPolarAngle = 0; // radians
            controls.maxPolarAngle = Math.PI; // radians
            controls.maxPolarAngle = Math.PI / 2;
        }
        ;
        control();
        var animate = function () {
            requestAnimationFrame(animate);
            // renderer.setClearColorHex(0xffffff, 1);
            renderer.autoClear = false;
            renderer.clear();
            if (appModel) {
                // renderer.render(backgroundScene, backgroundCamera);
            }
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();
        function center3DModel(object) {
            var thsOBJ = new THREE.Box3().setFromObject(object);
            var valX = (thsOBJ.getSize().x);
            var valY = (thsOBJ.getSize().y);
            var valZ = (thsOBJ.getSize().z);
            return object.position.set(((thsOBJ.getCenter().x) * -1), (valY * -1) / 2, ((thsOBJ.getCenter().z) * -1));
        }
    };
    FbxsampleComponent.prototype.selectModel = function () {
        localStorage.setItem('app.model', this.appModels);
        //this.showModel(this.appModels);
        //location.reload();
        console.log(this.appModels);
        for (var i = 0; i < this.currentScene.children.length; i++) {
            var child = this.currentScene.children[i];
            console.log(child);
            if (child.type === 'Group') {
                this.currentScene.remove(child);
                this.showModel(this.appModels);
                break;
            }
        }
    };
    FbxsampleComponent.prototype.showModel = function (model) {
        switch (model) {
            case "sofa":
                this.functionModelSofa();
                break;
            case "bed_v1":
                this.functionModelBed_v1();
                break;
            default:
                break;
        }
    };
    FbxsampleComponent.prototype.setTextureTop = function (texture) {
        if (texture == "tableture") {
            var url = "assets/models/Table/Gio_Normal.jpn";
            console.log(this.tableObject);
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = "Anonymous";
            var texturePainting_1 = textureLoader.load(url);
            this.tableObject.traverse(function (child) {
                if (child.material) {
                    if (child.material.name == "MeshPhongMaterial") {
                        if (texturePainting_1) {
                            child.material.map = texturePainting_1;
                            child.material.needsUpdate = true;
                        }
                    }
                }
            });
        }
        else {
            localStorage.setItem('app.texture.top', texture);
            location.reload();
        }
    };
    FbxsampleComponent.prototype.setTextureLegs = function (texture) {
        localStorage.setItem('app.texture.legs', texture);
        location.reload();
    };
    FbxsampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fbxsample',
            template: __webpack_require__("../../../../../src/app/fbxsample/fbxsample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fbxsample/fbxsample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FbxsampleComponent);
    return FbxsampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/furniture/furniture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/furniture/furniture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <div class=\"col-md-12 mb-3\">\r\n          <select class=\"form-control\" id=\"inputGroupSelect01\" [(ngModel)]=\"appModels\" (change)=\"selectModel()\">\r\n            <option selected value=\"\">Select Model</option>\r\n            <option value=\"chair\">Chair</option>\r\n            <option value=\"officechair\">Office Chair</option>\r\n            <option value=\"bed\">Bed</option>\r\n            <option value=\"table\">Table</option>\r\n            <option value=\"sofa\">Sofa</option>\r\n            <option value=\"bed_v1\">bedV1</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div id=\"accordion\" role=\"tablist\">\r\n        <div class=\"card mb-1\">\r\n          <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n            <h5 class=\"mb-0\">\r\n              <a role=\"button\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                Sizes\r\n              </a>\r\n            </h5>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"form-group\">\r\n              <div class=\"col-md-12 mb-3\">\r\n                <select class=\"form-control\" id=\"inputGroupSelect01\">\r\n                  <option selected>Choose...</option>\r\n                  <option value=\"1\">One</option>\r\n                  <option value=\"2\">Two</option>\r\n                  <option value=\"3\">Three</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mb-1\">\r\n          <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n            <h5 class=\"mb-0\">\r\n              <a role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                Top\r\n              </a>\r\n            </h5>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/1.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('1');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/2.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('2');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/3.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('3');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/4.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('4');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/5.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('5');\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/6.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('6');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/7.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('7');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/8.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('8');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/9.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('9');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/top/9.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureTop('tableture');\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\r\n            <h5 class=\"mb-0\">\r\n              <a role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                Legs and Rails\r\n              </a>\r\n            </h5>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/1.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('1');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/2.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('2');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/3.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('3');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/4.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('4');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/5.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('5');\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/6.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('6');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/7.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('7');\">\r\n              </div>\r\n              <div class=\"card ml-2\">\r\n                <img src=\"./assets/img/table/8.jpg\" alt=\"Card image cap\" style=\"width: 45px;height: 45px;\" (click)=\"setTextureLegs('8');\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9\" id=\"rendererDiv\">\r\n      <div id=\"renderHere\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/furniture/furniture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FurnitureComponent = (function () {
    function FurnitureComponent() {
        this.title = 'app';
        this.appModels = "";
    }
    FurnitureComponent.prototype.ngOnInit = function () {
        if (!Detector.webgl)
            Detector.addGetWebGLMessage();
        this.initGUI();
    };
    FurnitureComponent.prototype.initGUI = function () {
        var color = 0x000000;
        var group = new THREE.Group();
        var objects = [];
        var backgroundMesh;
        var texturePainting;
        var texturePainting2;
        var texturePainting_Table;
        var controls;
        var _mesh;
        var tableObject = this;
        var innerW = document.getElementById('rendererDiv').offsetWidth;
        var innerH = document.getElementById('rendererDiv').offsetHeight;
        var appModel = localStorage.getItem('app.model');
        var appTextureTop = localStorage.getItem('app.texture.top');
        var appTextureLegs = localStorage.getItem('app.texture.legs');
        if (appModel) {
            this.appModels = appModel;
        }
        var scene = new THREE.Scene();
        this.currentScene = scene;
        var camera = new THREE.PerspectiveCamera(75, innerW / window.innerHeight, 0.1, 2500);
        camera.position.z = 250;
        // camera.position.x = 400;
        // camera.position.y = 150;
        camera.lookAt(new THREE.Vector3(10, 10, 50));
        var light = new THREE.PointLight(0xEEEEEE);
        //light.position.set(20, 0, 20);
        light.position.y = 300;
        scene.add(light);
        var lightAmb = new THREE.AmbientLight(0x777777);
        scene.add(lightAmb);
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(innerW, window.innerHeight);
        document.getElementById('renderHere').style.cssText = 'margin-right: 50px; border: 1px solid black;';
        document.getElementById('renderHere').appendChild(renderer.domElement);
        var url = "assets/img/table/top/" + appTextureTop + ".jpg";
        var url2 = "assets/img/table/" + appTextureLegs + ".jpg";
        var textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = "Anonymous";
        texturePainting = textureLoader.load(url);
        texturePainting2 = textureLoader.load(url2);
        /* texturePainting = THREE.ImageUtils.loadTexture(url);
        texturePainting2 = THREE.ImageUtils.loadTexture(url2); */
        texturePainting.wrapS = THREE.RepeatWrapping;
        texturePainting.wrapT = THREE.RepeatWrapping;
        texturePainting.repeat.set(4, 4, 4);
        texturePainting2.wrapS = THREE.RepeatWrapping;
        texturePainting2.wrapT = THREE.RepeatWrapping;
        texturePainting2.repeat.set(4, 4, 4);
        if (appModel === 'chair') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelChair()
            }));
        }
        else if (appModel === 'officechair') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelOfficeChair()
            }));
        }
        else if (appModel === 'bed') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelBed()
            }));
        }
        else if (appModel === 'table') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelNewTable()
            }));
        }
        else if (appModel === 'sofa') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelSofa()
            }));
        }
        else if (appModel === 'bed_v1') {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
                map: modelBed_v1()
            }));
        }
        else {
            backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10));
        }
        backgroundMesh.material.depthTest = false;
        backgroundMesh.material.depthWrite = true;
        console.log('backgroundMesh: ', backgroundMesh);
        this.currentObject = backgroundMesh;
        var backgroundScene = new THREE.Scene();
        var backgroundCamera = new THREE.Camera();
        backgroundScene.add(backgroundCamera);
        backgroundScene.add(backgroundMesh);
        window.addEventListener('resize', onWindowResize, false);
        function modelChair() {
            var mtlLoaderChair = new THREE.MTLLoader();
            mtlLoaderChair.setBaseUrl('assets/models/chair/');
            mtlLoaderChair.setPath('assets/models/chair/');
            mtlLoaderChair.load('chair.mtl', function (materials) {
                materials.preload();
                materials.materials.fusta_taula.map.magFilter = THREE.NearestFilter;
                materials.materials.fusta_taula.map.minFilter = THREE.LinearFilter;
                var objLoaderChair = new THREE.OBJLoader();
                objLoaderChair.setMaterials(materials);
                objLoaderChair.setPath('assets/models/chair/');
                objLoaderChair.load('chair.obj', function (object) {
                    object.scale.set(400, 400, 400);
                    // <position object>
                    center3DModel(object);
                    object.rotation.y = 0;
                    camera.position.z = 500;
                    object.traverse(function (child) {
                        console.log('chld', child.material);
                        if (child.material) {
                            // SEAT
                            if (child.material.name === 'coixi_cadira') {
                                if (texturePainting) {
                                    child.material.map = texturePainting;
                                    child.material.needsUpdate = true;
                                }
                            }
                            // LEGS
                            if (child.material.name === 'fusta_taula') {
                                if (texturePainting2) {
                                    child.material.map = texturePainting2;
                                    child.material.needsUpdate = true;
                                }
                            }
                            child.material.needsUpdate = true;
                        }
                    });
                    object.updateMatrix();
                    scene.add(object);
                });
            });
        }
        ;
        this.functionModalChair = modelChair;
        function modelBed() {
            var mtlLoaderBed = new THREE.MTLLoader();
            mtlLoaderBed.setBaseUrl('assets/models/bed/');
            mtlLoaderBed.setPath('assets/models/bed/');
            mtlLoaderBed.load('juniorBed.mtl', function (materials) {
                materials.preload();
                materials.materials.Wood.map.magFilter = THREE.NearestFilter;
                materials.materials.Wood.map.minFilter = THREE.LinearFilter;
                var objLoaderBed = new THREE.OBJLoader();
                objLoaderBed.setMaterials(materials);
                objLoaderBed.setPath('assets/models/bed/');
                objLoaderBed.load('juniorBed.obj', function (object) {
                    object.scale.set(2, 2, 2);
                    // <position object>
                    center3DModel(object);
                    object.rotation.y = -4.7;
                    object.traverse(function (child) {
                        console.log('chld', child.material);
                        if (child.material) {
                            console.log('chld', child.material);
                            // PILLOW
                            if (child.material.name === 'pillow') {
                                if (texturePainting) {
                                    child.material.map = texturePainting;
                                    child.material.needsUpdate = true;
                                    // child.material.color.setRGB(0, 54, 135);
                                }
                            }
                            if (child.material.name === 'couch') {
                                if (texturePainting) {
                                    child.material.map = texturePainting;
                                    // child.material.color.setRGB(0, 54, 135);
                                }
                            }
                            // WOOD
                            if (child.material.name === 'Wood') {
                                if (texturePainting2) {
                                    child.material.map = texturePainting2;
                                    child.material.needsUpdate = true;
                                }
                            }
                            child.material.needsUpdate = true;
                        }
                    });
                    scene.add(object);
                });
            });
        }
        ;
        this.functionModelBed = modelBed;
        function modelOfficeChair() {
            var mtlLoaderOfficeChair = new THREE.MTLLoader();
            mtlLoaderOfficeChair.setBaseUrl('assets/models/office_chair/');
            mtlLoaderOfficeChair.setPath('assets/models/office_chair/');
            mtlLoaderOfficeChair.load('office_chair.mtl', function (materials) {
                materials.preload();
                var objLoaderOfficeChair = new THREE.OBJLoader();
                objLoaderOfficeChair.setMaterials(materials);
                objLoaderOfficeChair.setPath('assets/models/office_chair/');
                objLoaderOfficeChair.load('office_chair.obj', function (object) {
                    object.scale.set(260, 260, 260);
                    // <position object>
                    center3DModel(object);
                    camera.position.z = 600;
                    object.traverse(function (child) {
                        if (child.material) {
                            console.log('chld', child.material);
                            // SEAT
                            if (child.material.name === 'tela_sillon_azul') {
                                if (texturePainting) {
                                    child.material.map = texturePainting;
                                    child.material.needsUpdate = true;
                                }
                            }
                            if (child.material.name === 'plastico_gris') {
                                if (texturePainting2) {
                                    // child.material.map = texturePainting2;
                                    // child.material.color.setRGB(0, 54, 135);
                                }
                            }
                            child.material.needsUpdate = true;
                        }
                    });
                    scene.add(object);
                });
            });
        }
        ;
        this.functionModelOfficeChair = modelOfficeChair;
        function modelNewTable() {
            var mtlLoaderOfficeChair = new THREE.MTLLoader();
            mtlLoaderOfficeChair.setBaseUrl('assets/models/Table/');
            mtlLoaderOfficeChair.setPath('assets/models/Table/');
            mtlLoaderOfficeChair.load('table.mtl', function (materials) {
                materials.preload();
                var objLoaderOfficeChair = new THREE.OBJLoader();
                objLoaderOfficeChair.setMaterials(materials);
                objLoaderOfficeChair.setPath('assets/models/Table/');
                objLoaderOfficeChair.load('table.obj', function (object) {
                    object.scale.set(260, 260, 260);
                    // <position object>
                    center3DModel(object);
                    camera.position.z = 600;
                    // tableObject = object;
                    object.traverse(function (child) {
                        if (child.material) {
                            console.log('chld', child.material);
                            if (texturePainting2) {
                                child.material.map = texturePainting2;
                                // child.material.color.setRGB(0, 54, 135);
                            }
                            child.material.needsUpdate = true;
                        }
                    });
                    object.updateMatrix();
                    scene.add(object);
                });
            });
        }
        ;
        this.tableObject = tableObject;
        this.functionModelTest = modelNewTable;
        function modelSofa() {
            var _textureLoader = new THREE.TextureLoader();
            var objLoaderOfficeChair = new THREE.OBJLoader();
            objLoaderOfficeChair.setPath('assets/models/Sofa_FBX/');
            objLoaderOfficeChair.load('Sofa.obj', function (object) {
                object.scale.set(260, 260, 260);
                center3DModel(object);
                camera.position.z = 600;
                object.traverse(function (child) {
                    if (child.material) {
                        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
                            child.material.map = _textureLoader.load('assets/models/Sofa_FBX/Sofa_AlbedoTransparency.png');
                            child.material.aoMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_AO.png');
                            child.material.metalnessMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_MetallicSmoothness.png');
                            child.material.normalMap = _textureLoader.load('assets/models/Sofa_FBX/Sofa_Normal.png');
                        }
                        child.material.needsUpdate = true;
                    }
                });
                object.updateMatrix();
                scene.add(object);
            });
        }
        this.functionModelSofa = modelSofa;
        function modelBed_v1() {
            var _textureLoader = new THREE.TextureLoader();
            var mtlLoaderSofa = new THREE.MTLLoader();
            mtlLoaderSofa.setBaseUrl('assets/models/Bed_v1/');
            mtlLoaderSofa.setPath('assets/models/Bed_v1/');
            mtlLoaderSofa.load('Bed.mtl', function (materials) {
                materials.preload();
                console.log('materials', materials);
                var objLoaderOfficeChair = new THREE.OBJLoader();
                objLoaderOfficeChair.setMaterials(materials);
                objLoaderOfficeChair.setPath('assets/models/Bed_v1/');
                objLoaderOfficeChair.load('Bed.obj', function (object) {
                    object.scale.set(260, 260, 260);
                    center3DModel(object);
                    camera.position.z = 600;
                    object.traverse(function (child) {
                        if (child.material) {
                            if (child instanceof THREE.Mesh) {
                                console.log('THREE.Mesh');
                                child.geometry.computeVertexNormals();
                            }
                            if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
                                console.log('MeshPhongMaterial');
                                if (child.material.name === "Base") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Base_AlbedoTransparency.jpg');
                                    child.material.aoMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_AO.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Base_Normal.jpg');
                                }
                                if (child.material.name === "Pillows") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_AlbedoTransparency.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Pillows_Normal.jpg');
                                }
                                if (child.material.name === "Covers") {
                                    child.material.map = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_AlbedoTransparency.jpg');
                                    child.material.aoMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_AO.jpg');
                                    child.material.metalnessMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_MetallicSmoothness.png');
                                    child.material.normalMap = _textureLoader.load('assets/models/Bed_v1/Bed_Covers_Normal.jpg');
                                }
                            }
                            console.log('chld', child.material);
                            child.material.needsUpdate = true;
                        }
                    });
                    object.updateMatrix();
                    scene.add(object);
                });
            });
        }
        this.functionModelBed_v1 = modelBed_v1;
        function onWindowResize() {
            camera.aspect = innerW / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerW, window.innerHeight);
        }
        function control() {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;
            controls.minDistance = 0;
            //controls.maxDistance = 3;
            controls.minPolarAngle = 0; // radians
            controls.maxPolarAngle = Math.PI; // radians
            controls.maxPolarAngle = Math.PI / 2;
        }
        ;
        control();
        var animate = function () {
            requestAnimationFrame(animate);
            if (color < 0xdddddd)
                color += 0x0000ff;
            renderer.autoClear = false;
            renderer.clear();
            if (appModel) {
                renderer.render(backgroundScene, backgroundCamera);
            }
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();
        function center3DModel(object) {
            var thsOBJ = new THREE.Box3().setFromObject(object);
            var valX = (thsOBJ.getSize().x);
            var valY = (thsOBJ.getSize().y);
            var valZ = (thsOBJ.getSize().z);
            return object.position.set(((thsOBJ.getCenter().x) * -1), (valY * -1) / 2, ((thsOBJ.getCenter().z) * -1));
        }
    };
    FurnitureComponent.prototype.selectModel = function () {
        localStorage.setItem('app.model', this.appModels);
        //this.showModel(this.appModels);
        //location.reload();
        console.log(this.appModels);
        for (var i = 0; i < this.currentScene.children.length; i++) {
            var child = this.currentScene.children[i];
            console.log(child);
            if (child.type === 'Group') {
                this.currentScene.remove(child);
                this.showModel(this.appModels);
                break;
            }
        }
    };
    FurnitureComponent.prototype.showModel = function (model) {
        switch (model) {
            case "chair":
                this.functionModalChair();
                break;
            case "officechair":
                this.functionModelOfficeChair();
                break;
            case "bed":
                this.functionModelBed();
                break;
            case "table":
                this.functionModelTest();
                break;
            case "sofa":
                this.functionModelSofa();
                break;
            case "bed_v1":
                this.functionModelBed_v1();
                break;
            default:
                break;
        }
    };
    FurnitureComponent.prototype.setTextureTop = function (texture) {
        if (texture == "tableture") {
            var url = "assets/models/Table/Gio_Normal.jpn";
            console.log(this.tableObject);
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = "Anonymous";
            var texturePainting_1 = textureLoader.load(url);
            this.tableObject.traverse(function (child) {
                if (child.material) {
                    if (child.material.name == "MeshPhongMaterial") {
                        if (texturePainting_1) {
                            child.material.map = texturePainting_1;
                            child.material.needsUpdate = true;
                        }
                    }
                }
            });
        }
        else {
            localStorage.setItem('app.texture.top', texture);
            location.reload();
        }
    };
    FurnitureComponent.prototype.setTextureLegs = function (texture) {
        localStorage.setItem('app.texture.legs', texture);
        location.reload();
    };
    FurnitureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-furniture',
            template: __webpack_require__("../../../../../src/app/furniture/furniture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/furniture/furniture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FurnitureComponent);
    return FurnitureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/furniture2/furniture2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/furniture2/furniture2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    \t<div id=\"renderHere\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/furniture2/furniture2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Furniture2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Furniture2Component = (function () {
    function Furniture2Component() {
    }
    Furniture2Component.prototype.ngOnInit = function () {
        if (!Detector.webgl)
            Detector.addGetWebGLMessage();
        this.initGUI();
    };
    Furniture2Component.prototype.initGUI = function () {
        var camera, controls, scene, renderer;
        var lighting, ambient, keyLight, fillLight, backLight;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        /* Camera */
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 3;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        /* Scene */
        scene = new THREE.Scene();
        lighting = false;
        ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);
        keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);
        fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);
        backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();
        // scene.add(keyLight);
        // scene.add(fillLight);
        // scene.add(backLight);
        /* Model */
        /*let mtlLoaderBed = new THREE.MTLLoader();
        mtlLoaderBed.setBaseUrl('assets/models/bed/');
        mtlLoaderBed.setPath('assets/models/bed/');
        mtlLoaderBed.load('juniorBed.mtl', function(materials) {
            materials.preload();

            let objLoaderBed = new THREE.OBJLoader();
            objLoaderBed.setMaterials(materials);
            objLoaderBed.setPath('assets/models/bed/');
            objLoaderBed.load('juniorBed.obj', function(object) {
                object.rotation.x = .01;
                object.rotation.y = -4.7;
                scene.add(object);
            });
        });*/
        // let mtlLoaderOfficeChair = new THREE.MTLLoader();
        // mtlLoaderOfficeChair.setBaseUrl('assets/models/office_chair/');
        // mtlLoaderOfficeChair.setPath('assets/models/office_chair/');
        // mtlLoaderOfficeChair.load('office_chair.mtl', function(materials) {
        // 	materials.preload();
        // 	let objLoaderOfficeChair = new THREE.OBJLoader();
        // 	objLoaderOfficeChair.setMaterials(materials);
        // 	objLoaderOfficeChair.setPath('assets/models/office_chair/');
        // 	objLoaderOfficeChair.load('office_chair.obj', function(object) {
        // 		// object.scale.set(70, 70, 70);
        // 		// object.position.y = -40;
        // 		// object.position.z = 270;
        // 		// object.rotation.x = .01;
        // 		// object.rotation.y = -4.7;
        // 		// object.updateMatrix();
        // 		scene.add(object);
        // 	});
        // });
        var mtlLoaderBed = new THREE.MTLLoader();
        mtlLoaderBed.setBaseUrl('assets/models/female/');
        mtlLoaderBed.setPath('assets/models/female/');
        mtlLoaderBed.load('female-croupier-2013-03-26.mtl', function (materials) {
            materials.preload();
            console.log('materials: ', materials);
            materials.materials.default.map.magFilter = THREE.NearestFilter;
            materials.materials.default.map.minFilter = THREE.LinearFilter;
            var objLoaderBed = new THREE.OBJLoader();
            objLoaderBed.setMaterials(materials);
            objLoaderBed.setPath('assets/models/female/');
            objLoaderBed.load('female-croupier-2013-03-26.obj', function (object) {
                scene.add(object);
            });
        });
        /* Renderer */
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));
        document.getElementById('renderHere').appendChild(renderer.domElement);
        /* Controls */
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('keydown', onKeyboardEvent, false);
        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        function onKeyboardEvent(e) {
            if (e.code === 'KeyL') {
                lighting = !lighting;
                if (lighting) {
                    ambient.intensity = 0.25;
                    scene.add(keyLight);
                    scene.add(fillLight);
                    scene.add(backLight);
                }
                else {
                    ambient.intensity = 1.0;
                    scene.remove(keyLight);
                    scene.remove(fillLight);
                    scene.remove(backLight);
                }
            }
        }
        function render() {
            requestAnimationFrame(render);
            controls.update();
            renderer.render(scene, camera);
        }
        render();
    };
    Furniture2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-furniture2',
            template: __webpack_require__("../../../../../src/app/furniture2/furniture2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/furniture2/furniture2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Furniture2Component);
    return Furniture2Component;
}());



/***/ }),

/***/ "../../../../../src/app/layout/basiclayout/basiclayout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/basiclayout/basiclayout.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [ngClass]=\"{active: activeRoute('fbxsample')}\">\n        <a class=\"nav-link\" [routerLink]=\"['/fbxsample']\">Creative's Models <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active: activeRoute('furnitures')}\">\n        <a class=\"nav-link\" [routerLink]=\"['/furnitures']\">Furnitures <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active: activeRoute('cars')}\">\n        <a class=\"nav-link\" [routerLink]=\"['/cars']\">Cars</a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active: activeRoute('furniture2')}\">\n        <a class=\"nav-link\" [routerLink]=\"['/furniture2']\">Avatar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layout/basiclayout/basiclayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasiclayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasiclayoutComponent = (function () {
    function BasiclayoutComponent(router) {
        this.router = router;
    }
    BasiclayoutComponent.prototype.ngOnInit = function () {
    };
    BasiclayoutComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    BasiclayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-basiclayout',
            template: __webpack_require__("../../../../../src/app/layout/basiclayout/basiclayout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/basiclayout/basiclayout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], BasiclayoutComponent);
    return BasiclayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map