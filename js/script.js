$(document).ready(function(){

	Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");

	window.onLoad = function(){
		//query
		//list
		//destroyAll
	}

	$('#classroom-enter').click(function(){
		event.preventDefault();
		var request = $('#classroom-enter-form').val();
		console.log(request);
		var Classroom;
		var Classsearch = Parse.Object.extend("Classroom");
		var search = new Parse.Query(Classsearch);
		search.equalTo("code",request);
		search.find({
			success: function(results){
				if(results.length != 1) {
					console.log(results.length);
					console.log("YUFAILSOHARD!?");
				} else {
					Classroom = results[0];
					console.log(Classroom);
				}
			},
			error: function(error){
				console.log("YUFAILSOHARD!?");
			}
		});
	});

	$('#post').click(function(){
		//Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");
		event.preventDefault();
		var Post = Parse.Object.extend("Post");
		var post = new Post();
		post.set("question",$('#new-post-text').val());
		post.set("upvotes", 0);
		post.set("downvotes", 0);
		post.set("answered", false);
		post.set("classroom", "object here");  

		post.save(null, {
	  		success: function(Post) {
	    		// Execute any logic that should take place after the object is saved.
	    		//alert('New object created with objectId: ' + post.id);


	    		/*************************
				Rosemond's Code Goes Here!
	  			**************************/


	  		},
	  		error: function(Post, error) {
	    		// Execute any logic that should take place if the save fails.
	    		// error is a Parse.Error with an error code and message.
	    		alert('Failed to create new object, with error code: ' + error.message);
	  		}
	  		
		});

		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}).then(function(object) {
	  		//alert("yay! it worked");
		});
	});
});



