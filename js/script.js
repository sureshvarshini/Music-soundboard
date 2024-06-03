function play_sound(sound_id) {
    var base_path = "assets/sounds/"
    var sound = new Audio(base_path + sound_id + ".mp3");
    sound.play();
}