Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-ContactView ---
Handlebars.templates['tmpl-ContactView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <label><input type=\"checkbox\" name=\"group\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n             ";
  return buffer;
  }

  buffer += "<div class=\"ContactView\">\n      <div class=\"contact-form\">\n          <h3>Add Contact</h3>\n          <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"contactName\" class=\"name form-control\">\n              <input type=\"text\" placeholder=\"age\" class=\"age form-control\">\n\n          </div>\n          <div class=\"form-group\">\n              <textarea class=\"form-control address\" placeholder=\"Address\"></textarea>\n          </div>\n          <div class=\"form-group\">\n              Groups:\n             ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n          <div class=\"form-group clearfix\">\n                <input type=\"button\" class=\"btn btn-primary add\" value=\"Add\"/>\n          </div>\n      </div>\n\n      <h3>Contact List</h3>\n      <div class=\"list\">\n\n      </div>\n    </div>";
  return buffer;
  }
);

// template --- tmpl-contactList ---
Handlebars.templates['tmpl-contactList'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"item\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " -- (age: ";
  if (helper = helpers.age) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.age); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", address: ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\n            <i class=\"glyphicon glyphicon-remove-circle remove\"></i>\n            <i class=\"glyphicon glyphicon-edit edit\"></i>\n            <div class=\"group\">Groups:&nbsp;&nbsp;&nbsp;";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.groups)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        </div>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.groups) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groups); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "No Group";
  }

  buffer += "<div class=\"items\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>";
  return buffer;
  }
);

// template --- tmpl-contactUpdate ---
Handlebars.templates['tmpl-contactUpdate'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <label><input type=\"checkbox\" name=\"group\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  if (helper = helpers.checked) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checked); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n            ";
  return buffer;
  }

  buffer += "<div class=\"contact-update-form\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <h3>Update Contact</h3>\n        <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"contactName\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"name form-control\">\n            <input type=\"text\" placeholder=\"age\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.age)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"age form-control\">\n\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control address\" placeholder=\"Address\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n        </div>\n        <div class=\"form-group\">\n            Groups:\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"form-group clearfix\">\n            <input type=\"button\" class=\"btn btn-primary update\" value=\"Update\"/>\n            <input type=\"button\" class=\"btn btn-primary cancel\" value=\"Cancel\"/>\n        </div>\n    </div>";
  return buffer;
  }
);

// template --- tmpl-GroupView ---
Handlebars.templates['tmpl-GroupView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"GroupView\">\n        <div class=\"group-form\">\n            <h3>Add Group</h3>\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"groupName\" class=\"name form-control\">\n                <input type=\"button\" class=\"btn btn-primary add\" value=\"Add\"/>\n            </div>\n\n        </div>\n\n        <h3>Group List</h3>\n        <div class=\"list\">\n\n        </div>\n    </div>";
  }
);

// template --- tmpl-groupList ---
Handlebars.templates['tmpl-groupList'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"item\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n            <i class=\"glyphicon glyphicon-remove-circle remove\"></i>\n            <i class=\"glyphicon glyphicon-edit edit\"></i>\n        </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"items\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>";
  return buffer;
  }
);

// template --- tmpl-groupUpdate ---
Handlebars.templates['tmpl-groupUpdate'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"group-update-form\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <h3>Update Group</h3>\n        <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"groupName\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"name form-control\">\n            <input type=\"button\" class=\"btn btn-primary update\" value=\"Update\"/>\n            <input type=\"button\" class=\"btn btn-primary cancel\" value=\"Cancel\"/>\n        </div>\n    </div>";
  return buffer;
  }
);

// template --- tmpl-MainView ---
Handlebars.templates['tmpl-MainView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"MainView\">\n        <h2 class=\"title\">Simple Address Book</h2>\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li class=\"active\" data-type=\"Contact\"><a href=\"#\">Contact</a></li>\n            <li data-type=\"Group\"><a href=\"#\" >Group</a></li>\n        </ul>\n        <div class=\"content\">\n\n        </div>\n    </div>";
  }
);
