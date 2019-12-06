webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/tns-core-modules/application/application.js");

const HomeViewModel = __webpack_require__("./home/home-view-model.js");

const modalOptions = "~/components/modal/options/options";

let page;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;

//MODAL OPTIONS LOGIC
function getModalOptions() {
    return [{
        key: 'header',
        name: 'Seleccione un filtro',
    }, {
        id: 0,
        name: 'Periodos',
        title: 'Seleccione un periodo',
        nav: 'core/periods/periods'
    }, {
        id: 1,
        name: 'Rutas',
        title: 'Seleccione una ruta',
        nav: 'core/routes/routes'
    }];
}
exports.tapOptions = function () {
    setModalOptions();
};
function setModalOptions(lv) {
    const option = {
        context: { },
        closeCallback: (item, action) => {
            if (action == 'itemTap') {
                itemTap_options(item);
            }
        },
        fullscreen: true
    };
    if (ls.getString('platform') == 'ios') {
        option.ios = {
            presentationStyle: UIModalPresentationStyle.OverFullScreen
        }
    }
    page.showModal(modalOptions, option);
}
function itemTap_options(item) {
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNjkzN2JmYmQ5NmU4NTE0Y2Y3NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuXG5jb25zdCBIb21lVmlld01vZGVsID0gcmVxdWlyZShcIi4vaG9tZS12aWV3LW1vZGVsXCIpO1xuXG5jb25zdCBtb2RhbE9wdGlvbnMgPSBcIn4vY29tcG9uZW50cy9tb2RhbC9vcHRpb25zL29wdGlvbnNcIjtcblxubGV0IHBhZ2U7XG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xufVxuXG5mdW5jdGlvbiBvbkRyYXdlckJ1dHRvblRhcChhcmdzKSB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IGFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xufVxuXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5leHBvcnRzLm9uRHJhd2VyQnV0dG9uVGFwID0gb25EcmF3ZXJCdXR0b25UYXA7XG5cbi8vTU9EQUwgT1BUSU9OUyBMT0dJQ1xuZnVuY3Rpb24gZ2V0TW9kYWxPcHRpb25zKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgICBrZXk6ICdoZWFkZXInLFxuICAgICAgICBuYW1lOiAnU2VsZWNjaW9uZSB1biBmaWx0cm8nLFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdQZXJpb2RvcycsXG4gICAgICAgIHRpdGxlOiAnU2VsZWNjaW9uZSB1biBwZXJpb2RvJyxcbiAgICAgICAgbmF2OiAnY29yZS9wZXJpb2RzL3BlcmlvZHMnXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1J1dGFzJyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY2Npb25lIHVuYSBydXRhJyxcbiAgICAgICAgbmF2OiAnY29yZS9yb3V0ZXMvcm91dGVzJ1xuICAgIH1dO1xufVxuZXhwb3J0cy50YXBPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE1vZGFsT3B0aW9ucygpO1xufTtcbmZ1bmN0aW9uIHNldE1vZGFsT3B0aW9ucyhsdikge1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgY29udGV4dDogeyB9LFxuICAgICAgICBjbG9zZUNhbGxiYWNrOiAoaXRlbSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09ICdpdGVtVGFwJykge1xuICAgICAgICAgICAgICAgIGl0ZW1UYXBfb3B0aW9ucyhpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBvcHRpb24uaW9zID0ge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uU3R5bGU6IFVJTW9kYWxQcmVzZW50YXRpb25TdHlsZS5PdmVyRnVsbFNjcmVlblxuICAgICAgICB9XG4gICAgfVxuICAgIHBhZ2Uuc2hvd01vZGFsKG1vZGFsT3B0aW9ucywgb3B0aW9uKTtcbn1cbmZ1bmN0aW9uIGl0ZW1UYXBfb3B0aW9ucyhpdGVtKSB7XG4gICAgXG59XG4vLzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=