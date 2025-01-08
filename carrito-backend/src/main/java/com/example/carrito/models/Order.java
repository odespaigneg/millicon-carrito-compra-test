package com.example.carrito.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Entity
public class Order {

    // Getters y setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Setter
    private Long userId;
    @Setter
    private double totalAmount;

    @Setter
    @OneToMany
    private List<CartItem> items;

}

