package com.chatbot.chatbot.model;

public class Message {

    public String role;
    public String content;
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Message(String role, String content) {
        super();
        this.role = role;
        this.content = content;
    }

}
