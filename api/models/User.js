/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      schema: true,

      account: {
        type: 'string',
        required: true,
        unique: true
      },

      email: {
        type: 'string',
        email: true,
        required: true,
        unique: true
      },

      encryptedPassword: {
        type: 'string',
        //required: true
      },

/**
      toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        delete obj.password_confirmation;
        delete obj._csrf;
        return obj;
      }*/
  }
};

