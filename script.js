const howDid = document.querySelector(".howDidWeDo");
const thankYou = document.querySelector(".thankYou");
const rate = document.querySelectorAll(".rate button");
const btn = document.querySelector(".btn");
const ids = document.querySelectorAll(".rateNumber");
const spanContainer = document.querySelector(".spanContainer span")
console.log(ids)


// Submit 


function handleSend() {
  howDid.classList.add("change");
  thankYou.classList.add("change");
}

btn.addEventListener("click", handleSend);


// Selecionando buttons

function rateSelect(event, index) {
  rate.forEach((button) => {
    button.classList.remove("selected");
  });  
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle("selected");
  if(handleSend) {
    spanContainer.innerText = `You selected ${selectedButton.innerText} out of 5`
  }
}


rate.forEach((button) => {
  button.addEventListener("click", rateSelect )
})



// Escolhando o rate




