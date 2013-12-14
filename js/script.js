window.onload = function () {
FastClick.attach(document.body);

var downloadIcon = "fa fa-cloud-download fa-3x",
			trashIcon = "fa fa-trash-o fa-3x",
			bookIcon = "fa fa-book fa-3x"
//build library view and data
var libraryData = JSON.parse('{"bookTitle":"Compendium of Pharmaceuticals and Specialties 2014 (CPS) English", "author":"Editor-in-Chief Carol Repchinsky, BSP","otherTitle":"Other Title","isDownloaded":false ,"date":"11/04/2020","thumb":"img/CPhA_Book_Image.png"}');
var libraryView = $("#lib").html();
var libraryOutput = Mustache.render(libraryView, libraryData);
$(document.body).append(libraryOutput);

var infoView = $('#moreInfo').html(),
	infoData;

//render and display more info modal on click (destroys itself when window is exited)
$('#info').on('click', function () {
	infoData = JSON.parse('{"heading":"More information","title":"Title","titleVal":"Compendium of Pharmaceuticals and Specialties 2014 (CPS)","thumb":"img/CPhA_Book_Image.png", "aboutBook":"about.html","aboutUs":"about.html","credits":"credits.html","author":"Author","authorVal":"Editor-in-Chief Carol Repchinsky, BSP","publisher":"Publisher","publisherVal":"Canadian Pharmacists Association" ,"date":"11/04/2020","isbn":"978-1-894402-70-5","subj":"Subject","subjVal":"","orgPub":"Originial Publication","language":"Language","languageVal":"English","desc":"Description","descVal":"The Compendium of Pharmaceuticals and Specialties (CPS) is Canada\'s source for drug information. It contains more than 2000 product monographs for drugs, vaccines and natural health products, including 200 new products for the Canadian market. This definitive resource also has 151 monographs written by the editorial staff of CPhA, based on the best available evidence and reviewed by expert physicians and pharmacists. Clinical tools, product images and directories of sources for drug and health care information are included. A comprehensive cross-referenced index of generic and brand names ensures you can easily find what you\'re looking for. The product monographs are prepared by the pharmaceutical manufacturers and approved by Health Canada."}');
	
	var	infoOutput = Mustache.render(infoView, infoData);
		
	//show grey background, append rendred more info view to modal window, show modal window
	$('.overlay').removeClass('hide');
	$('#infoModal').append(infoOutput);
	$('#infoModal').removeClass('hide');
	//dynamically remove list items with empty values
	removeEmpty();
	//controlll show/hide of elements for the mroe info iframes
	$('.aboutLinks').children().on('click', function (ev) {
			$('.infoList,.stickyLeft').addClass('hide');
			$('.iframeCont').show('fast');
		});
			$('#close').on('click', function () {
			$('.infoList,.stickyLeft').removeClass('hide');
			$('#aboutFrame').attr('src',' ');
			$('.iframeCont').hide('fast');		
		});
});
		$('.overlay').on('click', function(){
			$('#infoModal').addClass('hide').children().remove();
			$('.overlay').addClass('hide');
		});

//orientation change handlers
var mql = window.matchMedia("(orientation: portrait)");
if(mql.matches) {  
	$('.tiles').addClass("small-block-grid-2");
} else {  
	$('.tiles').addClass("small-block-grid-3");
}
mql.addListener(function(m) {
	if(m.matches) {
		$('.tiles').removeClass("small-block-grid-3");
		$('.tiles').addClass("small-block-grid-2");
		console.log("portrait");
	}
	else {
		$('.tiles').removeClass("small-block-grid-2");
		$('.tiles').addClass("small-block-grid-3");
		console.log("landscape");
	}
});

//check if book is downloaded and update icons
if (libraryData.isDownloaded) {
	//show book icon and garbage icon
	$('#garbage').addClass(trashIcon);
	$('#accessBook').addClass(bookIcon);
}else{
	//show download icon
	$('#accessBook').addClass(downloadIcon);
};

//progress bar
	$('#accessBook').on('click', function () {
		//only excecute download if the icon class = donwloaded --> (data.isDownloaded = false)
	if ($('#accessBook').hasClass(downloadIcon)) {
			$('progress').removeClass('hide');
			$('.grayed').removeClass('hide');
					var i = 0;
					if (i <= $('progress').attr('max')){
					setInterval(function() {
					      i +=5;
					      $('progress').attr('value',i);		
					}, 1000);
				}

			
				}
			//hide 
			$('progress').addClass('hide');
			$('.grayed').addClass('hide');
			$('#accessBook').removeClass(downloadIcon);
			$('#garbage').addClass(trashIcon);
			$('#accessBook').addClass(bookIcon);		
		});
};

	//dynamically remove list items with empty values
	function removeEmpty () {
			$(".val").each(function(){
		    	if (!$(this).text().trim().length) {
	        	$(this).parent($('li')).remove();
	    	}
		});
	};