window.onload = function () {
FastClick.attach(document.body);
//build library view and data
var libraryData = JSON.parse('{"bookTitle":"Compendium of Pharmaceuticals and Specialties 2014 (CPS) English", "author":"Editor-in-Chief Carol Repchinsky, BSP","otherTitle":"Other Title","isDownloaded":true ,"date":"11/04/2020","thumb":"img/CPhA_Book_Image.png"}');
var libraryView = $("#lib").html();
var libraryOutput = Mustache.render(libraryView, libraryData);
$(document.body).append(libraryOutput);

var infoView = $('#moreInfo').html(),
	infoData;

$('#info').on('click', function () {
	infoData = JSON.parse('{"heading":"More Info","title":"Title","titleVal":"Compendium of Pharmaceuticals and Specialties 2014 (CPS)","thumb":"img/CPhA_Book_Image.png", "aboutBook":"about.html","aboutUs":"about.html","credits":"credits.html","author":"Author","authorVal":"Editor-in-Chief Carol Repchinsky, BSP","publisher":"Publisher","publisherVal":"Canadian Pharmacists Association" ,"date":"11/04/2020","isbn":"978-1-894402-70-5","subj":"Subject","subjVal":"","orgPub":"Originial Publication","language":"Language","languageVal":"English","desc":"Description","descVal":"The Compendium of Pharmaceuticals and Specialties (CPS) is Canada\'s source for drug information. It contains more than 2000 product monographs for drugs, vaccines and natural health products, including 200 new products for the Canadian market. This definitive resource also has 151 monographs written by the editorial staff of CPhA, based on the best available evidence and reviewed by expert physicians and pharmacists. Clinical tools, product images and directories of sources for drug and health care information are included. A comprehensive cross-referenced index of generic and brand names ensures you can easily find what you\'re looking for. The product monographs are prepared by the pharmaceutical manufacturers and approved by Health Canada."}');
	var	infoOutput = Mustache.render(infoView, infoData);
	$('.overlay').removeClass('hide');
	$('#infoModal').append(infoOutput);

	$('#infoModal').removeClass('hide')
		$('.overlay').on('click', function(){
			$('#infoModal').addClass('hide');
			$('.overlay').addClass('hide');
		});

	$('.aboutLinks').children().on('click', function (ev) {
			$('.infoList').addClass('hide');
			$('.stickyLeft').addClass('hide');
			$('.iframeCont').show('fast');

		$('#close').on('click', function () {
			$('.infoList').removeClass('hide');
			$('.stickyLeft').removeClass('hide');
			$('.iframeCont').hide('fast');
		});
	});
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
	$('#garbage').addClass("fa fa-trash-o fa-3x");
	$('#accessBook').addClass("fa fa-book fa-3x");
}else{
	//show download icon
	$('#accessBook').addClass("fa fa-cloud-download fa-3x");
};

//progress bar
	$('#accessBook').on('click', function () {
	if ($('#accessBook').hasClass('fa fa-cloud-download fa-3x')) {
			$('progress').removeClass('hide');
	
					var i = 0;
					if (i <= $('progress').attr('max')){
					setInterval(function() {
					      i +=5;
					      $('progress').attr('value',i);		
					}, 1000);
				}

			/*$('progress').addClass('hide');*/
			$('#accessBook').removeClass("a fa-cloud-download fa-3x");
			$('#garbage').addClass("fa fa-trash-o fa-3x");
			$('#accessBook').addClass("fa fa-book fa-3x");	

				}		
		});
};

