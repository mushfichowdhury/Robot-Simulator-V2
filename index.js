document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const movesContainer = document.getElementById('moves-container')
  document.addEventListener("keydown", function(e) {
    console.log(e.code)
    const newDirection = document.createElement("li")
    if (e.code === "ArrowUp") {
      newDirection.innerText = "up" 
    }
    else if (e.code === "ArrowRight") {
      newDirection.innerText = "right" 
    }
    else if (e.code === "ArrowDown") {
      newDirection.innerText = "down" 
    }
    else if (e.code === "ArrowLeft") {
      newDirection.innerText = "left" 
    }
    else {
      return
    }
      movesContainer.append(newDirection)
  })
})