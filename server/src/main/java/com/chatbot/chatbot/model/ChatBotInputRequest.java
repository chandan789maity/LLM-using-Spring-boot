package com.chatbot.chatbot.model;

public class ChatBotInputRequest {

    private String messages;

    public String getMessages() {
        return messages;
    }

    public void setMessages(String messages) {
        this.messages = messages;
    }

    public ChatBotInputRequest(String messages) {
        super();
        this.messages = messages;
    }

    @Override
    public String toString() {
        return "ChatBotInputRequest [messages=" + messages + "]";
    }

    public ChatBotInputRequest() {
        super();
        // TODO Auto-generated constructor stub
    }


}

