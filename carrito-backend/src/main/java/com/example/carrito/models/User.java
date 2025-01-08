package com.example.carrito.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Setter
    private String firstName;
    @Setter
    private String lastName;
    @Setter
    private String address;
    @Setter
    private String email;
    @Setter
    private LocalDate birthDate;
    @Setter
    private String password;

}

