"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var UserSchema = (function (_super) {
    __extends(UserSchema, _super);
    function UserSchema() {
        _super.apply(this, arguments);
    }
    // Generating a Hash
    UserSchema.prototype.generateHash = function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };
    // Checking if password is valid
    UserSchema.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    return UserSchema;
}(mongoose.Schema));
// DEFINE THE OBJECT SCHEMA
var userSchema = new UserSchema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
}, { collection: 'userInfo' });
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.User = mongoose.model('User', userSchema);

//# sourceMappingURL=user.js.map
