$('#test').click(function(){
	var Classroom = Parse.Object;
	var room = new Classroom();
	room.set("name","");
	room.set("numStudents",0);
	room.set("inSession",false);
 
	var Post = Parse.Object.extend("Classroom");
	var post = new Post();
	post.set("upvotes", 0);
	post.set("downvotes", 0);
	post.set("answered", false);
 
	room.save(null, {
	  success: function(gameScore) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + room.id);
	  },
	  error: function(gameScore, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
	  alert("yay! it worked");
	});
});


