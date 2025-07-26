
// Select the button that advances from step 1 to step 2
const submit1= document.querySelector(".submit1");

// Select the step 2 container div
const step2= document.getElementById("step2");

// Select the step 1 container div
const step1= document.getElementById("step1");

// Add click event listener to the step 1 singup button
submit1.addEventListener("click", () => {

     const inputs = step1.querySelectorAll("input");

  let allValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      allValid = false;
      input.reportValidity();
    }
  });

  if(allValid){
    step1.style.display="none"; 
    step2.style.display="flex";
    step2.style.flexDirection="column";
  }
});
