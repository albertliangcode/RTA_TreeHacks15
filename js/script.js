$(document).ready(function()
{
	alert("js working");

	$('#test').click(function(){
		alert("test working");
		var Classroom = Parse.Object.extend("Classroom");
		var room = new Classroom();
 
		var Post = Parse.Object.extend
		room.set("upvotes", 0);
		room.set("downvotes", 0);
		room.set("answered", false); 
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
});



