document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("coffeeForm");

  function showToast(message) {
    const toast = document.createElement("div");

    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#6f4e37";
    toast.style.color = "white";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "14px";

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted");

    emailjs.sendForm(
      "service_8dc9xbj",
      "template_yi70fvq",
      this
    )
    .then(() => {
  window.location.href = "thankyou.html";
})
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showToast("❌ Failed to send. Check console.");
    });

  });

});