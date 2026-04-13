package com.sanket.portfolio.service;

import com.sanket.portfolio.dto.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String toEmail;

    public void sendEmail(ContactRequest request) throws MessagingException {
        log.info("Preparing to send email from: {}", request.getEmail());
        
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        String content = String.format(
            "<h3>New Contact Form Submission</h3>" +
            "<p><b>Name:</b> %s</p>" +
            "<p><b>Email:</b> %s</p>" +
            "<p><b>Subject:</b> %s</p>" +
            "<hr/>" +
            "<p><b>Message:</b></p>" +
            "<p>%s</p>",
            request.getName(), 
            request.getEmail(), 
            request.getSubject(),
            request.getMessage().replace("\n", "<br/>")
        );

        helper.setText(content, true);
        helper.setTo(toEmail);
        helper.setSubject("Portfolio Contact: " + request.getSubject());
        helper.setFrom(toEmail); // Gmail SMTP requires 'from' to be the authenticated email
        helper.setReplyTo(request.getEmail()); // Allows direct reply to the sender

        mailSender.send(mimeMessage);
        log.info("Email successfully sent to {}", toEmail);
    }
}
