cordova.define("pj-plugin-device-storage.DeviceStorage", function(require, exports, module) {
var DeviceStorage = function () { };

var _checkCallbacks = function (success, error) {
    if (typeof success != 'function') {
        throw new Error('DeviceStorage failure: success callback parameter must be a function');
    }
    if (typeof error != 'function') {
        throw new Error('DeviceStorage failure: error callback parameter must be a function');
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

    cordova.exec(success, fail, 'DeviceStorage', nativeMethodName, args);
};

DeviceStorage.prototype = {
    get: function (success, error, key) {
        try {
            if (!_isString(key)) {
                throw new Error('Key must be a string');
            }
            _executeNativeMethod(success, error, 'get', [key]);
        } catch (e) {
            error(e);
        }
    },

    set: function (success, error, key, value) {
        try {
            if (!_isString(key)) {
                throw new Error('Key must be a string');
            }
            if (value !== null && !_isString(value)) {
                throw new Error('Value must be a string or null');
            }
            _executeNativeMethod(success, error, 'set', [key, value]);
        } catch (e) {
            error(e);
        }
    },

    remove: function (success, error, key) {
        try {
            if (!_isString(key)) {
                throw new Error('Key must be a string');
            }
            _executeNativeMethod(success, error, 'remove', [key]);
        } catch (e) {
            error(e);
        }
    },

    removeAll: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'removeAll');
        } catch (e) {
            error(e);
        }
    }
};

if (!cordova.plugins) {
    cordova.plugins = {};
}

if (!cordova.plugins.DeviceStorage) {
    cordova.plugins.DeviceStorage = new DeviceStorage();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceStorage;
}

});
