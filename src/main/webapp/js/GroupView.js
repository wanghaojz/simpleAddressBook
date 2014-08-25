;
(function(){
    brite.registerView("GroupView",{emptyParent:true},{
        create:function(data){
            return render("tmpl-GroupView");
        },
        postDisplay:function(){
            renderData.call(this);
        },
        events:{
            "click;.add":function(e){
                var view = this;
                var groupDao = brite.dao("Group");
                var name=$(".group-form .name",view.$el).val();
                groupDao.save({name:name}).done(function(){
                    renderData.call(this);
                });
            },
            "click;.remove":function(e){
                var groupDao = brite.dao("Group");
                var id = $(e.target).closest("div").attr("data-id");
                groupDao.del(id).done(function(){
                    renderData.call(this);
                });
            },
            "click;.edit":function(e){
                var groupDao = brite.dao("Group");
                var id = $(e.target).closest("div").attr("data-id");
                groupDao.get(id).done(function(data){
                    $(".group-update-form").hide(1000,function(){
                        $(this).remove();
                    });
                    $(e.target).closest("div").append(render("tmpl-groupUpdate",data.result));
                });
            },
            "click;.cancel":function(e){
                $(".group-update-form").hide(1000,function(){
                    $(this).remove();
                });
            },
            "click;.update":function(e){
                var groupDao = brite.dao("Group");
                var $form = $(e.target).closest(".group-update-form");
                var id = $form.attr("data-id");
                var name = $form.find(".name").val();
                groupDao.update({
                    id:id,
                    name:name
                }).done(function(data){
                    renderData.call(this);
                });
            }
        }
    });

    function renderData(){
        var view = this;
        var groupDao = brite.dao("Group");

        groupDao.list().done(function(data){
            $(".list",view.$el).html(render("tmpl-groupList",data));
        });
    }
})();