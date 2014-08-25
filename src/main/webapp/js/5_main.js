(function(w){
    Handlebars.templates = Handlebars.templates || {};
    w.render = function(templateName,data){
        var tmpl = Handlebars.templates[templateName];
        if (!tmpl){
            tmpl = Handlebars.compile($("#" + templateName).html());
            Handlebars.templates[templateName] = tmpl;
        }
        return tmpl(data);
    };

})(window);

(function(){
    brite.registerDao(new brite.RemoteDaoHandler("Contact"));
    brite.registerDao(new brite.RemoteDaoHandler("Group"));
})();