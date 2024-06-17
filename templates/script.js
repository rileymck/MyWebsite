document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('colorToggle');
    const box = document.querySelector('.box');
    const text = document.querySelector('.text');
    const navbar = document.querySelector('.navbar');
    const bbox = document.querySelector('.box');
    const tline = document.querySelector('.tline')
    const bline = document.querySelector('.bline')
    const navLinks = document.querySelectorAll('.nav-menu li a'); // Select navbar links
  
    if (toggle && box && text && navbar && navLinks && box && tline && bline) {
      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          document.body.style.backgroundColor = 'white';
          box.style.backgroundColor = 'white';
          text.style.color = '#000'; // black
          navbar.style.backgroundColor = 'white';
          bbox.style.backgroundColor = '#a6a6a6';
          
          tline.style.borderBottom = '3px solid black';
          bline.style.borderBottom = '3px solid black';
          
          navLinks.forEach(link => {
            link.style.color = '#000'; // black
          });
        } else {
          document.body.style.backgroundColor = '#173252';
          box.style.backgroundColor = '#0e1f35';
          text.style.color = '#fff'; // white
          navbar.style.backgroundColor = '#173252';
          bbox.style.backgroundColor = '#0e1f35';
          
          tline.style.borderBottom = '3px solid white';
          bline.style.borderBottom = '3px solid white';
          
          navLinks.forEach(link => {
            link.style.color = '#fff'; // white
          });
        }
      });
    }
  });