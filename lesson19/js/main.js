
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
	new Song({ title: "Song 1"}),
	new Song({ title: "Song 2"}),
	new Song({ title: "Song 3"})
]);

songs.add(new Song({ title: "Song 4"}));

var firstSong = songs.at(0);

var songWithIdC1 = songs.get("c1");

songss.remove(firstSong);