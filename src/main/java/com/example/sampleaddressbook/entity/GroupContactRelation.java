package com.example.sampleaddressbook.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GroupContactRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int contactId;

    private int groupId;

    public GroupContactRelation(){}

    public GroupContactRelation(int contactId,int groupId){
        this.contactId = contactId;
        this.groupId = groupId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getContactId() {
        return contactId;
    }

    public void setContactId(int contactId) {
        this.contactId = contactId;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }
}
