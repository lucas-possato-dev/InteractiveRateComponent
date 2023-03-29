const howDid = document.querySelector(".howDidWeDo");
const thankYou = document.querySelector(".thankYou");
const rate = document.querySelectorAll(".rate button");
const btn = document.querySelector(".btn");
const ids = document.querySelectorAll(".rateNumber");
const spanContainer = document.querySelector(".spanContainer span")


// Submit 


function handleSend() {
  const selectedButton = document.querySelector(".rate button.selected")
  if(selectedButton) {
    howDid.classList.add("change");
    thankYou.classList.add("change");
    }
  else {
    rate.forEach((button) => {
      button.classList.add("error");
    })
  }
  }
  

btn.addEventListener("click", handleSend);


// Selecionando buttons

function rateSelect(event) {
  rate.forEach((button) => {
    button.classList.remove("selected");
    button.classList.remove("error");
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




