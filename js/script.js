$(document).ready(function()
{
	console.log("js working");

	$('#test').click(function(){
		console.log("test working");
		var Classroom = Parse.Object.extend("Classroom");
		var room = new Classroom();
 
 		console.log("Classroom declared");
		// var Post = Parse.Object.Classroom.extend("Post");
		// var post = new Post();
		// post.set("upvotes", 0);
		// post.set("downvotes", 0);
		// post.set("answered", false); 

		room.save(null, {
			//console.log("Entered save function");
	  		success: function(Classroom) {
	    		// Execute any logic that should take place after the object is saved.
	    		alert('New object created with objectId: ' + room.id);
	    		//console.log("Win");
	  		},
	  		error: function(Classroom, error) {
	    		// Execute any logic that should take place if the save fails.
	    		// error is a Parse.Error with an error code and message.
	    		alert('Failed to create new object, with error code: ' + error.message);
	  			//console.log("Nope.");
	  		}
		});

		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}).then(function(object) {
	  		alert("yay! it worked");
		});
	});
});



