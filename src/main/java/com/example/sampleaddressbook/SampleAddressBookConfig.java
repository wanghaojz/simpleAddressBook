package com.example.sampleaddressbook;


import com.britesnow.snow.web.binding.EntityClasses;
import com.example.sampleaddressbook.entity.Contact;
import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.metapossum.utils.scanner.reflect.ClassesInPackageScanner;

import java.io.IOException;
import java.util.Set;

public class SampleAddressBookConfig extends AbstractModule {


    @Override
    protected void configure() {

    }

    @Singleton
    @Provides
    @EntityClasses
    public Class[] provideEntityClasses() {
        Set<Class<?>> entitySet;
        try {
            entitySet = new ClassesInPackageScanner().findAnnotatedClasses(Contact.class.getPackage().getName(), javax.persistence.Entity.class);
            Class[] entityClasses = new Class[entitySet.size()];
            entitySet.toArray(entityClasses);
            return entityClasses;
        } catch (IOException e){
            throw new RuntimeException("Cannot get all the enity class: " + e.getMessage());
        }
    }
}
