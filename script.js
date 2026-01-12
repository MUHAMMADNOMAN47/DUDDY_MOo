function copyCA(){
  const ca=document.getElementById("ca").innerText.trim();
  navigator.clipboard.writeText(ca);
  alert("Contract address copied");
}
