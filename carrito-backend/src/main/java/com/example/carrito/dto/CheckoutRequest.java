package com.example.carrito.dto;

import com.example.carrito.models.CartItem;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class CheckoutRequest {

    // Getters y setters
    private Long userId;
    private List<CartItem> cartItems;
    private double totalAmount;
    private String shippingAddress;

}

