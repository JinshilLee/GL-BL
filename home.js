document.addEventListener('DOMContentLoaded', function () {
    // Video playback speed adjustment
    var video = document.getElementById('logo-spinning');
    var image = document.getElementById('replacement-image');
    video.playbackRate = 1;

    // Check if the device is in portrait mode
    function checkOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
            // Hide the video and show the image in portrait mode
            video.style.display = 'none';
            image.style.display = 'block';
        } else {
            // Show the video and hide the image in landscape mode
            video.style.display = 'block';
            image.style.display = 'none';
        }
    }

    // Initial check
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);

    // Fade-in effect for the video
    setTimeout(() => {
        video.classList.add('fade-in');
    }, 100); 

    // Paragraph visibility animation
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('visible');
        }, index * 300); // Delay each paragraph by 300ms
    });

    // Loading bar animation
    const progressBar = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');
    let width = 0;
    const totalDuration = 60000; // 1 minute in milliseconds
    const intervalTime = 1000; // Update every second

    // Reset the text to "Loading..." when the page is refreshed
    loadingText.textContent = 'Loading...';

    const interval = setInterval(() => {
        width += (100 / (totalDuration / intervalTime));
        progressBar.style.width = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            loadingText.textContent = 'Complete';
        }
    }, intervalTime);

    // Dropdown menu functionality
    var dropbtn = document.querySelector('.dropbtn');
    var dropdown = document.getElementById('myDropdown');

    dropbtn.addEventListener('click', function() {
        const isDropdownOpen = dropdown.classList.contains("show");
        
        // Toggle dropdown visibility and blur effect
        dropdown.classList.toggle("show");
        document.body.classList.toggle('blur', !isDropdownOpen);
        this.classList.toggle('active', !isDropdownOpen);
        const menuItems = document.querySelectorAll('.dropdown-content a');
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

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.body.classList.remove('blur'); // Remove blur effect
                    dropbtn.classList.remove('active'); // Reset button color
                }
            }
        }
    });
});
