var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['csv.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "\""
    + ((stack1 = ((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"source","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\",";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "\""
    + ((stack1 = ((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\","
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.incidences : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":78}}})) != null ? stack1 : "")
    + "\"\"\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "\""
    + ((stack1 = ((helper = (helper = helpers.incidence || (depth0 != null ? depth0.incidence : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"incidence","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":67}}}) : helper))) != null ? stack1 : "")
    + "\",";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "\"\","
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.things : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":43}}})) != null ? stack1 : "")
    + "\"\"\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.things : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
