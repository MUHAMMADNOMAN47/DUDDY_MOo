function copyCA(){
  const text=document.getElementById("ca").innerText;
  navigator.clipboard.writeText(text);
  alert("Contract address copied");
}
