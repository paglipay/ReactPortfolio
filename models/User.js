'use strict';

var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(user, options) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  // User.associate = function(models) {
  //   // associations can be defined here
  //   User.hasMany(models.Trip, {
  //     onDelete: "cascade"
  //   });
  // }
  return User;
};


// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    username: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    email: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters large'],
        required: [true, 'Please enter a password.']
    },

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

