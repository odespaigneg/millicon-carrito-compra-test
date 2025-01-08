package com.example.carrito.controllers;

import com.example.carrito.dto.LoginRequest;
import com.example.carrito.models.User;
import com.example.carrito.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // Validaciones y registro de usuario
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.authenticate(loginRequest));
    }

    @PostMapping("/password-recovery")
    public ResponseEntity<?> recoverPassword(@RequestParam String email) {
        return ResponseEntity.ok(authService.recoverPassword(email));
    }
}


