// Code goes here
//<![CDATA[
window.onload=function(){
  function makeAccordion(content) {
  $(".accordionWrapper").append(content);
}
google.script.run.withSuccessHandler(makeAccordion).makeAll();

$(document).on("mousedown touch","g[style], g[transform]", function(event) {
  modal.style.display = "block";
  var maximum = (($(window).height()) / 2) - ($(".modal-header").height() + $(".modal-footer").height());
  var contentHeight = $("#modalContent").height() + 40;

  $(".modal-body").height(Math.min(maximum, contentHeight));
  $(".modal-content").css("bottom", ($(window).height() / 2) - ($(".modal-content").height() / 2));
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
//for (i = 0; i < accHD.length; i++) {
  //accHD[i].addEventListener('click', toggleItem, false);
//}

$(document).on("mousedown touch", "accordionItemHeading", function(event) {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
});

var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closed")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
};//]]>
