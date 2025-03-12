const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const announcement = document.querySelector('.sr-only-announcement');
let timeoutId;

function handleEnvelopeOpen() {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
    announcement.textContent = 'Cartão aberto. O cartão contém uma mensagem de amor para o Dia dos Namorados.';
}

function handleEnvelopeClose() {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
        announcement.textContent = 'Cartão fechado.';
    }, 1500);
}

// Mouse events
envelope.addEventListener('mouseover', handleEnvelopeOpen);
envelope.addEventListener('mouseout', handleEnvelopeClose);

// Touch events
envelope.addEventListener('touchstart', handleEnvelopeOpen);
envelope.addEventListener('touchend', handleEnvelopeClose);

// Keyboard events
envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnvelopeOpen();
    }
});

envelope.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        handleEnvelopeClose();
    }
});

// Announce initial state for screen readers
window.addEventListener('load', () => {
    announcement.textContent = 'Cartão de Dia dos Namorados carregado. Pressione Enter ou toque para abrir o envelope.';
});