// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      // Toggle the mobile menu
      if (navLinks.style.display === "flex" || navLinks.style.display === "") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.right = "0";
        navLinks.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
        navLinks.style.padding = "1rem";
        navLinks.style.backdropFilter = "blur(10px)";
        navLinks.style.borderBottom = "1px solid rgba(99, 102, 241, 0.2)";
      }
    });
  }

  // Handle window resize for mobile menu
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navLinks) {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "";
      navLinks.style.position = "";
      navLinks.style.top = "";
      navLinks.style.left = "";
      navLinks.style.right = "";
      navLinks.style.backgroundColor = "";
      navLinks.style.padding = "";
      navLinks.style.backdropFilter = "";
      navLinks.style.borderBottom = "";
    }
  });

  // Smooth scrolling for navigation links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      if (window.innerWidth <= 768 && navLinks) {
        navLinks.style.display = "none";
      }

      const targetId = this.getAttribute("href");

      // Handle case when href is just "#"
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Scroll to the target element with smooth behavior
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for nav bar height
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form functionality with Formspree integration
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // Don't prevent default form submission - let Formspree handle it
      // e.preventDefault(); // <-- This line should be removed or commented out

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation
      if (!name || !email || !message) {
        e.preventDefault(); // Prevent submission if validation fails
        showNotification("Please fill out all fields", "error");
        return;
      }

      if (!isValidEmail(email)) {
        e.preventDefault(); // Prevent submission if validation fails
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Update button state during submission
      const submitBtn = contactForm.querySelector(".btn-submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // We'll let the form submit naturally to Formspree
      // Formspree will handle the redirect back to your page

      // Show a notification (this will only show briefly before redirect)
      showNotification("Sending your message...", "success");

      // Note: Since the page will redirect, we don't need to reset the button state
    });
  }

  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to show notification
  function showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.padding = "12px 20px";
    notification.style.borderRadius = "4px";
    notification.style.zIndex = "1000";
    notification.style.opacity = "0";
    notification.style.transform = "translateY(20px)";
    notification.style.transition = "opacity 0.3s, transform 0.3s";

    // Set color based on type
    if (type === "success") {
      notification.style.backgroundColor = "rgba(16, 185, 129, 0.9)";
      notification.style.color = "white";
    } else if (type === "error") {
      notification.style.backgroundColor = "rgba(239, 68, 68, 0.9)";
      notification.style.color = "white";
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Remove after 4 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(20px)";

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 4000);
  }

  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to show notification
  function showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.padding = "12px 20px";
    notification.style.borderRadius = "4px";
    notification.style.zIndex = "1000";
    notification.style.opacity = "0";
    notification.style.transform = "translateY(20px)";
    notification.style.transition = "opacity 0.3s, transform 0.3s";

    // Set color based on type
    if (type === "success") {
      notification.style.backgroundColor = "rgba(16, 185, 129, 0.9)";
      notification.style.color = "white";
    } else if (type === "error") {
      notification.style.backgroundColor = "rgba(239, 68, 68, 0.9)";
      notification.style.color = "white";
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Remove after 4 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(20px)";

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 4000);
  }

  // Add scroll-based animations
  const animateOnScroll = function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("visible");
      }
    });

    // Animate skill items separately
    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < window.innerHeight * 0.85) {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 50); // Staggered animation
      }
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < window.innerHeight * 0.85) {
        item.classList.add("visible");
      }
    });
  };

  // Add initial styles for animations
  const setupAnimations = function () {
    // Add CSS for section animations
    const style = document.createElement("style");
    style.textContent = `
      section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      section.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .skill-item {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s ease, transform 0.4s ease;
      }
      .timeline-item {
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .timeline-item.right {
        transform: translateX(-20px);
      }
      .timeline-item.visible {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);

    // Trigger animations on scroll
    window.addEventListener("scroll", animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
  };

  // Run animation setup
  setupAnimations();

  // Add typing effect to hero text
  const heroText = document.querySelector(".hero-text h2");
  if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = "";

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
  }

  // Add parallax effect on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;

    // Parallax effect for header
    const header = document.querySelector("header");
    if (header) {
      header.style.backgroundPosition = `center ${scrollPosition * 0.1}px`;
    }
  });
});
