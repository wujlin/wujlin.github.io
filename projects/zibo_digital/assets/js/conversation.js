let currentMessage = 1;

document.querySelector('.chatbox').addEventListener('click', () => {
    if (currentMessage == 1) {
        document.getElementById('message2-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 2) {
        document.getElementById('message3-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 3) {
        document.getElementById('message4-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 4) {
        document.getElementById('message5-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 5) {
        document.getElementById('message6-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 6) {
        document.getElementById('message7-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 7) {
        document.getElementById('message8-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 8) {
        document.getElementById('message9-container').classList.remove('hidden');
        currentMessage++;
    }
});