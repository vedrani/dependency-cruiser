var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dot.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.folder : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "    "
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.path : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":93}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = ((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":19,"column":9},"end":{"line":19,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\" [label=\""
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":42}}}) : helper))) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":44},"end":{"line":19,"column":84}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.fontcolor : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":84},"end":{"line":19,"column":136}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.fillcolor : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":136},"end":{"line":19,"column":188}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.matchesDoNotFollow : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":188},"end":{"line":19,"column":236}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.rule : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":236},"end":{"line":19,"column":281}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":281},"end":{"line":19,"column":316}}})) != null ? stack1 : "")
    + "]"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.path : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":317},"end":{"line":19,"column":342}}})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "subgraph \"cluster_"
    + ((stack1 = ((helper = (helper = helpers.aggregateSnippet || (depth0 != null ? depth0.aggregateSnippet : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"aggregateSnippet","hash":{},"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":58}}}) : helper))) != null ? stack1 : "")
    + "\" {label=\""
    + ((stack1 = ((helper = (helper = helpers.snippet || (depth0 != null ? depth0.snippet : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"snippet","hash":{},"data":data,"loc":{"start":{"line":18,"column":68},"end":{"line":18,"column":81}}}) : helper))) != null ? stack1 : "")
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "color=\""
    + ((stack1 = ((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data,"loc":{"start":{"line":19,"column":64},"end":{"line":19,"column":75}}}) : helper))) != null ? stack1 : "")
    + "\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "fontcolor=\""
    + ((stack1 = ((helper = (helper = helpers.fontcolor || (depth0 != null ? depth0.fontcolor : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"fontcolor","hash":{},"data":data,"loc":{"start":{"line":19,"column":112},"end":{"line":19,"column":127}}}) : helper))) != null ? stack1 : "")
    + "\" ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "fillcolor=\""
    + ((stack1 = ((helper = (helper = helpers.fillcolor || (depth0 != null ? depth0.fillcolor : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"fillcolor","hash":{},"data":data,"loc":{"start":{"line":19,"column":164},"end":{"line":19,"column":179}}}) : helper))) != null ? stack1 : "")
    + "\" ";
},"11":function(container,depth0,helpers,partials,data) {
    return "shape=\"folder\" ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "tooltip=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.rule : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\" ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "URL=\""
    + ((stack1 = ((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":19,"column":298},"end":{"line":19,"column":307}}}) : helper))) != null ? stack1 : "")
    + "\"";
},"17":function(container,depth0,helpers,partials,data) {
    return " }";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "    \""
    + ((stack1 = ((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":21,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" [label=\""
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":21,"column":27},"end":{"line":21,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":40},"end":{"line":21,"column":80}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.fontcolor : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":80},"end":{"line":21,"column":132}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.fillcolor : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":132},"end":{"line":21,"column":184}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.matchesDoNotFollow : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":184},"end":{"line":21,"column":232}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.rule : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":232},"end":{"line":21,"column":277}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":277},"end":{"line":21,"column":312}}})) != null ? stack1 : "")
    + "]\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dependencies : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":31,"column":13}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "    \""
    + ((stack1 = container.lambda((depths[1] != null ? depths[1].source : depths[1]), depth0)) != null ? stack1 : "")
    + "\" -> \""
    + ((stack1 = ((helper = (helper = helpers.resolved || (depth0 != null ? depth0.resolved : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"resolved","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.valid : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.program(26, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":30,"column":131}}})) != null ? stack1 : "")
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.coreModule : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":62}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return " [color=\"grey\" penwidth=1.0]";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.lambda;

  return " [color=\""
    + ((stack1 = ((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":30,"column":22},"end":{"line":30,"column":33}}}) : helper))) != null ? stack1 : "")
    + "\" penwidth=2.0 tooltip=\""
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.rule : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\" fontcolor=\""
    + ((stack1 = ((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":30,"column":85},"end":{"line":30,"column":96}}}) : helper))) != null ? stack1 : "")
    + "\" xlabel=\""
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.rule : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\"]";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "strict digraph \"dependency-cruiser output\"{\n    ordering=out\n    rankdir=LR\n    splines=true\n    overlap=false\n    nodesep=0.16\n    ranksep=0.18\n    fontname=\"Helvetica-bold\"\n    fontsize=9\n    style=\"rounded,bold,filled\"\n    fillcolor=\"#ffffff\"\n    compound=true\n    node [shape=box style=\"rounded, filled\" fillcolor=\"#ffffcc\" height=0.2 fontname=Helvetica fontsize=9]\n    edge [color=\"#00000033\" penwidth=2.0 arrowhead=normal fontname=Helvetica fontsize=9]\n\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.things : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.things : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":32,"column":9}}})) != null ? stack1 : "")
    + "}\n";
},"useData":true,"useDepths":true});
