document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-dropdown');
  
    const dropdownButton = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');
  
    dropdownButton.addEventListener('click', () => {
        console.log("Hey")
      dropdownMenu.classList.toggle('hidden');
    });
  
    button.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  });