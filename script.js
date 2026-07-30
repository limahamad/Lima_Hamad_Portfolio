const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector(".site-nav");
menuButton.addEventListener("click",()=>{
  const open=navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".site-nav a").forEach(link=>{
  link.addEventListener("click",()=>{
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
  });
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
