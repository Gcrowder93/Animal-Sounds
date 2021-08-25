const emuImg = document.getElementById('emu');
const emuAudio = document.getElementById('emu-sound');
const sheepImg = document.getElementById('sheep');
const sheepAudio = document.getElementById('sheep-sound');
const whaleImg = document.getElementById('whale');
const whaleAudio = document.getElementById('whale-sound');

emuImg.addEventListener('click', () => {
    emuAudio.play();

});

sheepImg.addEventListener('click', () => {
    sheepAudio.play();

});

whaleImg.addEventListener('click', () => {
    whaleAudio.play();

});
