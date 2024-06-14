function handletextarea() {
  function textareaAutoHeight(el, offsetTop = 0) {
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + offsetTop}px`;
  }

  (function () {
    const textareas = ["#hs-tac-message"];

    textareas.forEach((el) => {
      const textarea = document.querySelector(el);
      const overlay = textarea.closest(".hs-overlay");

      if (overlay) {
        const { element } = HSOverlay.getInstance(overlay, true);

        element.on("open", () => textareaAutoHeight(textarea, 3));
      } else textareaAutoHeight(textarea, 3);

      textarea.addEventListener("input", () => {
        textareaAutoHeight(textarea, 3);
      });
    });
  })();
}

document
  .getElementById("mail-subscribe")
  .addEventListener("click", function (event) {
    const useremail = document.getElementById("useremail");
    if (useremail.value)
      alert(
        `Subscribed Newsletter to ${useremail.value}. You will receive updates regarding laser technologies`
      );
    else {
      alert(`Enter valid Email id to subscribe newsletter`);
    }
  });

  document.getElementById("contact-form")
  .addEventListener("click", function (event) {
    alert("Form has been submitted");
    event.preventDefault();

    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });

    var name = document.getElementById("name");
    var organization = document.getElementById("organization");
    var contact = document.getElementById("contact");
    var email = document.getElementById("email");
    var remark = document.getElementById("remark");
    var notRobot = document.getElementById("not-robot");
    var isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
      isValid = false;
      document.getElementById("name-error").textContent =
        "Please enter your name.";
      name.classList.add("error");
    } else {
      name.classList.remove("error");
    }

    // Validate Organization
    if (organization.value.trim() === "") {
      isValid = false;
      document.getElementById("organization-error").textContent =
        "Please enter your organization name.";
      organization.classList.add("error");
    } else {
      organization.classList.remove("error");
    }

    // Validate Contact Number
    var contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact.value.trim())) {
      isValid = false;
      document.getElementById("contact-error").textContent =
        "Please enter a valid 10-digit contact number.";
      contact.classList.add("error");
    } else {
      contact.classList.remove("error");
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      document.getElementById("email-error").textContent =
        "Please enter a valid email address.";
      email.classList.add("error");
    } else {
      email.classList.remove("error");
    }

    // Validate Remark
    if (remark.value.trim() === "") {
      isValid = false;
      document.getElementById("remark-error").textContent =
        "Please enter a remark.";
      remark.classList.add("error");
    } else {
      remark.classList.remove("error");
    }

    // Validate Robot Checkbox
    if (!notRobot.checked) {
      isValid = false;
      document.getElementById("robot-error").textContent =
        "Please confirm you are not a robot.";
    } else {
      document.getElementById("robot-error").textContent = "";
    }

    if (isValid) {
      var successMessage = document.getElementById("success-message");
      successMessage.textContent = "Form submitted successfully!";

      document.getElementById("contact-form").reset();

      setTimeout(function () {
        successMessage.textContent = "";
      }, 5000);
    }
  });
