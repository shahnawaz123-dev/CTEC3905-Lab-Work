console.log("testing")
menuToggler.addEventListener('click', ev => {
  Menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "X" ? "≡" : "X";
});
