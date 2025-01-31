window.onload = function() {
    const container = document.getElementById('heart-overlay');
    const heartCount = 33; // Kalp sayısı
    
    
    for(let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.innerHTML = '❤';
        
       
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.color = `hsl(${Math.random()*360}, 70%, 60%)`;
        
        
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
    }

    
    setTimeout(() => {
        container.remove();
    }, 7000);
};