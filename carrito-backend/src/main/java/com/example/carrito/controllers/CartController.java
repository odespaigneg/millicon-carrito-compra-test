package com.example.carrito.controllers;

import com.example.carrito.dto.CheckoutRequest;
import com.example.carrito.models.CartItem;
import com.example.carrito.models.Order;
import com.example.carrito.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/items")
    public ResponseEntity<List<CartItem>> getCartItems(@RequestParam Long userId) {
        List<CartItem> items = cartService.getCartItems(userId);
        return ResponseEntity.ok(items);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addItemToCart(@RequestBody CartItem cartItem) {
        cartService.addItemToCart(cartItem);
        return ResponseEntity.ok("Item added to cart");
    }

    @PostMapping("/remove")
    public ResponseEntity<String> removeItemFromCart(@RequestParam Long itemId) {
        cartService.removeItemFromCart(itemId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @PostMapping("/checkout")
    public ResponseEntity<Order> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        Order order = cartService.checkout(checkoutRequest);
        return ResponseEntity.ok(order);
    }
}
