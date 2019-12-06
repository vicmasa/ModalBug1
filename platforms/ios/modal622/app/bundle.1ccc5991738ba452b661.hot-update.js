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
    setModalOptions(getModalOptions());
};
function setModalOptions(lv) {
    const option = {
        context: { listView_options: lv },
        closeCallback: (item, action) => {
            // if (action == 'itemTap') {
            //     itemTap_options(item);
            // }
        },
        fullscreen: true
    };
    // if (ls.getString('platform') == 'ios') {
    option.ios = {
        presentationStyle: UIModalPresentationStyle.OverFullScreen
    };
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsOENBQThDO0FBQ3pFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4xY2NjNTk5MTczOGJhNDUyYjY2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5cbmNvbnN0IEhvbWVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9ob21lLXZpZXctbW9kZWxcIik7XG5cbmNvbnN0IG1vZGFsT3B0aW9ucyA9IFwifi9jb21wb25lbnRzL21vZGFsL29wdGlvbnMvb3B0aW9uc1wiO1xuXG5sZXQgcGFnZTtcbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIb21lVmlld01vZGVsKCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhd2VyQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gYXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbmV4cG9ydHMub25EcmF3ZXJCdXR0b25UYXAgPSBvbkRyYXdlckJ1dHRvblRhcDtcblxuLy9NT0RBTCBPUFRJT05TIExPR0lDXG5mdW5jdGlvbiBnZXRNb2RhbE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICAgIGtleTogJ2hlYWRlcicsXG4gICAgICAgIG5hbWU6ICdTZWxlY2Npb25lIHVuIGZpbHRybycsXG4gICAgfSwge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ1BlcmlvZG9zJyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY2Npb25lIHVuIHBlcmlvZG8nLFxuICAgICAgICBuYXY6ICdjb3JlL3BlcmlvZHMvcGVyaW9kcydcbiAgICB9LCB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnUnV0YXMnLFxuICAgICAgICB0aXRsZTogJ1NlbGVjY2lvbmUgdW5hIHJ1dGEnLFxuICAgICAgICBuYXY6ICdjb3JlL3JvdXRlcy9yb3V0ZXMnXG4gICAgfV07XG59XG5leHBvcnRzLnRhcE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0TW9kYWxPcHRpb25zKGdldE1vZGFsT3B0aW9ucygpKTtcbn07XG5mdW5jdGlvbiBzZXRNb2RhbE9wdGlvbnMobHYpIHtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIGNvbnRleHQ6IHsgbGlzdFZpZXdfb3B0aW9uczogbHYgfSxcbiAgICAgICAgY2xvc2VDYWxsYmFjazogKGl0ZW0sIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKGFjdGlvbiA9PSAnaXRlbVRhcCcpIHtcbiAgICAgICAgICAgIC8vICAgICBpdGVtVGFwX29wdGlvbnMoaXRlbSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuICAgIC8vIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2lvcycpIHtcbiAgICBvcHRpb24uaW9zID0ge1xuICAgICAgICBwcmVzZW50YXRpb25TdHlsZTogVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLk92ZXJGdWxsU2NyZWVuXG4gICAgfTtcbiAgICAvLyB9XG4gICAgcGFnZS5zaG93TW9kYWwobW9kYWxPcHRpb25zLCBvcHRpb24pO1xufVxuZnVuY3Rpb24gaXRlbVRhcF9vcHRpb25zKGl0ZW0pIHtcblxufVxuLy87IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9