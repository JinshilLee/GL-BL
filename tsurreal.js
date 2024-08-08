document.addEventListener('DOMContentLoaded', function () {
    // Dropdown menu functionality for 'dropbtn-roster'
    var dropbtnRoster = document.querySelector('.dropbtn-tsurreal');
    var dropdownRoster = document.getElementById('myDropdown-tsurreal');

    if (dropbtnRoster && dropdownRoster) {
        dropbtnRoster.addEventListener('click', function() {
            const isDropdownOpen = dropdownRoster.classList.contains("show");

            // Toggle dropdown visibility and blur effect
            dropdownRoster.classList.toggle("show");
            document.body.classList.toggle('blur', !isDropdownOpen);
            this.classList.toggle('active', !isDropdownOpen);

            const menuItems = document.querySelectorAll('.dropdown-content-tsurreal a');
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
    }

    // Dropdown menu functionality for 'dropbtn'
    const dropbtn = document.getElementById('dropbtn-tsurreal');
    const dropdown = document.getElementById('myDropdown-tsurreal');

    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', function() {
            const isDropdownOpen = dropdown.classList.toggle('show');
        });
    }

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn-roster-tsurreal') && !event.target.matches('#dropbtn')) {
            var dropdownsRoster = document.getElementsByClassName("dropdown-content-tsurreal");
            for (let i = 0; i < dropdownsRoster.length; i++) {
                let openDropdown = dropdownsRoster[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.body.classList.remove('blur'); // Remove blur effect
                    dropbtnRoster.classList.remove('active'); // Reset button color
                }
            }

            var dropdowns = document.getElementsByClassName("dropdown-content-tsurreal");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    dropbtn.classList.remove('active'); // Reset button color
                }
            }
        }
    });
});

