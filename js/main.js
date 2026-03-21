// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on click
    dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // Close dropdown when an item is clicked
    dropdownContent.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
});