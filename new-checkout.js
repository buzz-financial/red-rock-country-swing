// // This function will handle section visibility
// function goToSection(sectionId) {
//   const allSections = document.querySelectorAll("section");
//   allSections.forEach((section) => section.classList.add("hidden"));

//   const target = document.getElementById(sectionId);
//   if (target) {
//       target.classList.remove("hidden");
//   }

//   if (sectionId === "section-payment") {
//       updatePaymentSummary();
// } // <-- Missing closing brace here
// }

// // Add functionality to show checkout button only when form is complete
// document.getElementById("section-info").addEventListener("input", () => {
//   const fields = ["firstName", "lastName", "phone", "email"];
//   const allFilled = fields.every((id) => document.getElementById(id)?.value.trim() !== "");
  
//   // Show checkout button only when form is complete
//   if (allFilled) {
//       document.getElementById("checkout-button")?.classList.remove("hidden");
//   }
// });

// // Go back to the first section
// function showFullForm() {
//   document.getElementById("section-payment").classList.add("hidden");
//   document.getElementById("section-info").classList.remove("hidden");

//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// // Update the payment summary when going to payment section
// function updatePaymentSummary() {
//   const program = document.getElementById("program");
//   const programText = program?.options[program.selectedIndex]?.text || "-";
//   document.getElementById("summary-program").textContent = programText;

//   const daysSelected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((cb) => cb.value);
//   document.getElementById("summary-days").textContent = daysSelected.join(", ") || "-";

//   let totalPrice = "-";
//   const priceInfo = "1 day: $129 | 2 days: $199 | 3 days: $289 | 4 days: $389"; // Example price info
//   if (priceInfo) {
//       const matches = priceInfo.match(/\$\d+/g);
//       if (matches && daysSelected.length > 0) {
//           totalPrice = matches[daysSelected.length - 1];
//       }
//   }
//   document.getElementById("summary-price").textContent = totalPrice;
// }

// // Handle form submission (just a placeholder for now)
// document.getElementById("tennisForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const billingFirstName = document.getElementById("billing-first-name").value.trim();
//   const billingLastName = document.getElementById("billing-last-name").value.trim();
//   const billingAddress = document.getElementById("billing-address").value.trim();
//   const billingCity = document.getElementById("billing-city").value.trim();
//   const billingState = document.getElementById("billing-state").value.trim();
//   const billingPostal = document.getElementById("billing-postal").value.trim();
//   const fullName = document.getElementById("full-name").value.trim();
//   const cardNumber = document.getElementById("card-number").value.trim();
//   const expiryDate = document.getElementById("expiry-date").value.trim();
//   const cvc = document.getElementById("cvc").value.trim();
//   const saveCard = document.getElementById("save-card")?.checked || false;

//   console.log("Billing First Name:", billingFirstName);
//   console.log("Billing Last Name:", billingLastName);
//   console.log("Billing Address:", billingAddress);
//   console.log("Billing City:", billingCity);
//   console.log("Billing State:", billingState);
//   console.log("Billing Postal:", billingPostal);
//   console.log("Name on Card:", fullName);
//   console.log("Card Number:", cardNumber);
// });


// script.js

// Utility to show and hide sections
function goToSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.add("hidden");
  });

  // Show the requested section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("hidden");

    // Update summary if going to payment section
    if (sectionId === "section-payment") {
      updatePaymentSummary();
    }
  }
}

// Show full form (Back button from Payment to Info)
function showFullForm() {
  goToSection("section-info");
}

// Fill in summary details
function updatePaymentSummary() {
  const selectedOption = document.querySelector(
    ".checkbox-input:checked"
  );

  if (!selectedOption) return;

  const value = selectedOption.value;
  const labelText = selectedOption.parentElement.innerText.trim();
  const parentCard = selectedOption.closest(".card");
  const programType = parentCard.querySelector("h3").innerText.trim();

  // Basic logic to extract day/class info from the label
  let days = "-";
  if (value.includes("class")) {
    days = "Dance + Class";
  } else {
    days = "Dance Only";
  }

  // Update the summary values
  document.getElementById("summary-program").textContent = programType;
  document.getElementById("summary-days").textContent = days;

  const priceMatch = labelText.match(/\$[\d.]+/);
  if (priceMatch) {
    document.getElementById("summary-price").textContent = priceMatch[0];
  } else {
    document.getElementById("summary-price").textContent = "-";
  }
}

// Optional: Add simple validation before proceeding
document.getElementById("checkout-button").addEventListener("click", (e) => {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const selectedMembership = document.querySelector(".checkbox-input:checked");

  if (!firstName || !lastName || !phone || !email || !selectedMembership) {
    alert("Please fill in all fields and select a membership option.");
    return;
  }

  goToSection("section-payment");
});
