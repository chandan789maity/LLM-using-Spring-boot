package com.chatbot.chatbot.controller;

import com.chatbot.chatbot.model.ChatBotInputRequest;
import com.chatbot.chatbot.model.ChatGPTResponse;
import com.chatbot.chatbot.service.ChatGPTService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ChatGPTController {

    private ChatGPTService chatGPTService;

    public ChatGPTController(ChatGPTService chatGPTService) {
        this.chatGPTService = chatGPTService;
    }

    @PostMapping("/chat")
    public ResponseEntity<String> processInputRequest(@RequestBody ChatBotInputRequest chatbotInputRequest) {
        // ChatGPTResponse chatCPTResponse = chatGPTService.getChatCPTResponse(chatbotInputRequest.getMessages());
        // return new ResponseEntity<>(chatCPTResponse, HttpStatus.OK);
        return new ResponseEntity<>("Hello World", HttpStatus.OK);
    }
}

