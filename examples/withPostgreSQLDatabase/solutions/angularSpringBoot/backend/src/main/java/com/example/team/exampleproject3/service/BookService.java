package com.example.team.exampleproject3.service;

import javax.validation.Valid;

import com.example.team.exampleproject3.model.Book;
import com.example.team.exampleproject3.repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

	@Autowired
	private BookRepository repository;	

	public Iterable<Book> search() {
		return repository.findAll();
	}

	public Book getOne(Integer id) {
		return repository.findById(id).get();
	}

	public Book insert(Book book) {
		return repository.save(book);
	}

	public void update(@Valid Integer id, Book book) {
		repository.save(book);
	}

	public void delete(Integer id) {
		repository.deleteById(id);
	}

}
