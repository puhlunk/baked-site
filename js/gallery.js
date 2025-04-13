/**
 * Baked on 8th - Gallery JavaScript
 * Handles gallery filtering, lightbox, and image display
 */

document.addEventListener('DOMContentLoaded', function() {
    // Full Gallery Image Collection
    const galleryImages = [
        { 
            src: 'assets/gallery/2dlookingcake.jpg', 
            category: ['fun', 'themed'],
            title: '2D Looking Cake',
            description: 'Unique 2D-styled cake design'
        },
        { 
            src: 'assets/gallery/barbiecolorbirthday.JPG', 
            category: ['birthday', 'colorful', 'kids'],
            title: 'Barbie Color Birthday',
            description: 'Vibrant Barbie-themed birthday cake'
        },
        { 
            src: 'assets/gallery/birthdayclassic.JPG', 
            category: ['birthday', 'classic'],
            title: 'Classic Birthday Cake',
            description: 'Traditional birthday celebration cake'
        },
        { 
            src: 'assets/gallery/birthdayredheart.JPG', 
            category: ['birthday', 'romantic'],
            title: 'Red Heart Birthday',
            description: 'Heart-shaped red birthday cake'
        },
        { 
            src: 'assets/gallery/blueandwhiteabstract.JPG', 
            category: ['elegant', 'modern'],
            title: 'Blue and White Abstract',
            description: 'Sophisticated blue and white cake design'
        },
        { 
            src: 'assets/gallery/buffaloshapedcake.png', 
            category: ['themed', 'character'],
            title: 'Buffalo Shaped Cake',
            description: 'Creative buffalo-shaped cake design'
        },
        { 
            src: 'assets/gallery/butterfly.JPG', 
            category: ['elegant', 'nature'],
            title: 'Butterfly Cake',
            description: 'Delicate butterfly-inspired cake'
        },
        { 
            src: 'assets/gallery/butterflybirthday.JPG', 
            category: ['birthday', 'nature'],
            title: 'Butterfly Birthday',
            description: 'Butterfly-themed birthday celebration'
        },
        { 
            src: 'assets/gallery/cactuscake.JPG', 
            category: ['themed', 'nature'],
            title: 'Cactus Cake',
            description: 'Unique cactus-designed cake'
        },
        { 
            src: 'assets/gallery/camelsittingoncake.JPG', 
            category: ['themed', 'character'],
            title: 'Camel Sitting Cake',
            description: 'Playful cake with a camel design'
        },
        { 
            src: 'assets/gallery/castleentrancepinkcake.JPG', 
            category: ['themed', 'kids'],
            title: 'Castle Entrance Pink Cake',
            description: 'Magical pink castle-themed cake'
        },
        { 
            src: 'assets/gallery/chocolatefruitcake.jpg', 
            category: ['dessert', 'fruit'],
            title: 'Chocolate Fruit Cake',
            description: 'Rich chocolate cake with fresh fruits'
        },
        { 
            src: 'assets/gallery/classicbirthdaytower.JPG', 
            category: ['birthday', 'classic'],
            title: 'Classic Birthday Tower',
            description: 'Tiered classic birthday cake'
        },
        { 
            src: 'assets/gallery/classicfloralcake.jpg', 
            category: ['elegant', 'floral'],
            title: 'Classic Floral Cake',
            description: 'Elegant floral-decorated cake'
        },
        { 
            src: 'assets/gallery/classictowerfruit.JPG', 
            category: ['fruit', 'classic'],
            title: 'Classic Tower with Fruits',
            description: 'Tiered cake adorned with fresh fruits'
        },
        { 
            src: 'assets/gallery/classymacarooncake.JPG', 
            category: ['elegant', 'dessert'],
            title: 'Classy Macaroon Cake',
            description: 'Sophisticated cake with delicate macaroons'
        },
        { 
            src: 'assets/gallery/colorcloudcake.jpg', 
            category: ['colorful', 'whimsical'],
            title: 'Color Cloud Cake',
            description: 'Soft, dreamy cloud-inspired cake'
        },
        { 
            src: 'assets/gallery/colorflowertower.JPG', 
            category: ['colorful', 'floral'],
            title: 'Color Flower Tower',
            description: 'Vibrant floral-themed tiered cake'
        },
        { 
            src: 'assets/gallery/cowdisco.jpg', 
            category: ['fun', 'character'],
            title: 'Cow Disco Cake',
            description: 'Whimsical disco-themed cow cake'
        },
        { 
            src: 'assets/gallery/cutebearcakepink.jpg', 
            category: ['kids', 'character'],
            title: 'Cute Pink Bear Cake',
            description: 'Adorable pink bear-themed cake'
        },
        { 
            src: 'assets/gallery/dogcakebirthday.jpg', 
            category: ['birthday', 'character'],
            title: 'Dog Birthday Cake',
            description: 'Playful dog-themed birthday cake'
        },
        { 
            src: 'assets/gallery/elegantfloral.JPG', 
            category: ['elegant', 'floral'],
            title: 'Elegant Floral Design',
            description: 'Sophisticated floral cake design'
        },
        { 
            src: 'assets/gallery/FallFlower.JPG', 
            category: ['seasonal', 'floral'],
            title: 'Fall Flower Cake',
            description: 'Autumn-inspired floral cake'
        },
        { 
            src: 'assets/gallery/FloralTower.JPG', 
            category: ['elegant', 'floral'],
            title: 'Floral Tower',
            description: 'Tiered cake with beautiful floral decorations'
        },
        { 
            src: 'assets/gallery/foxchocolatecake.jpg', 
            category: ['themed', 'character'],
            title: 'Fox Chocolate Cake',
            description: 'Charming chocolate cake with fox design'
        },
        { 
            src: 'assets/gallery/frogbirthday.png', 
            category: ['birthday', 'character'],
            title: 'Frog Birthday Cake',
            description: 'Cute frog-themed birthday cake'
        },
        { 
            src: 'assets/gallery/greenbeans.JPG', 
            category: ['themed', 'fun'],
            title: 'Green Beans Cake',
            description: 'Playful green beans-inspired cake'
        },
        { 
            src: 'assets/gallery/HarryPotter.jpeg', 
            category: ['themed', 'character'],
            title: 'Harry Potter Cake',
            description: 'Magical Harry Potter-themed cake'
        },
        { 
            src: 'assets/gallery/HeartClassic.JPG', 
            category: ['romantic', 'classic'],
            title: 'Classic Heart Cake',
            description: 'Traditional heart-shaped cake'
        },
        { 
            src: 'assets/gallery/honeycombcake.JPG', 
            category: ['themed', 'nature'],
            title: 'Honeycomb Cake',
            description: 'Cake inspired by honeycomb design'
        },
        { 
            src: 'assets/gallery/icecreammeltingcake.png', 
            category: ['fun', 'themed'],
            title: 'Melting Ice Cream Cake',
            description: 'Creative melting ice cream cake design'
        },
        { 
            src: 'assets/gallery/kidsbirthday.JPG', 
            category: ['birthday', 'kids'],
            title: 'Kids Birthday Cake',
            description: 'Colorful birthday cake for children'
        },
        { 
            src: 'assets/gallery/llamacake.jpg', 
            category: ['character', 'fun'],
            title: 'Llama Cake',
            description: 'Adorable llama-themed cake'
        },
        { 
            src: 'assets/gallery/movieticketbirthday.JPG', 
            category: ['birthday', 'themed'],
            title: 'Movie Ticket Birthday',
            description: 'Birthday cake with movie ticket theme'
        },
        { 
            src: 'assets/gallery/orangevanillatower.JPG', 
            category: ['classic', 'fruit'],
            title: 'Orange Vanilla Tower',
            description: 'Tiered cake with orange and vanilla flavors'
        },
        { 
            src: 'assets/gallery/pancakecake.JPG', 
            category: ['fun', 'themed'],
            title: 'Pancake Cake',
            description: 'Creative cake designed like a stack of pancakes'
        },
        { 
            src: 'assets/gallery/pinksparklecake.png', 
            category: ['colorful', 'birthday'],
            title: 'Pink Sparkle Cake',
            description: 'Glittery pink celebration cake'
        },
        { 
            src: 'assets/gallery/redheart.JPG', 
            category: ['romantic', 'classic'],
            title: 'Red Heart',
            description: 'Romantic red heart-shaped cake'
        },
        { 
            src: 'assets/gallery/shakcomingoutofcake.png', 
            category: ['fun', 'themed'],
            title: 'Shark Cake',
            description: 'Playful cake with a shark emerging'
        },
        { 
            src: 'assets/gallery/spongebob.JPG', 
            category: ['birthday', 'character', 'kids'],
            title: 'Spongebob Cake',
            description: 'Spongebob-themed birthday cake'
        },
        { 
            src: 'assets/gallery/sweetscake.JPG', 
            category: ['elegant', 'dessert'],
            title: 'Sweets Cake',
            description: 'Delicate cake with sweet decorations'
        },
        { 
            src: 'assets/gallery/teddybearboybirthday.JPG', 
            category: ['birthday', 'kids', 'character'],
            title: 'Teddy Bear Birthday',
            description: 'Cute teddy bear birthday cake'
        },
        { 
            src: 'assets/gallery/whalebluecake.JPG', 
            category: ['themed', 'ocean'],
            title: 'Whale Blue Cake',
            description: 'Ocean-themed cake with whale design'
        }
    ];

    // Cache DOM elements
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.querySelector('.gallery-lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevButton = document.querySelector('.prev-image');
    const nextButton = document.querySelector('.next-image');

    let currentImageIndex = 0;
    let currentFilteredImages = [];

    // Populate Gallery
    function populateGallery(filter = 'all') {
        // Clear existing gallery items
        galleryGrid.innerHTML = '';

        // Filter images
        currentFilteredImages = filter === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category.includes(filter));

        // Create gallery items
        currentFilteredImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.setAttribute('data-category', image.category.join(' '));
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.title;
            
            const overlay = document.createElement('div');
            overlay.classList.add('gallery-item-overlay');
            overlay.innerHTML = `
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            `;

            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);

            // Add click event for lightbox
            galleryItem.addEventListener('click', () => {
                openLightbox(currentFilteredImages.indexOf(image));
            });

            galleryGrid.appendChild(galleryItem);
        });
    }

    // Open Lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = currentFilteredImages[index].src;
        lightboxCaption.innerHTML = `
            <h3>${currentFilteredImages[index].title}</h3>
            <p>${currentFilteredImages[index].description}</p>
        `;
        lightbox.classList.add('active');
    }

    // Close Lightbox
    function closeLightboxView() {
        lightbox.classList.remove('active');
    }

    // Navigate to Previous Image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
        lightboxImage.src = currentFilteredImages[currentImageIndex].src;
        lightboxCaption.innerHTML = `
            <h3>${currentFilteredImages[currentImageIndex].title}</h3>
            <p>${currentFilteredImages[currentImageIndex].description}</p>
        `;
    }

    // Navigate to Next Image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentFilteredImages.length;
        lightboxImage.src = currentFilteredImages[currentImageIndex].src;
        lightboxCaption.innerHTML = `
            <h3>${currentFilteredImages[currentImageIndex].title}</h3>
            <p>${currentFilteredImages[currentImageIndex].description}</p>
        `;
    }

    // Filter Gallery
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter category
            const filter = this.getAttribute('data-filter');
            
            // Repopulate gallery
            populateGallery(filter);
        });
    });

    // Lightbox Event Listeners
    closeLightbox.addEventListener('click', closeLightboxView);
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(event) {
        // Check if the click was directly on the lightbox background
        if (event.target === lightbox) {
            closeLightboxView();
        }
    });

    // Close lightbox on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightboxView();
        }
        
        // Previous and next image with arrow keys
        if (lightbox.classList.contains('active')) {
            if (event.key === 'ArrowLeft') prevImage();
            if (event.key === 'ArrowRight') nextImage();
        }
    });

    // Initial Gallery Population
    populateGallery();
});