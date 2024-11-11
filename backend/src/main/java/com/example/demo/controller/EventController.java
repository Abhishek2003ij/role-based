package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
public class EventController {

    @PostMapping("/create")
    public String createEvent() {
        return "Event created successfully!";
    }
}
