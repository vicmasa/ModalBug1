webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/tns-core-modules/application/application.js");

const HomeViewModel = __webpack_require__("./home/home-view-model.js");

const modalOptions = "~/components/modal/options/options";

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;

//MODAL SEARCH LOGIC
function getModalSearch(type) {
    if (type == 'periods') {
        return {
            search: true,
            searchTitle: 'Instalar !',
            searchSubTitle: 'Seleccione un periodo',
            searchNav: 'core/periods/periods',
        }
    } else {
        return {
            search: true,
            searchTitle: 'Instalar !',
            searchSubTitle: 'Seleccione una ruta',
            searchNav: 'core/routes/routes',
        }
    }
}
function setModalSearch(items) {
    setTimeout(function () {
        const option = {
            context: items,
            closeCallback: (item, action) => {
                itemTap_search(item, action);
            },
            fullscreen: true
        };
        page.showModal(modalSearch, option);
    }, 1);
}
function itemTap_search(item, action) {
    if (action == 'itemTap') {
        itemTap_options(item);
    } else {
        nav.goBack();
    }
}
//; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjE0OGQ5ZmUzMmVlMTkwNmUzZTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcblxuY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2hvbWUtdmlldy1tb2RlbFwiKTtcblxuY29uc3QgbW9kYWxPcHRpb25zID0gXCJ+L2NvbXBvbmVudHMvbW9kYWwvb3B0aW9ucy9vcHRpb25zXCI7XG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIb21lVmlld01vZGVsKCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhd2VyQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gYXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbmV4cG9ydHMub25EcmF3ZXJCdXR0b25UYXAgPSBvbkRyYXdlckJ1dHRvblRhcDtcblxuLy9NT0RBTCBTRUFSQ0ggTE9HSUNcbmZ1bmN0aW9uIGdldE1vZGFsU2VhcmNoKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PSAncGVyaW9kcycpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcbiAgICAgICAgICAgIHNlYXJjaFRpdGxlOiAnSW5zdGFsYXIgIScsXG4gICAgICAgICAgICBzZWFyY2hTdWJUaXRsZTogJ1NlbGVjY2lvbmUgdW4gcGVyaW9kbycsXG4gICAgICAgICAgICBzZWFyY2hOYXY6ICdjb3JlL3BlcmlvZHMvcGVyaW9kcycsXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgc2VhcmNoVGl0bGU6ICdJbnN0YWxhciAhJyxcbiAgICAgICAgICAgIHNlYXJjaFN1YlRpdGxlOiAnU2VsZWNjaW9uZSB1bmEgcnV0YScsXG4gICAgICAgICAgICBzZWFyY2hOYXY6ICdjb3JlL3JvdXRlcy9yb3V0ZXMnLFxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0TW9kYWxTZWFyY2goaXRlbXMpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICAgICAgY29udGV4dDogaXRlbXMsXG4gICAgICAgICAgICBjbG9zZUNhbGxiYWNrOiAoaXRlbSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbVRhcF9zZWFyY2goaXRlbSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHBhZ2Uuc2hvd01vZGFsKG1vZGFsU2VhcmNoLCBvcHRpb24pO1xuICAgIH0sIDEpO1xufVxuZnVuY3Rpb24gaXRlbVRhcF9zZWFyY2goaXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSAnaXRlbVRhcCcpIHtcbiAgICAgICAgaXRlbVRhcF9vcHRpb25zKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5nb0JhY2soKTtcbiAgICB9XG59XG4vLzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=