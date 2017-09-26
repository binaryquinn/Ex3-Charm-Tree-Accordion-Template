// Code goes here
//<![CDATA[
window.onload=function(){
  function makeAccordion(content) {
  $(".accordionWrapper").append(content);
}
google.script.run.withSuccessHandler(makeAccordion).makeAll();

mxTooltipHandler.prototype.ignoreTouchEvents = !1;

mxTooltipHandler.prototype.reset = function(a, b) {
  var c = a.getState(),
    d = a.getSource(),
    e = a.getX(),
    f = a.getY(),
    g = c != null ? a.isSource(c.shape) || a.isSource(c.text) : !1;
  var a = this.graph.getTooltip(c, d, e, f);

  if (!this.destroyed && null != a && 0 < a.length) {
    null === this.div && this.init();
    $("#modalContent").html(a.replace(/\n/g, "\x3cbr\x3e"));
    var headings = c.text.value.split("<br>");
    $("#charmName").text(headings[0].slice(3, -4));
    if (headings.length > 2) {
      $("#charmAbility").text(headings[1]);
      $("#charmEssence").text(headings[2]);

    } else {
      $("#charmAbility").text("");
      $("#charmEssence").text("");

    }


  }

  this.state = c;
  this.node = d;
  this.stateSource = g;

};

$("g > g > g").on("mousedown touch", function(event) {
  modal.style.display = "block";
  var maximum = (($(window).height()) / 2) - ($(".modal-header").height() + $(".modal-footer").height());
  var contentHeight = $("#modalContent").height() + 40;

  $(".modal-body").height(Math.min(maximum, contentHeight));
  $(".modal-content").css("bottom", ($(window).height() / 2) - ($(".modal-content").height() / 2));
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

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
