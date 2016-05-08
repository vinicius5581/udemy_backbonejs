
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
	defaults: {
		listeners: 0
	}
});

var SongView = Backbone.View.extend({
	initialize: function(){
		// this.model.on("change", this.render, this);
		this.model.on("change", this.onModelChange, this);
	},

	onModelChange: function(){
		this.$el.addClass("someClass");
	},

	render: function(){
		this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));

		return this;
	}
});

var song = new Song({title: "blue in Green"});

var SongView = new SongView({el: "#container", model: song});
SongView.render();