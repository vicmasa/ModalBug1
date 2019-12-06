webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/tns-core-modules/application/application.js");

const HomeViewModel = __webpack_require__("./home/home-view-model.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjBmMGZkNDViNTg4YjNjMDUwNjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcblxuY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2hvbWUtdmlldy1tb2RlbFwiKTtcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcbn1cblxuZnVuY3Rpb24gb25EcmF3ZXJCdXR0b25UYXAoYXJncykge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSBhcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn1cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuZXhwb3J0cy5vbkRyYXdlckJ1dHRvblRhcCA9IG9uRHJhd2VyQnV0dG9uVGFwO1xuXG4vL01PREFMIFNFQVJDSCBMT0dJQ1xuZnVuY3Rpb24gZ2V0TW9kYWxTZWFyY2godHlwZSkge1xuICAgIGlmICh0eXBlID09ICdwZXJpb2RzJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgc2VhcmNoVGl0bGU6ICdJbnN0YWxhciAhJyxcbiAgICAgICAgICAgIHNlYXJjaFN1YlRpdGxlOiAnU2VsZWNjaW9uZSB1biBwZXJpb2RvJyxcbiAgICAgICAgICAgIHNlYXJjaE5hdjogJ2NvcmUvcGVyaW9kcy9wZXJpb2RzJyxcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBzZWFyY2hUaXRsZTogJ0luc3RhbGFyICEnLFxuICAgICAgICAgICAgc2VhcmNoU3ViVGl0bGU6ICdTZWxlY2Npb25lIHVuYSBydXRhJyxcbiAgICAgICAgICAgIHNlYXJjaE5hdjogJ2NvcmUvcm91dGVzL3JvdXRlcycsXG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRNb2RhbFNlYXJjaChpdGVtcykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpdGVtcyxcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6IChpdGVtLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtVGFwX3NlYXJjaChpdGVtLCBhY3Rpb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcGFnZS5zaG93TW9kYWwobW9kYWxTZWFyY2gsIG9wdGlvbik7XG4gICAgfSwgMSk7XG59XG5mdW5jdGlvbiBpdGVtVGFwX3NlYXJjaChpdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09ICdpdGVtVGFwJykge1xuICAgICAgICBpdGVtVGFwX29wdGlvbnMoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LmdvQmFjaygpO1xuICAgIH1cbn1cbi8vOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==