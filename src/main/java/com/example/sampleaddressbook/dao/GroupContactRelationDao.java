package com.example.sampleaddressbook.dao;

import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.example.sampleaddressbook.entity.GroupContactRelation;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.hibernate.Criteria;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Singleton
public class GroupContactRelationDao implements DaoInterface<GroupContactRelation> {

    @Inject
    private HibernateDaoHelper daoHelper;

    @Override
    public GroupContactRelation save(GroupContactRelation groupContactRelation) {
        return daoHelper.save(groupContactRelation);
    }

    @Override
    public GroupContactRelation get(Integer id) {
        return daoHelper.get(GroupContactRelation.class,id);
    }

    @Override
    public void delete(int id) {
        daoHelper.delete(GroupContactRelation.class,id);
    }

    @Override
    public List<GroupContactRelation> list() {
        return (List<GroupContactRelation>) daoHelper.find(0,100,"from "+GroupContactRelation.class.getSimpleName());
    }

    @Override
    public GroupContactRelation update(GroupContactRelation groupContactRelation) {
        return daoHelper.update(groupContactRelation);
    }

    public void clearRelationForContact(Integer id){
        daoHelper.executeHql("delete from GroupContactRelation where contactId=?",id);
    }

    public void clearRelationForGroup(Integer groupId){
        daoHelper.executeHql("delete from GroupContactRelation where groupId=?",groupId);
    }

    public void addRelationForContact(Integer contactId,Integer[] groupIds){
        for(Integer groupId:groupIds) {
            GroupContactRelation groupContactRelation = new GroupContactRelation();
            groupContactRelation.setContactId(contactId);
            groupContactRelation.setGroupId(groupId);
            save(groupContactRelation);
        }
    }

    public void addRelationForGroup(Integer groupId,Integer[] contactIds){
        for(Integer contactId:contactIds) {
            GroupContactRelation groupContactRelation = new GroupContactRelation();
            groupContactRelation.setContactId(contactId);
            groupContactRelation.setGroupId(groupId);
            save(groupContactRelation);
        }
    }

    public List<GroupContactRelation> getRelationForContact(Integer contactId){
        return (List<GroupContactRelation>) daoHelper.find(0,100,"from GroupContactRelation where contactId=?",contactId);
    }

    public List<GroupContactRelation> getRelationForGroup(Integer groupId){
        return (List<GroupContactRelation>) daoHelper.find(0,100,"from GroupContactRelation where groupId=?",groupId);
    }

    public List<String> getGroupNameForContact(Integer contactId){
        List<Map> names =  daoHelper.getSession()
                .createSQLQuery("select g.name as groupName from t_group g join GroupContactRelation gcr on g.id=gcr.groupId and gcr.contactId="+contactId)
                .setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP).list();
        List<String> nameList = new ArrayList<String>();
        for(Map m:names){

            nameList.add((String)m.get("GROUPNAME"));
        }
        return nameList;
    }
}
