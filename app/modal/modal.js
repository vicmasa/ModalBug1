const observableModule = require("tns-core-modules/data/observable");
let closeCallback;
exports.onShownModally = function (args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page = args.object;
    page.bindingContext = observableModule.fromObject(context);
    if (page._dialogFragment) {
        setTimeout(() => {
            page._dialogFragment.getDialog().getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        }, 1);
    }
};
exports.itemTap_options = function (args) {
    const item = args.view.bindingContext;
    // if (item.key == 'header') {
    //     closeCallback();
    // } else {
    //     const action = 'itemTap';
    //     closeCallback(item, action);
    // }
};
exports.hideModal = function () {
    closeCallback();
};
// exports.loaded_bg = function (args) {
//     const item = args.object;
//     setTimeout(function () {
//         item.className = 'bg_disabled';
//     }, 400);
// };