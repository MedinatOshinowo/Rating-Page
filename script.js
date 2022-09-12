const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputs = document.getElementsByName("rating");
  const ratingMessage = document.getElementById("rating-message");
  const result = document.querySelector(".result-container");
  const question = document.querySelector(".question-container");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      ratingMessage.innerHTML = `You selected ${inputs[i].value} out of 5`;
      result.style.display = "block";
      question.style.display = "none";
    }
  }
});
