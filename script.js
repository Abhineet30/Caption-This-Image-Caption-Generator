const photos = [
    {
        src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
        description: 'cat wearing sunglasses at the beach'
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        description: 'dog playing in the park'
    },
    {
        src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
        description: 'sunset over the mountains'
    },
    {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'city skyline at night'
    },
    {
        src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
        description: 'forest trail in autumn'
    }
];

const aiPrompt = "Write a humorous Instagram-style caption for a photo of a cat wearing sunglasses at the beach.";

const photoElement = document.getElementById('photo');
const captionElement = document.getElementById('caption');
const newCaptionBtn = document.getElementById('new-caption-btn');

function getRandomPhoto() {
    const index = Math.floor(Math.random() * photos.length);
    return photos[index];
}

function generateCaption(photoDescription) {
    // Simulated AI caption generation based on the photo description and prompt
    if (photoDescription === 'cat wearing sunglasses at the beach') {
        return "Suns out, puns out 😎🐾 #BeachVibes #CoolCat";
    } else if (photoDescription === 'dog playing in the park') {
        return "Just out here chasing dreams and squirrels 🐶🌳 #ParkLife";
    } else if (photoDescription === 'sunset over the mountains') {
        return "Chasing sunsets and catching feelings 🌄✨ #NatureLover";
    } else if (photoDescription === 'city skyline at night') {
        return "City lights and late nights 🌃💡 #UrbanExplorer";
    } else if (photoDescription === 'forest trail in autumn') {
        return "Falling for these autumn vibes 🍂🍁 #NatureWalk";
    } else {
        return "Life’s a journey, enjoy the view! 🌟";
    }
}

function displayNewPhotoAndCaption() {
    const photo = getRandomPhoto();
    photoElement.src = photo.src;
    photoElement.alt = photo.description;
    captionElement.textContent = generateCaption(photo.description);
}

newCaptionBtn.addEventListener('click', displayNewPhotoAndCaption);

// Initialize with a photo and caption on page load
displayNewPhotoAndCaption();
