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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFZLG1CQUFPLENBQUMsNkRBQThCOztBQUVsRCxzQkFBc0IsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNTEzYjk3M2JiYjJiZWRiMjAwNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuXG5jb25zdCBIb21lVmlld01vZGVsID0gcmVxdWlyZShcIi4vaG9tZS12aWV3LW1vZGVsXCIpO1xuXG5jb25zdCBtb2RhbE9wdGlvbnMgPSBcIn4vY29tcG9uZW50cy9tb2RhbC9vcHRpb25zL29wdGlvbnNcIjtcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcbn1cblxuZnVuY3Rpb24gb25EcmF3ZXJCdXR0b25UYXAoYXJncykge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSBhcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn1cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuZXhwb3J0cy5vbkRyYXdlckJ1dHRvblRhcCA9IG9uRHJhd2VyQnV0dG9uVGFwO1xuXG4vL01PREFMIE9QVElPTlMgTE9HSUNcbmZ1bmN0aW9uIGdldE1vZGFsT3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgICAga2V5OiAnaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ1NlbGVjY2lvbmUgdW4gZmlsdHJvJyxcbiAgICB9LCB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnUGVyaW9kb3MnLFxuICAgICAgICB0aXRsZTogJ1NlbGVjY2lvbmUgdW4gcGVyaW9kbycsXG4gICAgICAgIG5hdjogJ2NvcmUvcGVyaW9kcy9wZXJpb2RzJ1xuICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdSdXRhcycsXG4gICAgICAgIHRpdGxlOiAnU2VsZWNjaW9uZSB1bmEgcnV0YScsXG4gICAgICAgIG5hdjogJ2NvcmUvcm91dGVzL3JvdXRlcydcbiAgICB9XTtcbn1cbmV4cG9ydHMudGFwT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRNb2RhbE9wdGlvbnMoZ2V0TW9kYWxPcHRpb25zKCkpO1xufVxuZnVuY3Rpb24gc2V0TW9kYWxPcHRpb25zKGx2KSB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICBjb250ZXh0OiB7IGxpc3RWaWV3X29wdGlvbnM6IGx2IH0sXG4gICAgICAgIGNsb3NlQ2FsbGJhY2s6IChpdGVtLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT0gJ2l0ZW1UYXAnKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRhcF9vcHRpb25zKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgfTtcbiAgICBpZiAobHMuZ2V0U3RyaW5nKCdwbGF0Zm9ybScpID09ICdpb3MnKSB7XG4gICAgICAgIG9wdGlvbi5pb3MgPSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25TdHlsZTogVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLk92ZXJGdWxsU2NyZWVuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFnZS5zaG93TW9kYWwobW9kYWxPcHRpb25zLCBvcHRpb24pO1xufVxuZnVuY3Rpb24gaXRlbVRhcF9vcHRpb25zKGl0ZW0pIHtcbiAgICBcbn1cbi8vOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==