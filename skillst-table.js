
function listProgramming() {
  if (
    document.getElementById("btn-programming").classList.contains("btn-active")
  ) {
    document.getElementById("list-programming").style.display = "none";
  } else {
    document.getElementById("list-programming").style.display = "flex";
  }
  document.getElementById("btn-programming").classList.toggle("btn-active");
}

function listFrontend() {
  if (
    document.getElementById("btn-frontend").classList.contains("btn-active")
  ) {
    document.getElementById("list-frontend").style.display = "none";
  } else {
    document.getElementById("list-frontend").style.display = "flex";
  }
  document.getElementById("btn-frontend").classList.toggle("btn-active");
}