function displayDom() {
  if (document.getElementById("btn-1").onclick) {
    document.getElementById("rating-DOM").innerHTML = "You selected 1 out of 5";
  } else if (document.getElementById("btn-2").onclick) {
    document.getElementById("rating-DOM").innerHTML = "You selected 2 out of 5";
  } else if (document.getElementById("btn-3").onclick) {
    document.getElementById("rating-DOM").innerHTML = "You selected 3 out of 5";
  } else if (document.getElementById("btn-4").onclick) {
    document.getElementById("rating-DOM").innerHTML = "You selected 4 out of 5";
  } else document.getElementById("btn-5").onclick;
  {
    document.getElementById("rating-DOM").innerHTML = "You selected 5 out of 5";
  }
}
