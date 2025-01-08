package com.example.carrito.services;

import com.example.carrito.dto.CheckoutRequest;
import com.example.carrito.models.CartItem;
import com.example.carrito.models.Order;
import com.example.carrito.repositories.CartRepository;
import com.example.carrito.repositories.OrderRepository;
import com.example.carrito.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    public List<CartItem> getCartItems(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void addItemToCart(CartItem cartItem) {
        cartRepository.save(cartItem);
    }

    public void removeItemFromCart(Long itemId) {
        cartRepository.deleteById(itemId);
    }

    public Order checkout(CheckoutRequest checkoutRequest) {
        Order order = new Order();
        order.setUserId(checkoutRequest.getUserId());
        order.setItems(checkoutRequest.getCartItems());
        order.setTotalAmount(checkoutRequest.getTotalAmount());
        return orderRepository.save(order);
    }
}


