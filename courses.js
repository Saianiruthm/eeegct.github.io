const categoryLinks = document.querySelectorAll('.course-categories a');
const courseLists = document.querySelectorAll('.course-list');

// Initially hide all course lists
courseLists.forEach(list => {
  list.style.display = 'none';
});

categoryLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const clickedText = event.target.textContent.toLowerCase();
    const exceptions = ['honours and minor degree', 'nptel and swayam courses'];

    // Allow default behavior for exceptions (open in new tab)
    if (exceptions.includes(clickedText.toLowerCase())) {
      return; // Exit the function if it's an exception link
    }

    event.preventDefault(); // Prevent reload for non-exception links

    const category = clickedText; // Use clicked text directly (no need to lowercase)

    courseLists.forEach(list => {
      list.style.display = 'none'; // Hide all lists again (before showing the chosen one)
      if (list.classList.contains(category)) {
        list.style.display = 'block'; // Show the matching category list
      }
    });
  });
});
