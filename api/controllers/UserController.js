/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req, res, next) {
	   User.create(req.params.all(), function userCreated (err, user) {
	    if (err) {
	      console.log(err);
	      req.session.flash = {
	        err: err
	      }
	      //res.locals.flash = _.clone(req.session.flash);
	      return next(err);
	    }
	    res.json(user);
	   });
	},
};

