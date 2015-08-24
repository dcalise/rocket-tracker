var JSONfile = '/users.json';
/**  Search Functionality **/

/** UI **/

$('a.search').on('click',function(){
	$('.search-bar').slideDown();
});

/** Ajax Call **/

// $('#search').keyup(function(){
// 	var phrase = new RegExp($('#search').val(), 'i');
// 	var output = '<ul class="searchResults">';
// 	$.getJSON(JSONfile, function(data){
// 		console.log(data);
// 	}); //end get json
// }); //end key up