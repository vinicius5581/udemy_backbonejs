
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//Connecting to the Server

// GET /api/songs
var Songs = Backbone.Collection.extend({
	model: Songs,
	url: "/api/songs"
});

var songs = new Songs();
songs.fetch();

// GET /api/songs?page=2
var songs = new Songs();
songs.fetch({
	data: {
		page: 2
	},
	success: function(){},
	error: function(){}
});