const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const errorText = document.getElementById("error");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const resetButton = document.getElementById("reset");


function getCategory(bmi) {
  if (bmi < 18.5) return { name: "Underweight", css: "underweight" };
  if (bmi < 25) return { name: "Normal", css: "normal" };
  if (bmi < 30) return { name: "Overweight", css: "overweight" };
  return { name: "Obese", css: "obese" };
}


form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading


  const weight = Number(weightInput.value);
  const heightCm = Number(heightInput.value);

 
  if (weightInput.value === "" || heightInput.value === "") {
    showError("Please fill in both weight and height.");
    return;
  }
  if (weight <= 0 || heightCm <= 0) {
    showError("Weight and height must be greater than zero.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);


  const category = getCategory(bmi);
  errorText.textContent = "";
  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category.name;


  resultBox.className = "result " + category.css;
  resultBox.hidden = false;
});

function showError(message) {
  errorText.textContent = message;
  resultBox.hidden = true;
}

resetButton.addEventListener("click", function () {
  weightInput.value = "";        
  heightInput.value = "";        
  errorText.textContent = "";    
  bmiValue.textContent = "";     
  bmiCategory.textContent = "";
  resultBox.className = "result";
  resultBox.hidden = true;       
  weightInput.focus();           
});