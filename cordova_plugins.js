cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "pj-plugin-device-permissions.DevicePermissions",
      "file": "plugins/pj-plugin-device-permissions/www/DevicePermissions.js",
      "pluginId": "pj-plugin-device-permissions",
      "clobbers": [
        "DevicePermissions"
      ]
    },
    {
      "id": "pj-plugin-device-storage.DeviceStorage",
      "file": "plugins/pj-plugin-device-storage/www/DeviceStorage.js",
      "pluginId": "pj-plugin-device-storage",
      "clobbers": [
        "DeviceStorage"
      ]
    },
    {
      "id": "pj-plugin-native-http.NativeHttp",
      "file": "plugins/pj-plugin-native-http/www/NativeHttp.js",
      "pluginId": "pj-plugin-native-http",
      "clobbers": [
        "NativeHttp"
      ]
    },
    {
      "id": "pj-plugin-device-activation.DeviceActivation",
      "file": "plugins/pj-plugin-device-activation/www/DeviceActivation.js",
      "pluginId": "pj-plugin-device-activation",
      "clobbers": [
        "DeviceActivation"
      ]
    },
    {
      "id": "pj-plugin-app-browser.AppBrowser",
      "file": "plugins/pj-plugin-app-browser/www/AppBrowser.js",
      "pluginId": "pj-plugin-app-browser",
      "clobbers": [
        "AppBrowser"
      ]
    },
    {
      "id": "pj-plugin-device-bridge.DeviceBridge",
      "file": "plugins/pj-plugin-device-bridge/www/DeviceBridge.js",
      "pluginId": "pj-plugin-device-bridge",
      "clobbers": [
        "DeviceBridge"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "rollbar-cordova.RollbarProxy",
      "file": "plugins/rollbar-cordova/www/RollbarProxy.js",
      "pluginId": "rollbar-cordova",
      "clobbers": [
        "RollbarProxy"
      ]
    },
    {
      "id": "rollbar-cordova.Rollbar",
      "file": "plugins/rollbar-cordova/lib/rollbar.js",
      "pluginId": "rollbar-cordova",
      "clobbers": [
        "Rollbar"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.appsflyer",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "window.plugins.appsFlyer"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "AppsFlyerError"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-facebook4": "6.4.0",
    "pj-plugin-device-permissions": "0.0.1",
    "pj-plugin-device-storage": "0.0.1",
    "pj-plugin-native-http": "0.0.1",
    "pj-plugin-device-activation": "0.0.1",
    "pj-plugin-app-browser": "0.0.1",
    "pj-plugin-device-bridge": "0.0.1",
    "cordova-open-native-settings": "1.5.2",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-network-information": "2.0.2",
    "rollbar-cordova": "0.1.0",
    "cordova-plugin-androidx": "3.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-appsflyer-sdk": "6.3.50"
  };
});