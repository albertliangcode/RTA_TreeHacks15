$(document).ready(function(){
	$('#new-class').submit(function(){
		Parse.initialize("HnLswO6JpYmn4QrX2ClgADpA3HN2GFiVS1V95RP3", "IhuA6xPlWchDYpifcYQ39V18VAe9Dh44TgWBD2t1");
		
		var Classroom = Parse.Object.extend("Classroom");
		var room = new Classroom();
		
		room.set("code",$('#inputCode').val());
		room.set("school", $('#inputSchool').val());
		room.set("name", $('#inputName').val());
		room.set("numStudents", $('#inputNumber').val());
		room.set("inSession",$('#check_inSession').val());

		room.save(null, {
			success: function(Classroom) {
	    		// Execute any logic that should take place after the object is saved.
	    		//alert('New object created with objectId: ' + room.id);
			},
			error: function(Classroom, error) {
	    		// Execute any logic that should take place if the save fails.
	    		// error is a Parse.Error with an error code and message.
	    		alert('Failed to create new object, with error code: ' + error.message);
			}
		});
		
	});
}); 