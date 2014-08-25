package com.example.sampleaddressbook.dao;

import java.util.List;

public interface DaoInterface<T> {

    public T save(T t);

    public T get(Integer id);

    public void delete(int id);

    public List<T> list();

    public T update(T t);

}
