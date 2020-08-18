package com.example.team.exampleproject3.controller;

/**
 * DTO for REST messages.
 * 
 * @author Virtus
 *
 */
public class RestMessageDTO {

	/**
	 * Message.
	 */
    private String message;

    /**
     * Constructor.
     *
     * @param message
     * 		Message Code.
     */
    public RestMessageDTO(String message) {
        this.message = message;
    }

    /**
     * Gets the message.
     * 
     * @return Message.
     */
	public String getMessage() {
		return message;
	}

	/**
	 * Sets the message.
	 * 
	 * @param message
	 * 		Message.
	 */
	public void setMessage(String message) {
		this.message = message;
	}

}
