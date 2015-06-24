var tag = "";
var imgUrls = [];

$('#tag-search').submit(function(event){
	event.preventDefault();
   	console.log('Form submit event triggered');

    var form = $('#tag-search');
    var search = $('#tag_query').val();

    console.log(search);

    var searchUrl = "https://api.instagram.com/v1/tags/" + search + "/media/recent";
    //In order to search for all tags we removed q: from data and had to create a
    // new variable with media/recent endpoint and include the search variable (defined)
    //above.

    $.ajax({
		url: searchUrl,
	 	type: 'GET',
	  	data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
	 	dataType:'jsonp',
	 	success:function(data){
	 	 var output = data.data;
	 	 	$(".image-container").html('');
	 	 	for(var i = 0; i < output.length; i++) {
	 	 		imgUrls[i] = output[i].images.standard_resolution.url;
	 	 		$(".image-container").append('<img src="' + imgUrls[i] + '"/>');
	 	 	};
	 	console.log(data);
	    },
	  	error:function(data){
	    	alert("Sorry we're experiencing technical difficulties. Please try again later."); 
	    }
	});

});

function convertToJSON(data) {
	var datastring = JSON.stringify(data);
	console.log(data);
}
