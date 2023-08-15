const popup = document.getElementById("thankYouPopup");
popup.style.display = "none";

document.getElementById("businessForm").addEventListener("submit", function(event) {
  event.preventDefault();
  submitForm();
});

async function submitForm() {
  const formData = {
    applicantName: document.getElementById("applicantName").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    company: document.getElementById("company").value,
    workEmail: document.getElementById("workEmail").value,
    companySize: document.getElementById("companySize").value,
    fundingStage: document.getElementById("fundingStage").value,
    applicantEmail: document.getElementById("applicantEmail").value
  };

  popup.style.display = "block";

  document.getElementById("closePopup").addEventListener("click", function() {
    popup.style.display = "none";
  });

  // Send form data to the server using fetch API
  const url = "https://eodh6njvzgfl22j.m.pipedream.net";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.error("Form submission failed:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
  }
}




  