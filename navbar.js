// Function to highlight the active page in the navbar
window.onload = () => {
    const links = document.querySelectorAll('.nav-link');
    const current = location.pathname.split('/').pop();
  
    links.forEach(link => {
      if(link.getAttribute('href') === current){
        link.classList.add('active');
      }
    });
  };