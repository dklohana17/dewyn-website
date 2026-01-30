// Contact form: submit to Formspree without leaving the page
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");
const errorMsg = document.getElementById("formError");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide messages each time
    if (successMsg) successMsg.style.display = "none";
    if (errorMsg) errorMsg.style.display = "none";

    const action = form.getAttribute("action");
    const formData = new FormData(form);

    try {
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (res.ok) {
        form.reset();
        if (successMsg) successMsg.style.display = "block";
      } else {
        if (errorMsg) errorMsg.style.display = "block";
      }
    } catch (err) {
      if (errorMsg) errorMsg.style.display = "block";
    }
  });
}
