function play_sound(id) {
    var base_path = "assets/"
    var sound_dir = "sounds/"
    var image_dir = "images/"

    var sound = new Audio(base_path + sound_dir + id + ".mp3");
    sound.play();

    const image = document.getElementById("screen-image");
    image.src = base_path + image_dir + id + ".jpg";
    image.style.display = "block";
}

function turn_off() {
    const image = document.getElementById("screen-image");
    image.style.display = "none";
}