const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

let toggle = false;
btn.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    modal.style.display = "block";
    setTimeout(()=> {
        
        modal.style.opacity = 1;
    }, 10);
  } else {
    modal.style.display = "none";

    setTimeout(()=> {
        
        modal.style.opacity = 0;
    }, 10);
  }
});
