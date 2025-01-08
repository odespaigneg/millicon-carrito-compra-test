package com.example.carrito.services;

import com.example.carrito.dto.LoginRequest;
import com.example.carrito.models.User;
import com.example.carrito.repositories.UserRepository;
import com.example.carrito.security.JwtTokenUtil;
import com.example.carrito.utils.BadRequestException;
import com.example.carrito.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public String register(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new BadRequestException("El email ya está registrado");
        }

        if (Period.between(user.getBirthDate(), LocalDate.now()).getYears() < 18) {
            throw new BadRequestException("Debe ser mayor de 18 años para registrarse");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Usuario registrado exitosamente";
    }

    public String authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Credenciales incorrectas");
        }

        return jwtTokenUtil.generateToken(user);
    }
}


