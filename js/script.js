$(document).ready(function()
{
	$('#classroom-enter').click(function(){
		Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");
		var request = $(this).value;
		var search = Parse.Query(Parse.Object.Classroom);
		search.equalTo("name",request);
		search.find();
	});

	//$('#test').click(function(){
	$('#post').click(function(){
		Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");
		
		var Post = Parse.Object.extend("Post");
		var post = new Post();
		post.set("question","");
		post.set("upvotes", 0);
		post.set("downvotes", 0);
		post.set("answered", false); 

		post.save(null, {
	  		success: function(Post) {
	    		// Execute any logic that should take place after the object is saved.
	    		//alert('New object created with objectId: ' + post.id);
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



