// Dynamic course year
const now = new Date();
const year = now.getFullYear();
let course = year - 2022;
if(course < 1) course = 1;
if(course > 4) course = 'закончил';
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('course-year').textContent = course;
});

// Reveal
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('active') });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Mobile menu
const mobileBtn = document.getElementById('mobileBtn');
const mobileNav = document.getElementById('mobileNav');

mobileBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});
