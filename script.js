
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name: not empty and only letters & spaces (min 3 chars)
    const namePattern = /^[A-Za-z\s]{3,}$/;
    if (name === "") {
      alert("Name cannot be empty.");
      return;
    } else if (!namePattern.test(name)) {
      alert("Please enter a valid name (only letters, min 3 characters).");
      return;
    }

    // Email: not empty and contains basic format
    if (email === "") {
      alert("Email cannot be empty.");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Message: not empty and at least 10 characters
    if (message === "") {
      alert("Message cannot be empty.");
      return;
    } else if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      return;
    }

    // All validations passed
    alert("Message sent successfully!");
    e.target.reset(); // Clear the form
  });

