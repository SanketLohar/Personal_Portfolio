package com.sanket.portfolio.controller;

import com.sanket.portfolio.dto.ApiResponse;
import com.sanket.portfolio.dto.ContactRequest;
import com.sanket.portfolio.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<ApiResponse> handleContactForm(@Valid @RequestBody ContactRequest request) throws MessagingException {
        log.info("Received contact form submission from: {}", request.getEmail());
        
        // Manual sanitization step before processing
        request.sanitize();
        
        emailService.sendEmail(request);
        
        return ResponseEntity.ok(new ApiResponse(true, "Thank you! Your message has been sent successfully."));
    }
}
