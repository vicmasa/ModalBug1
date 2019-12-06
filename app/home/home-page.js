const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");

const modalOptions = "~/modal/modal";

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
    // option.ios = {
    //     presentationStyle: UIModalPresentationStyle.OverFullScreen
    // };
    // }
    page.showModal(modalOptions, option);
}
function itemTap_options(item) {

}
//