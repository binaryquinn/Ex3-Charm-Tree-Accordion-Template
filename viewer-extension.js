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
