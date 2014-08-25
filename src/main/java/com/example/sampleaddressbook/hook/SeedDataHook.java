package com.example.sampleaddressbook.hook;

import com.britesnow.snow.web.db.hibernate.HibernateSessionInViewHandler;
import com.britesnow.snow.web.hook.AppPhase;
import com.britesnow.snow.web.hook.annotation.WebApplicationHook;
import com.example.sampleaddressbook.dao.ContactDao;
import com.example.sampleaddressbook.dao.GroupContactRelationDao;
import com.example.sampleaddressbook.dao.GroupDao;
import com.example.sampleaddressbook.entity.Contact;
import com.example.sampleaddressbook.entity.Group;
import com.example.sampleaddressbook.entity.GroupContactRelation;
import com.google.inject.Singleton;

import java.util.ArrayList;
import java.util.List;

@Singleton
public class SeedDataHook {

    @WebApplicationHook(phase = AppPhase.INIT)
    public void seedStore(GroupDao groupDao, ContactDao contactDao,GroupContactRelationDao groupContactRelationDao, HibernateSessionInViewHandler inView) {
        inView.openSessionInView();
        List<Group> groupList = new ArrayList<Group>();
        for(String name:groups) {
            groupList.add(groupDao.save(new Group(name)));
        }

        List<Contact> contactList = new ArrayList<Contact>();
        contactList.add(new Contact("John",23,"china beijing"));
        contactList.add(new Contact("Gavin",24,"china chongqing"));
        contactList.add(new Contact("Lucy",20,"England"));

        for(Contact c:contactList) {
            c = contactDao.save(c);
            groupContactRelationDao.save(new GroupContactRelation(c.getId(),groupList.get((int)(Math.random()*groupList.size())).getId()));
        }

        inView.closeSessionInView();
    }


    private String[] groups = {"favorite","family","workmate","friend"};


}
