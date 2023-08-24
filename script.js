function openContactWindow() {
    const contactWindow = window.open('contact.html', '_blank', 'width=500,height=330');
    const exitButton = document.createElement('div');
    exitButton.className = 'exit-button';
    exitButton.innerText = '✖';
    exitButton.addEventListener('click', () => contactWindow.close());
    contactWindow.document.body.appendChild(exitButton);
}