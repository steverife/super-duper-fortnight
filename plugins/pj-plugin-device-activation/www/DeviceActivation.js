cordova.define("pj-plugin-device-activation.DeviceActivation", function(require, exports, module) {
var DeviceActivation = function () { };

var _checkCallbacks = function (success, error) {
    if (typeof success != 'function') {
        throw new Error('DeviceActivation failure: success callback parameter must be a function');
    }
    if (typeof error != 'function') {
        throw new Error('DeviceActivation failure: error callback parameter must be a function');
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

    cordova.exec(success, fail, 'DeviceActivation', nativeMethodName, args);
};

DeviceActivation.prototype = {
    register: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'register', []);
        } catch (e) {
            error(e);
        }
    },

    isActivated: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'isActivated', []);
        } catch (e) {
            error(e);
        }
    },

    activate: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'activate', []);
        } catch (e) {
            error(e);
        }
    },

    setupPjbOnHuawei: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'setupPjbOnHuawei', []);
        } catch (e) {
            error(e);
        }
    },

    requestDeviceAdmin: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'requestDeviceAdmin', []);
        } catch (e) {
            error(e);
        }
    },

    secure: function (success, error, activationParameters) {
        try {
            _executeNativeMethod(success, error, 'secure', [activationParameters]);
        } catch (e) {
            error(e);
        }
    },

    checkDeviceSupported: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'checkDeviceSupported', []);
        } catch (e) {
            error(e);
        }
    },

    collectData: function (success, error) {
        try {
            _executeNativeMethod(success, error, 'collectData', []);
        } catch (e) {
            error(e);
        }
    },

    verifyNumber: function (success, error, number) {
        try {
            _executeNativeMethod(success, error, 'verifyNumber', [number]);
        } catch (e) {
            error(e);
        }
    }
};

if (!cordova.plugins) {
    cordova.plugins = {};
}

if (!cordova.plugins.DeviceActivation) {
    cordova.plugins.DeviceActivation = new DeviceActivation();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceActivation;
}

});
