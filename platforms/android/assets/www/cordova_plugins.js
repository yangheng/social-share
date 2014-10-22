cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.qqLogin/www/qqLogin.js",
        "id": "org.apache.cordova.qqLogin.qqLogin",
        "clobbers": [
            "qqLogin"
        ]
    },
    {
        "file": "plugins/xu.li.cordova.wechat/www/wechat.js",
        "id": "xu.li.cordova.wechat.Wechat",
        "clobbers": [
            "Wechat"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.qqLogin": "0.0.1",
    "xu.li.cordova.wechat": "0.4"
}
// BOTTOM OF METADATA
});