window.onload = function () {
//build library view and data
var libraryData = JSON.parse('{"bookTitle":"CPHA Book Title", "version":"1.1","otherTitle":"Other Title","isDownloaded":true ,"date":"11/04/2020","thumb":"img/CPhA_Book_Image.png"}');
var libraryView = $("#lib").html();
var libraryOutput = Mustache.render(libraryView, libraryData);
$(document.body).append(libraryOutput);

var infoView = $('#moreInfo').html(),
	infoData;

$('#info').on('click', function () {
	infoData = JSON.parse('{"heading":"More Info","title":"Title","titleVal":"Compendium of Pharmaceuticals and Specialties 2014 (CPS)","thumb":"img/CPhA_Book_Image.png", "author":"Author","authorVal":"Editor-in-Chief Carol Repchinsky, BSP","publisher":"Publisher","publisherVal":"Canadian Pharmacists Association" ,"date":"11/04/2020","isbn":"978-1-894402-70-5","subj":"Subject","subjVal":"","orgPub":"Originial Publication","language":"Language","languageVal":"English","desc":"Description","descVal":"The Compendium of Pharmaceuticals and Specialties (CPS) is Canada\'s source for drug information. It contains more than 2000 product monographs for drugs, vaccines and natural health products, including 200 new products for the Canadian market. This definitive resource also has 151 monographs written by the editorial staff of CPhA, based on the best available evidence and reviewed by expert physicians and pharmacists. Clinical tools, product images and directories of sources for drug and health care information are included. A comprehensive cross-referenced index of generic and brand names ensures you can easily find what you\'re looking for. The product monographs are prepared by the pharmaceutical manufacturers and approved by Health Canada."}');
	var	infoOutput = Mustache.render(infoView, infoData);
	$('body').append("<div class='overlay'></div>");
	$('#infoModal').removeClass('hide').append(infoOutput);
});
//check if book is downloaded and update icons
if (libraryData.isDownloaded) {
	$('#garbage').addClass("fa fa-trash-o fa-2x");
	$('#accessBook').addClass("fa fa-book fa-2x");
}else{
	$('#accessBook').addClass("fa fa-cloud-download fa-2x");
};
};