const col1 = document.getElementById("color1");
const col2 = document.getElementById("color2");
const display = document.querySelector(".display");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const value1 = col1.value;
  const value2 = col2.value;
  display.style.background = `linear-gradient(to right, ${value1}, ${value2})`;
});

function downloadImage() {
  const element = document.getElementById("display");

  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "gradient.jpeg"; 
    link.href = canvas.toDataURL("image/jpeg"); 
    link.click();
  });
}