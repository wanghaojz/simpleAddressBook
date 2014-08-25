package com.example.sampleaddressbook.web;

import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampleaddressbook.dao.GroupDao;
import com.example.sampleaddressbook.entity.Group;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class GroupWebHandlers {

    @Inject
    private GroupDao groupDao;

    @WebPost("/Group/save")
    public WebMessage save(@WebParam("name")String name){
        Group group = new Group();
        group.setName(name);
        return WebMessage.success(groupDao.save(group));
    }

    @WebGet("/Group/list")
    public WebMessage list(){
        return WebMessage.success(groupDao.list());
    }

    @WebPost("/Group/del")
    public WebMessage del(@WebParam("id")Integer id){
        groupDao.delete(id);
        return WebMessage.success("");
    }

    @WebGet("/Group/get")
    public WebMessage get(@WebParam("id")Integer id){
        return WebMessage.success(groupDao.get(id));
    }

    @WebPost("/Group/update")
    public WebMessage update(@WebParam("id")Integer id,@WebParam("name")String name){
        Group group = new Group();
        group.setId(id);
        group.setName(name);
        return WebMessage.success(groupDao.update(group));
    }
}
