
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      let valid = true;
      let errorMessages = [];

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const category = document.getElementById("category").value;
      const message = document.getElementById("message").value.trim();

     
      if (name.length < 10) {
        valid = false;
        errorMessages.push("A névnek legalább 10 karakter hosszúnak kell lennie.");
      }

      if (subject.length < 10) {
        valid = false;
        errorMessages.push("A tárgynak legalább 10 karakter hosszúnak kell lennie.");
      }

      if (message.length < 10) {
        valid = false;
        errorMessages.push("Az üzenetnek legalább 10 karakter hosszúnak kell lennie.");
      }


      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        valid = false;
        errorMessages.push("Az email cím nem érvényes.");
      }

      if (category == "") {
        valid = false;
        errorMessages.push("Kérlek válassz kategóriát.");
      }

      if (!valid) {
        event.preventDefault();
        alert(errorMessages.join("\n"));
      }
    });
  });

