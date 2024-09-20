const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Ceejay",
    "Hendrix",
    "Fil major",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
