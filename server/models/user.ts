import mongoose = require('mongoose');
import bcrypt = require('bcrypt-nodejs');

class UserSchema extends mongoose.Schema {
    public password:string;
    
    // Generating a Hash
    public generateHash(password:string):string {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    }
    
    // Checking if password is valid
    public validPassword(password:string) {
        return bcrypt.compareSync(password, this.password);
    }
    
}

// DEFINE THE OBJECT SCHEMA
var userSchema:UserSchema = new UserSchema({
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
},
    { collection: 'userInfo' });


// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var User = mongoose.model('User', userSchema);