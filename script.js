
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name
    const namePattern = /^[A-Za-z\s]{3,}$/;
    if (name === "") {
      alert("Name cannot be empty.");
      return;
    } else if (!namePattern.test(name)) {
      alert("Please enter a valid name (only letters, min 3 characters).");
      return;
    }

    // Email
    if (email === "") {
      alert("Email cannot be empty.");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Message
    if (message === "") {
      alert("Message cannot be empty.");
      return;
    } else if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      return;
    }

    alert("Message sent successfully!");
    e.target.reset(); // Clear the form
  });

