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
    setModalOptions(getModalOptions());
}
function setModalOptions(lv) {
    const option = {
        context: { listView_options: lv },
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
    ls.setBool('clear', false);
    nav.goTo(item.nav, false, {
        isSelect: true,
        title: item.title
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsOENBQThDO0FBQ3pFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4yZDQzNjRhNWIwMjg4ZjZkZjBhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5cbmNvbnN0IEhvbWVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9ob21lLXZpZXctbW9kZWxcIik7XG5cbmNvbnN0IG1vZGFsT3B0aW9ucyA9IFwifi9jb21wb25lbnRzL21vZGFsL29wdGlvbnMvb3B0aW9uc1wiO1xuXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xufVxuXG5mdW5jdGlvbiBvbkRyYXdlckJ1dHRvblRhcChhcmdzKSB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IGFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xufVxuXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5leHBvcnRzLm9uRHJhd2VyQnV0dG9uVGFwID0gb25EcmF3ZXJCdXR0b25UYXA7XG5cbi8vTU9EQUwgT1BUSU9OUyBMT0dJQ1xuZnVuY3Rpb24gZ2V0TW9kYWxPcHRpb25zKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgICBrZXk6ICdoZWFkZXInLFxuICAgICAgICBuYW1lOiAnU2VsZWNjaW9uZSB1biBmaWx0cm8nLFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdQZXJpb2RvcycsXG4gICAgICAgIHRpdGxlOiAnU2VsZWNjaW9uZSB1biBwZXJpb2RvJyxcbiAgICAgICAgbmF2OiAnY29yZS9wZXJpb2RzL3BlcmlvZHMnXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1J1dGFzJyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY2Npb25lIHVuYSBydXRhJyxcbiAgICAgICAgbmF2OiAnY29yZS9yb3V0ZXMvcm91dGVzJ1xuICAgIH1dO1xufVxuZXhwb3J0cy50YXBPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE1vZGFsT3B0aW9ucyhnZXRNb2RhbE9wdGlvbnMoKSk7XG59XG5mdW5jdGlvbiBzZXRNb2RhbE9wdGlvbnMobHYpIHtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIGNvbnRleHQ6IHsgbGlzdFZpZXdfb3B0aW9uczogbHYgfSxcbiAgICAgICAgY2xvc2VDYWxsYmFjazogKGl0ZW0sIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAnaXRlbVRhcCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtVGFwX29wdGlvbnMoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuICAgIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2lvcycpIHtcbiAgICAgICAgb3B0aW9uLmlvcyA9IHtcbiAgICAgICAgICAgIHByZXNlbnRhdGlvblN0eWxlOiBVSU1vZGFsUHJlc2VudGF0aW9uU3R5bGUuT3ZlckZ1bGxTY3JlZW5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwYWdlLnNob3dNb2RhbChtb2RhbE9wdGlvbnMsIG9wdGlvbik7XG59XG5mdW5jdGlvbiBpdGVtVGFwX29wdGlvbnMoaXRlbSkge1xuICAgIGxzLnNldEJvb2woJ2NsZWFyJywgZmFsc2UpO1xuICAgIG5hdi5nb1RvKGl0ZW0ubmF2LCBmYWxzZSwge1xuICAgICAgICBpc1NlbGVjdDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGVcbiAgICB9KTtcbn1cbi8vOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==