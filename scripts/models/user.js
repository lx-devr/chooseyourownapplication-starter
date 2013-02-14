App.Models.user = Backbone.Model.extend({

	logIn: function(userName) {
		if(!userName) return;
		this.set("userName", userName);
	},
	
	isLoggedin: function() {
		return this.has('userName');
	}
	
});
