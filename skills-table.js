// List untuk Programming
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

// List untuk Frontend
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

// List untuk Backend
function listBackend() {
  if (document.getElementById("btn-backend").classList.contains("btn-active")) {
    document.getElementById("list-backend").style.display = "none";
  } else {
    document.getElementById("list-backend").style.display = "flex";
  }
  document.getElementById("btn-backend").classList.toggle("btn-active");
}

// List untuk OS
function listOs() {
  if (document.getElementById("btn-os").classList.contains("btn-active")) {
    document.getElementById("list-OS").style.display = "none";
  } else {
    document.getElementById("list-OS").style.display = "flex";
  }
  document.getElementById("btn-os").classList.toggle("btn-active");
}

// List untuk Language
function listLanguage() {
  if (
    document.getElementById("btn-language").classList.contains("btn-active")
  ) {
    document.getElementById("list-language").style.display = "none";
  } else {
    document.getElementById("list-language").style.display = "flex";
  }
  document.getElementById("btn-language").classList.toggle("btn-active");
}
