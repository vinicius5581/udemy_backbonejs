
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.


var SongView = Backbone.View.extend({
	tagName: "span",
	className: "song",
	id: "1234",
	attributes:{
		"data-genre": "Jazz"
	},
	render: function(){
		this.$el.html("Hello World");
		return this;
	}
});



// var songView = new SongView({el: "#container"});
// songView.render();

var songView = new SongView();

// songView.render();
// $("#container").html(songView.$el);


$("#container").html(songView.render().$el);