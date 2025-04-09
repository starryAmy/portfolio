const Links = document.querySelectorAll('nav ul li a');

Links.forEach((Link) => {
  Link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    // Remove 'active' class from all links
    Links.forEach((link) => {
      link.classList.remove('active');
    });
    console.log(event.currentTarget);
    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');
  });
})
