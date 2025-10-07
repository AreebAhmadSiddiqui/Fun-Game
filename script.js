const btn = document.querySelector('button');


btn.addEventListener('mouseover', moveButton);
btn.addEventListener('touchstart', moveButton);

function moveButton(e) {
   
    if (e.type === 'touchstart') {
        e.preventDefault();
    }
    
    const ranX = Math.random() * 650 
    const ranY = Math.random() * 650 
    
    btn.style.left = `${ranX}px`;
    btn.style.top = `${ranY}px`;
}

// Optional: Add click/tap event for when user finally catches the button
btn.addEventListener('click', () => {
    alert('You caught me! 🎉');
});
