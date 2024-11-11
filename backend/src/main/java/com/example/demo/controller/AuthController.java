package com.example.demo.controller;

import java.util.Date;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final PasswordEncoder passwordEncoder;

    public AuthController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Basic login logic, ideally should check DB for user authentication.
        if (loginRequest.getUsername().equals("admin") && loginRequest.getPassword().equals("admin")) {
            return Jwts.builder()
                    .setSubject("admin")
                    .claim("role", "ROLE_ADMIN")
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                    .signWith(SignatureAlgorithm.HS256, "secret")
                    .compact();
        }
        return "Invalid credentials";
    }
}
