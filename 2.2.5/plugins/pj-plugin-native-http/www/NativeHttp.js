cordova.define("pj-plugin-native-http.NativeHttp", function(require, exports, module) {
var NativeHttp = function () { };

var _checkCallbacks = function (success, error) {
    if (typeof success != 'function') {
        throw new Error('NativeHttp failure: success callback parameter must be a function');
    }
    if (typeof error != 'function') {
        throw new Error('NativeHttp failure: error callback parameter must be a function');
    }
};

var _isString = function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
};

/**
 * Helper method to execute Cordova native method
 *
 * @param   {String}    nativeMethodName Method to execute.
 * @param   {Array}     args             Execution arguments.
 * @param   {Function}  success          Called when returning successful result from an action.
 * @param   {Function}  error            Called when returning error result from an action.
 *
 */
var _executeNativeMethod = function (success, error, nativeMethodName, args) {
    var fail;

    _checkCallbacks(success, error);

    // By convention a failure callback should always receive an instance
    // of a JavaScript Error object.
    fail = function (err) {
        if (typeof err === 'undefined') {
            error(new Error('Error occured while executing native method.'));
        } else {
            error(_isString(err) ? new Error(err) : err);
        }
    };

    cordova.exec(success, fail, 'NativeHttp', nativeMethodName, args);
};

NativeHttp.prototype = {
    get: function (success, error, url, headers, params) {
        try {
            _executeNativeMethod(success, error, 'get', [url, headers, params]);
        } catch (e) {
            error(e);
        }
    },
    post: function (success, error, url, headers, data) {
        try {
            _executeNativeMethod(success, error, 'post', [url, headers, data]);
        } catch (e) {
            error(e);
        }
    }
};

if (!cordova.plugins) {
    cordova.plugins = {};
}

if (!cordova.plugins.NativeHttp) {
    cordova.plugins.NativeHttp = new NativeHttp();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = NativeHttp;
}

});
