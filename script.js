// Code goes here
//<![CDATA[
window.onload=function(){

function highlightCharm(charmTree, index, start) {
  var tree = charmTree[2];
  var charm = charmTree[1][index].trim();

  var stylePt;
  var styleData;
  var insertionPt;
  var innerFront;
  var innerEnd;
    
   stylePt = tree.indexOf('style="',tree.indexOf('="'+ charm, start))+7;
   if(tree.indexOf('="'+ charm, start) > -1)
   {
    insertionPt = tree.indexOf('"', stylePt);
    styleData = tree.substring( stylePt, insertionPt);
    if( styleData.indexOf('#FFD966;') > -1) {
       start = insertionPt;
       highlightCharm(charmTree, index, start);
    }
    else {
      styleData += 'fillColor=#FFD966;'
      innerFront = tree.substring(0,stylePt);   
      innerEnd = tree.substring(insertionPt);
      charmTree[2] = innerFront + styleData + innerEnd;
    }
  }
}

function makeAccordion(content) {

  var itemBegin = '<div class="accordionItem close"><h2 class="accordionItemHeading">';
  var contentBegin ='</h2><div class="accordionItemContent"><div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,'+
                 '&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile&gt;&lt;diagram&gt;';
  var contentEnd =  '&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}\"></div></div></div>';
  var index;
  
  for(var src = 0; src < content.length; src++){

    
    var treeCore = content[src][2];
    var index;
    var stylePt;
    var insertionPt;
    var innerFront;
    var innerEnd;
    for(index = 0; index < content[src][1].length; ++index) {
      highlightCharm( content[src], index, 0);
//       stylePt = treeCore.indexOf('style="',treeCore.indexOf('="'+content[src][1][index]))+7;
//       insertionPt = treeCore.indexOf('"', stylePt);

//       innerFront = treeCore.substring(0,insertionPt);   
//       innerEnd = treeCore.substring(insertionPt);
//       treeCore = innerFront + 'fillColor=#FFD966;' + innerEnd;
    }
    
    content[src][2] = encode(content[src][2]);
  }
 

 
  for (index = 0; index < content.length; ++index) {
    $(".accordionWrapper").append(itemBegin+content[index][0]+contentBegin+content[index][2]+contentEnd);    
  }
  
  [
    'https://draw.io/js/viewer.min.js',
    'https://rawgit.com/binaryquinn/Ex3-Charm-Tree-Accordion-Template/master/viewer-extension.js'
  ].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
}); 
}

google.script.run.withSuccessHandler(makeAccordion).makeAll();


$(document).on("mousedown touch"," g rect  , foreignObject div div ", function(event) {

  modal.style.display = "block";
  var maximum = (($(window).height()) / 2) - ($(".modal-header").height() + $(".modal-footer").height());
  var contentHeight = $("#modalContent").height() + 40;

  $(".modal-body").height(Math.min(maximum, contentHeight));
  $(".modal-content").css("bottom", ($(window).height() / 2) - ($(".modal-content").height() / 2));
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');

$(document).on("click touch", ".accordionItemHeading", function(event) {
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

window.onmousedown = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
};//]]>
