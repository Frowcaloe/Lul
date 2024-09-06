const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Kainin!",
    "Mo",
    "Titi",
    "Ko",
    "I love you",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
