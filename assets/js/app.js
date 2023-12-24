const app = () => {
  const openNavTrigger = document.querySelector(".image");
  const closeNavTrigger = document.querySelector(".closeBtn");
  const nav = document.querySelector(".mobileNav");

  openNavTrigger.addEventListener("click", () => {
    nav.style.display = "block";
  });
  closeNavTrigger.addEventListener("click", () => {
    nav.style.display = "none";
  });
};

app();
