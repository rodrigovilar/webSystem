package com.example.team.exampleProject1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@RequestMapping("message")
	@ResponseBody
	public MessageDTO getMessage() {
		MessageDTO messageDTO = new MessageDTO();
		messageDTO.setMessage("Example project 1");
		return messageDTO;
	}
}
