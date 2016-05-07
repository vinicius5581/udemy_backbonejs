
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Creating Models


var Car = Backbone.Model.extend();
var car = new Car();

/*******/

var Song = Backbone.Model.extend({
	initialize:function(){
		console.log("A new song has been created");
	},
	defaults: {
		genre: "Jazz"
	}
});

var song = new Song();
song.set("Title", "Blue in Green");
song.set({
	artist: "Miles Davis",
	publishYear: 1959
});

var song2 = new Song({
	Title: "Blue in Green",
	artist: "Miles Davis",
	publishYear: 1959
});

/*******/

// Working with attributes

// song.toJSON();
var title = song.get("Title");
var hasTitle = song.has("Title");
song.unset("Title");
song.clear();

/*******/

var Shirt = Backbone.Model.extend({
	validate: function(attrs){
		if(!attrs.title){
			return "Title is required";
		}
	}
});

var shirt = new Shirt();


// shirt.isValid();
// shirt.validationError

/*******/

var Animal = Backbone.Model.extend({
	walk: function(){
		console.log("Animal walking...");
	}
});

var Dog = Animal.extend({
	walk: function(){

		Animal.prototype.walk.apply(this);

		console.log("Dog walking...");
	}
});

var dog = new Dog();

dog.walk();


/*******/

// Connecting to the Server

/**
 *
 Persistent Operations
 fetch() - GET
 save() - POST/PUT
 destroy() - DELETE
 */
 // example.com/api/songs

 //urlRoot
 var Bong = Backbone.Model.extend({
 	urlRoot: "/api/songs"
 });

 //Fetching a Model
 // GET /api/songs/1
 var bong = new Bong({ id: 1 });
 bong.fetch();

 //Updating a Model
 // PUT /api/songs/1
 var bong2 = new Bong({ id: 1 });
 bong2.fetch();

 bong.set("title", "newTitle");
 song.save();


//Inserting a Model
// POST /api/songs
var bong3 = new Bong();
bong3.set("title", "Title");
song.save();


//Deleting a Model
// DELETE /api/songs/1
var bong4 = new Bong({ id: 1 });
bong4.destroy();


/*******/

var Bike = Backbone.Model.extend({
	idAttribute: "bikeId"
});
var bike = new Bike({ bikeId: 1 });


// Callbacks

var Star = Backbone.Model.extend();
var star = new Star();

star.fetch({
	success: function(){},
	error: function(){}
});

star.destroy({
	success: function(){},
	error: function(){}
});

star.save({},{
	success: function(){},
	error: function(){}
});





