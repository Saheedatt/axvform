const popup = document.querySelector("#thankYouPopup");
const errorPopup = document.querySelector("#errorPopup");
const closeErrorPopupButton = document.querySelector("#closeErrorPopup");
popup.style.display = "none";

document.querySelector("#businessForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const submitButton = document.querySelector("#submitButton");
  const buttonText = document.querySelector("#buttonText");
  const loadingSpinner = document.querySelector("#loadingSpinner");
  submitButton.disabled = true;
  buttonText.style.display = "none";
  loadingSpinner.style.display = "inline";

  await submitForm();

  submitButton.disabled = false;
  buttonText.style.display = "inline";
  loadingSpinner.style.display = "none";
});

closeErrorPopupButton.addEventListener("click", function () {
  errorPopup.style.display = "none";
});

document.querySelector("#closePopup").addEventListener("click", function () {
  popup.style.display = "none";
});

async function submitForm() {
  const formData = {
    applicantName: document.querySelector("#applicantName").value,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    company: document.querySelector("#company").value,
    workEmail: document.querySelector("#workEmail").value,
    companySize: document.querySelector("#companySize").value,
    fundingStage: document.querySelector("#fundingStage").value,
    applicantEmail: document.querySelector("#applicantEmail").value,
  };

  console.log("formData:", JSON.stringify(formData, null, 2));
  // Send form data to the server using fetch API
  const url = "https://eodh6njvzgfl22j.m.pipedream.net";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      popup.style.display = "block";
    } else {
      console.log("Error response status:", response.status);
      errorPopup.style.display = "block";
    }
  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
    errorPopup.style.display = "block";
  }
}  