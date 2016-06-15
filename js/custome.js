
var filesname = {};
var item='';
$.ajax({
	url: "images/slide/",
	success: function(data){
		filesname=data;
		// data=(data.split("<ul>")[1]).split("</ul>")[0];
		//console.log(data);
		// $(".footer").html(data);
		$(data).find("a").each(function(){
	        // will loop through 
	        filesname=data;
	        if($(this).attr("href")!='...'){
	        	//document.getElementByid('slide-show')+='<div data-p="225.00" style="display: none;"><img data-u="image" src="images/slide/'+$(this).attr("href")+'" /></div>';
	       		//console.log("Found a file: " + $(this).attr("href"));
	       		$('.slide-show').html('<div data-p="225.00" style="display: none;"><img data-u="image" src="images/slide/'+$(this).attr("href")+'" /></div>');
	       	}
	     });

	}
});
