package com.example.team.exampleProject1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@RequestMapping("message")
	public String getMessage() {
		return "Example project 1";
	}
}
