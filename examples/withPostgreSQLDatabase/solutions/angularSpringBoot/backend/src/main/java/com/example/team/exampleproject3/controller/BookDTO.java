package com.example.team.exampleproject3.controller;

public class BookDTO {

	private int id;
	private String title;
	private String author;

	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "BookDTO [author=" + author + ", id=" + id + ", title=" + title + "]";
	}

}
