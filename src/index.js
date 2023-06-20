import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

//mouseover
const renkli = document.getElementsByClassName("nav-link");

for (let i = 0; i < renkli.length; i++) {
  renkli[i].addEventListener(
    "mouseenter",
    (evnt) => {
      evnt.target.style.color = "orange";

      setTimeout(() => {
        evnt.target.style.color = "";
      }, 600);
    },
    false
  );
}

//dbclick
const size = document.querySelector(".intro header img");
size.addEventListener("dbclick", (e) => {
  size.style.transform = scale(1.3);
});
