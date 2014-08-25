package com.example.sampleaddressbook.web;

import com.britesnow.snow.util.MapUtil;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampleaddressbook.dao.ContactDao;
import com.example.sampleaddressbook.dao.GroupContactRelationDao;
import com.example.sampleaddressbook.dao.GroupDao;
import com.example.sampleaddressbook.entity.Contact;
import com.example.sampleaddressbook.entity.Group;
import com.example.sampleaddressbook.entity.GroupContactRelation;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Singleton
public class ContactWebHandlers {

    @Inject
    private ContactDao contactDao;

    @Inject
    private GroupContactRelationDao groupContactRelationDao;

    @Inject
    private GroupDao groupDao;

    @WebPost("/Contact/save")
    public WebMessage save(@WebParam("name")String name,@WebParam("age")Integer age,@WebParam("address")String address,@WebParam("groups[]")Integer[] groupIds){
        Contact contact = new Contact();
        contact.setName(name);
        contact.setAge(age);
        contact.setAddress(address);
        contact = contactDao.save(contact);

        groupContactRelationDao.addRelationForContact(contact.getId(),groupIds);
        return WebMessage.success(contact);
    }

    @WebGet("/Contact/list")
    public WebMessage list(){
        List<Map> contactsWithGroup = new ArrayList<Map>();
        List<Contact> contacts = contactDao.list();
        for(Contact contact:contacts){
            contactsWithGroup.add(MapUtil.mapIt("id",contact.getId(),
                                                "name",contact.getName(),
                                                "age",contact.getAge(),
                                                "address",contact.getAddress(),
                                                "groups",groupContactRelationDao.getGroupNameForContact(contact.getId())));
        }
        return WebMessage.success(contactsWithGroup);
    }

    @WebPost("/Contact/del")
    public WebMessage del(@WebParam("id")Integer id){
        contactDao.delete(id);
        return WebMessage.success("");
    }

    @WebGet("/Contact/get")
    public WebMessage get(@WebParam("id")Integer id){
        List<Group> groups = groupDao.list();
        List<GroupContactRelation> groupContactRelations = groupContactRelationDao.getRelationForContact(id);
        List<Map> groupData = new ArrayList<Map>();
        boolean checked = false;
        for(Group g:groups){
            checked = false;
            for(GroupContactRelation gcr:groupContactRelations){
                if(gcr.getGroupId()==g.getId()){
                    checked = true;
                    break;
                }
            }
            groupData.add(MapUtil.mapIt("id",g.getId(),"name",g.getName(),"checked",checked?"checked":""));
        }

        Map result = MapUtil.mapIt("groups",groupData,"contact",contactDao.get(id));
        return WebMessage.success(result);
    }

    @WebPost("/Contact/update")
    public WebMessage update(@WebParam("id")Integer id,@WebParam("name")String name,@WebParam("age")Integer age,@WebParam("address")String address,@WebParam("groups[]")Integer[] groupIds){
        Contact contact = new Contact();
        contact.setId(id);
        contact.setAge(age);
        contact.setName(name);
        contact.setAddress(address);

        groupContactRelationDao.clearRelationForContact(id);
        if(groupIds!=null) {
            groupContactRelationDao.addRelationForContact(id, groupIds);
        }
        return WebMessage.success(contactDao.update(contact));
    }
}
