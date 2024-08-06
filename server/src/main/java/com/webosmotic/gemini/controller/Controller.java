/*package com.webosmotic.gemini.controller;


import com.webosmotic.gemini.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    AIService aiService;

    @PostMapping("/chat")
    public String chat(@RequestBody String prompt) {
        return this.aiService.chat(prompt);
    }

}
*/
package com.webosmotic.gemini.controller;

import com.webosmotic.gemini.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    AIService aiService;

    @PostMapping("/chat")
    public ResponseEntity<String> chat(@RequestBody String prompt) {
        try {
            String response = aiService.chat(prompt);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("An error occurred while processing the request.");
        }
    }
}
