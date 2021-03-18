"use strict";
exports.__esModule = true;
exports["default"] = (function (user) {
    try {
        user.kick();
    }
    catch (err) {
        return {
            success: false,
            error: err
        };
    }
    return {
        success: true
    };
});
