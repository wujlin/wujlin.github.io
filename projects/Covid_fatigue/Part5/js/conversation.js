let currentMessage = 1;

document.querySelector('.chatbox').addEventListener('click', () => {
    if (currentMessage == 1) {
        document.getElementById('message2-container').classList.remove('hidden');
        currentMessage++;
    } else if (currentMessage == 2) {
        document.getElementById('message3-container').classList.remove('hidden');
        currentMessage++;
    }
});
