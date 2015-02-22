$(document).ready(function(){

	Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");

	window.onLoad = function(){
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
					localStorage['id'] = results[0].id;
					console.log(results[0].id);
					window.location.href = "classroom.html"
				}
			},
			error: function(error){
				console.log("YUFAILSOHARD!?");
			}
		});
	});

	$('#find').click(function(){
		var Post = Parse.Object.extend("Post");
		var query = new Parse.Query(Post);
		query.equalTo("classroom", localStorage['id']);
		query.find({
			success: function(results){
				for (var i = 0; i < results.length; i++) { 
      				var object = results[i];
      				var $divRow = $("<div>", {id: "row"});
	  				var $divColSecond = $("<div>", {class: "col-md-6 col-md-offset-3"}); 
	  				var $innerText = $("<p></p>").text(object.get("upvotes") + " upvotes. " + object.get('question'));
	  				$divColSecond.append($innerText);
	  				$divRow.append($divColSecond);
	    			$('#post-container').prepend($divRow);
    			}
			},
			error: function(error){
				console.log("sir we have an error"); 	
			}	
		}); 
	});

	$('#post').click(function(){
		//Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");
		event.preventDefault();
		var Post = Parse.Object.extend("Post");
		var post = new Post();
		post.set("classroom", localStorage['id']);
		post.set("question",$('#new-post-text').val());
		post.set("upvotes", 10);
		post.set("downvotes", 0);
		post.set("answered", false);
		post.save(null, {
	  		success: function(post) {
	  			var $divRow = $("<div>", {id: "row"});
	  			var $divColSecond = $("<div>", {class: "col-md-6 col-md-offset-3"}); 
	  			var $innerText = $("<p></p>").text(post.get("upvotes") + " upvotes. " + $('#new-post-text').val());
	  			$divColSecond.append($innerText);
	  			$divRow.append($divColSecond);
	    		$('#post-container').prepend($divRow);
	  		},
	  		error: function(post, error) {
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



