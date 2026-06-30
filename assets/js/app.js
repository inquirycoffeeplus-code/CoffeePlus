document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // FORM + EMAILJS
  const form = document.getElementById("coffeeForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_8dc9xbj", "template_yi70fvq", {
      business_name: form.business_name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    }, "ZM5N3iw1h274gLur0")

    .then(() => {
      alert("Thank you! CoffeePlus will contact you shortly.");
      form.reset();
    })

    .catch((error) => {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
  });

});

function recommendPlan() {

  const employees = document.getElementById("employees").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!employees || !type) {
    result.innerText = "Please select both options.";
    return;
  }

  if (employees === "1–25") {
    result.innerText = "Recommended: Small Office Coffee Plan (Keurig System)";
  }
  else if (employees === "25–75") {
    result.innerText = "Recommended: Business Coffee Plan (Bean-to-Cup System)";
  }
  else {
    result.innerText = "Recommended: Enterprise Coffee Solution (BUNN / Necta Systems)";
  }
}