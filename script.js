// Utility function to handle form submissions
/**
 * Attaches a submit event listener to a form and displays a success message upon submission.
 * @param {string} formId - The ID of the form to attach the listener to.
 * @param {string} successMessage - The message to display upon successful submission.
 */
function handleFormSubmission(formId, successMessage) {
    const form = document.getElementById(formId);

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            alert(successMessage);  // Display success message
        });
    } else {
        console.warn(`Form with ID '${formId}' not found.`);  // Log a warning if form isn't found
    }
}

// Initialize form submission handlers
handleFormSubmission('contact-form', 'Thank you for contacting us!');
handleFormSubmission('appointment-form', 'Your appointment has been booked successfully!');

// Menu toggle functionality
/**
 * Toggles the visibility of the navigation menu when the menu toggle button is clicked.
 */
(function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show'); // Toggle the 'show' class to reveal or hide the menu
        });
    } else {
        console.warn('Menu toggle or navigation menu element not found.');
    }
})();

// Trigger Christmas Popup on Appointment Booked
/**
 * Shows the Christmas popup after an appointment is booked.
 */
document.querySelector('.book-appointment-button')?.addEventListener('click', function() {
    const christmasPopup = document.querySelector('.christmas-popup');
    if (christmasPopup) {
        christmasPopup.style.display = 'flex';  // Show the popup
    } else {
        console.warn('Christmas popup element not found.');
    }
});

// Close Popup when Close Button is Clicked
/**
 * Closes the Christmas popup when the close button is clicked.
 */
document.querySelector('.close-btn')?.addEventListener('click', function() {
    const christmasPopup = document.querySelector('.christmas-popup');
    if (christmasPopup) {
        christmasPopup.style.display = 'none';  // Hide the popup
    } else {
        console.warn('Christmas popup element not found.');
    }
});
