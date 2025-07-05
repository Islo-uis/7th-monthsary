onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// script.js
onload = () => {
  // trigger bloom
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  // reveal & start scroll‐animation
  setTimeout(() => {
    document.querySelector(".picture-placeholder").classList.add("show");
  }, 6000);
};
