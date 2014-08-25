;
(function(){
    brite.registerView("MainView",{emptyParent:true},{
       create:function(data){
           return render("tmpl-MainView");
       },
       postDisplay:function(data){
           brite.display("ContactView",".content");
       },
       events:{
           "click;.nav li":function(e){
               var view = this;
               var $li = $(e.target).closest("li");
               var type = $li.attr("data-type");
               if($li.hasClass("active")){
                   return;
               }
               $(".active",view.$el).removeClass("active");
               $li.addClass("active");


               brite.display(type+"View",".content");
           }
       }
    });
})();