// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
//     document.body.classList.add('dark');
//   }
// });

const card = document.getElementById("card");
card.addEventListener("click", function () {
  card.classList.toggle("cardflip");
});

