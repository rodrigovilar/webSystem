package com.example.team.exampleproject2.repository;

import com.example.team.exampleproject2.model.Book;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
}