"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, role, email) {
        this._name = name;
        this._role = role;
        this._email = email;
    }
    User.prototype.getInfo = function () {
        return "name: ".concat(this._name, ", email: ").concat(this._email, ", role: ").concat(this._role);
    };
    User.prototype.isAmin = function () {
        if (this._role === 1) {
            console.log("admin");
        }
        if (this._role === 2) {
            console.log("is normal User");
        }
    };
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getRole", {
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setRole", {
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
