document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    fetch("contact-form.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("form-status").textContent = data;
      form.reset();
    })
    .catch(error => {
      document.getElementById("form-status").textContent = "Error sending message.";
      console.error("Error:", error);
    });
  });