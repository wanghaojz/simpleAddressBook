;
(function(){
    brite.registerView("ContactView",{emptyParent:true},{
        create:function(data){
            var groupDao = brite.dao("Group");
            var dfd = $.Deferred();
            groupDao.list().done(function(gData){
                dfd.resolve(render("tmpl-ContactView",gData));
            });

            return dfd.promise();
        },
        postDisplay:function(){
            renderData.call(this);
        },
        events:{
            "click;.add":function(e){
                var view = this;
                var contactDao = brite.dao("Contact");
                var name=$(".contact-form .name",view.$el).val();
                var age=$(".contact-form .age",view.$el).val();
                var address=$(".contact-form .address",view.$el).val();
                if(!/\d+/.test(age)){
                    alert("please input integer for age field");
                    return false;
                }

                var groups =new Array();
                $.each($(".contact-form [name='group']:checked"),function(index,e){
                    groups.push($(e).val());
                });

                contactDao.save({name:name,age:age,address:address,groups:groups}).done(function(){
                    renderData.call(this);
                });
            },
            "click;.remove":function(e){
                var contactDao = brite.dao("Contact");
                var id = $(e.target).closest("div").attr("data-id");
                contactDao.del(id).done(function(){
                    renderData.call(this);
                });
            },
            "click;.edit":function(e){
                var contactDao = brite.dao("Contact");
                var id = $(e.target).closest("div").attr("data-id");
                contactDao.get(id).done(function(data){
                    $(".contact-update-form").hide(1000,function(){
                        $(this).remove();
                    });
                    $(e.target).closest("div").append(render("tmpl-contactUpdate",data.result));
                });
            },
            "click;.cancel":function(e){
                $(".contact-update-form").hide(1000,function(){
                    $(this).remove();
                });
            },
            "click;.update":function(e){
                var contactDao = brite.dao("Contact");
                var $form = $(e.target).closest(".contact-update-form");
                var id = $form.attr("data-id");
                var name = $form.find(".name").val();
                var age = $form.find(".age").val();
                if(!/\d+/.test(age)){
                    alert("please input integer for age field");
                    return false;
                }
                var address = $form.find(".address").val();
                var groups =new Array();
                $.each($(".contact-update-form [name='group']:checked"),function(index,e){
                    groups.push($(e).val());
                });
                contactDao.update({
                    id:id,
                    name:name,
                    age:age,
                    address:address,
                    groups:groups
                }).done(function(data){
                    renderData.call(this);
                });
            }
        }
    });

    function renderData(){
        var view = this;
        var contactDao = brite.dao("Contact");

        contactDao.list().done(function(data){
            $(".list",view.$el).html(render("tmpl-contactList",data));
        });
    }
})();