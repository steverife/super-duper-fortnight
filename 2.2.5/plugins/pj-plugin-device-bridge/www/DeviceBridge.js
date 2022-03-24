cordova.define("pj-plugin-device-bridge.DeviceBridge", function(require, exports, module) {
var DeviceBridge = function () { };

var _checkCallbacks = function (success, error) {
    if (typeof success != 'function') {
        throw new Error('DeviceBridge failure: success callback parameter must be a function');
    }
    if (typeof error != 'function') {
        throw new Error('DeviceBridge failure: error callback parameter must be a function');
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

    cordova.exec(success, fail, 'DeviceBridge', nativeMethodName, args);
};

DeviceBridge.prototype = {
    subscribe : function (success, error, key) {
        try {
            if (!_isString(key)) {
                throw new Error('Key must be a string');
            }
            _executeNativeMethod(success, error, 'subscribe', [key]);
        } catch (e) {
            error(e);
        }
    },

    unsubscribe: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'unsubscribe', []);
        } catch (e) {
            error(e);
        }
    },
};

if (!cordova.plugins) {
    cordova.plugins = {};
}

if (!cordova.plugins.DeviceBridge) {
    cordova.plugins.DeviceBridge = new DeviceBridge();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceBridge;
}

});
