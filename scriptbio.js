const buttons = document.querySelectorAll(".pager button");
const pageContainer = document.querySelector('#page-container');

// Load a page by its URL and set it as active
function loadPage(url, index) {
  // Remove the active class from all buttons and pages
  buttons.forEach((button) => button.classList.remove("active"));
  pageContainer.innerHTML = ''; // Remove the previous page

  // Load the new page
  fetch(url)
    .then(response => response.text())
    .then(data => {
      pageContainer.innerHTML = data;
      buttons[index].classList.add("active");
    })
    .catch(error => console.error(error));
}
