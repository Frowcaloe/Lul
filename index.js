const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Ceejay",
    "Hendrix",
    "Joey",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.()*messages.length )]
})
