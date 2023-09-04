const curso = document.querySelector(".cursor");
var timeout;

// cursor movement
document.addEventListener("mousemove", (e) =>{
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + 'px'
});
