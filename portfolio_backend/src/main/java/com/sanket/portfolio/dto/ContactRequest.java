package com.sanket.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Subject is required")
    @Size(max = 100, message = "Subject too long")
    private String subject;

    @NotBlank(message = "Message is required")
    @Size(min = 10, max = 2000, message = "Message must be between 10 and 2000 characters")
    private String message;

    public void sanitize() {
        if (this.name != null) this.name = this.name.trim();
        if (this.email != null) this.email = this.email.trim();
        if (this.subject != null) this.subject = this.subject.trim();
        if (this.message != null) this.message = this.message.trim();
    }
}
