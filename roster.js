document.addEventListener('DOMContentLoaded', function () {
    // Video playback speed adjustment
    var video = document.getElementById('logo-spinning');
    video.playbackRate = 1;

    // Fade-in effect for the video
    setTimeout(() => {
        video.classList.add('fade-in');
    }, 100);

    // Dropdown menu functionality for 'dropbtn-roster'
    var dropbtnRoster = document.querySelector('.dropbtn-roster');
    var dropdownRoster = document.getElementById('myDropdown-roster');
    var cardContainer = document.querySelector('.card-container'); // Reference to the card container

    dropbtnRoster.addEventListener('click', function() {
        const isDropdownOpen = dropdownRoster.classList.contains("show");
        
        // Toggle dropdown visibility and blur effect
        dropdownRoster.classList.toggle("show");
        document.body.classList.toggle('blur', !isDropdownOpen);
        this.classList.toggle('active', !isDropdownOpen);

        // Disable card flipping when the menu is opened
        if (!isDropdownOpen) {
            cardContainer.classList.add('no-flip');
        } else {
            cardContainer.classList.remove('no-flip');
        }

        const menuItems = document.querySelectorAll('.dropdown-content-roster a');
        menuItems.forEach((item) => {
            item.classList.remove('visible'); // Hide menu items
        });

        // Animate menu items if the dropdown is opened
        if (!isDropdownOpen) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible'); // Show menu items with delay
                }, index * 300); // Delay each menu item by 300ms
            });
        }
    });

    // Dropdown menu functionality for 'dropbtn'
    const dropbtn = document.getElementById('dropbtn');
    const dropdown = document.getElementById('myDropdown');

    dropbtn.addEventListener('click', function() {
        const isDropdownOpen = dropdown.classList.toggle('show');
        document.body.classList.toggle('menu-open', isDropdownOpen); // Add or remove class based on dropdown state
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn-roster') && !event.target.matches('#dropbtn')) {
            var dropdownsRoster = document.getElementsByClassName("dropdown-content-roster");
            var dropdowns = document.getElementsByClassName("dropdown-content");

            for (let i = 0; i < dropdownsRoster.length; i++) {
                let openDropdown = dropdownsRoster[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.body.classList.remove('blur'); // Remove blur effect
                    dropbtnRoster.classList.remove('active'); // Reset button color
                    cardContainer.classList.remove('no-flip'); // Enable card flipping
                }
            }

            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.body.classList.remove('menu-open'); // Remove menu-open effect
                    dropbtn.classList.remove('active'); // Reset button color
                }
            }
        }
    });
});
