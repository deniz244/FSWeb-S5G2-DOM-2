import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

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

//wheel
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("nav");
el.onwheel = zoom;

//load
window.addEventListener("load", (event) => {
  alert("Tüm kaynaklar yüklendi!!");
});

//focus
const navAnchorNodeList = document.querySelectorAll("nav a");

navAnchorNodeList.forEach((anchorEl) => {
  anchorEl.addEventListener("focus", (event) => {
    event.target.style.color = "red";
    event.target.style.fontSize = "2rem";
  });

  anchorEl.addEventListener("blur", (event) => {
    event.target.style.color = "tomato";
    event.target.style.fontSize = "1rem";
  });
});

//resize
window.addEventListener("resize", (e) => {
  console.log("Sayfa yeniden boyutlandırıldı");
  console.log(e.target.innerWidth, "x", e.target.innerHeight);
});

//scroll
window.addEventListener("scroll", (event) => {
  console.log("Kaydırıldı");
  console.log(window.scrollX, "x", window.scrollY);
});

const allDivs = document.querySelectorAll("div");
allDivs.forEach((divEl) => {
  divEl.addEventListener("click", (event) => {
    console.log("Div'e tıklandı");
    console.log(event.target.getBoundingClientRect().y);
    event.stopPropagation();
  });
});

//dblclick
const allPs = document.querySelectorAll("p");
allPs.forEach((pEl) => {
  pEl.addEventListener("dblclick", (event) => {
    console.log(event.target, "Çift tıklandı");
  });
});

//select
allPs.forEach((pEl) => {
  pEl.addEventListener("select", (event) => {
    console.log(event.target, "Çift tıklandı");
  });
});
