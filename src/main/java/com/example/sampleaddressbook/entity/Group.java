package com.example.sampleaddressbook.entity;


import javax.persistence.*;

@Entity
@Table(name = "t_group")
public class Group {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String name;

    public Group(){}

    public Group(String name){
        this.name = name;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
