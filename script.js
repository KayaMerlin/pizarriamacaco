document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredient');
    const pizzaArea = document.querySelector('.pizza-area');
    const messageContainer = document.getElementById('message-container');
    const finalMessage = document.getElementById('final-message');
    
    // Controle de música
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isMusicPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.textContent = '🔇';
        } else {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
            musicToggle.textContent = '🎵';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    let placedIngredients = 0;
    const totalIngredients = ingredients.length;

    let draggingElement = null;
    let initialX, initialY, initialLeft, initialTop;

    ingredients.forEach(ingredient => {
        ingredient.addEventListener('mousedown', (e) => {
            draggingElement = ingredient;
            initialX = e.clientX;
            initialY = e.clientY;
            const rect = ingredient.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
            
            ingredient.classList.add('dragging');
            document.body.style.cursor = 'grabbing';
            e.preventDefault();
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (!draggingElement) return;

        const deltaX = e.clientX - initialX;
        const deltaY = e.clientY - initialY;

        draggingElement.style.position = 'fixed';
        draggingElement.style.left = `${initialLeft + deltaX}px`;
        draggingElement.style.top = `${initialTop + deltaY}px`;
        draggingElement.style.zIndex = '1000';
    });

    document.addEventListener('mouseup', (e) => {
        if (!draggingElement) return;

        draggingElement.classList.remove('dragging');
        document.body.style.cursor = 'default';
        
        const pizzaRect = pizzaArea.getBoundingClientRect();
        
        const pizzaCenterX = pizzaRect.left + pizzaRect.width / 2;
        const pizzaCenterY = pizzaRect.top + pizzaRect.height / 2;
        
        const dist = Math.sqrt(
            Math.pow(e.clientX - pizzaCenterX, 2) +
            Math.pow(e.clientY - pizzaCenterY, 2)
        );

        // Se o ingrediente foi solto perto o suficiente da pizza
        if (dist < pizzaRect.width * 0.4) {
            const message = draggingElement.getAttribute('data-message');
            messageContainer.innerText = message;
            
            // Remova o ingrediente da lista e adicione na pizza
            draggingElement.style.transition = 'transform 0.5s ease-out';
            draggingElement.style.position = 'absolute';
            draggingElement.style.left = `${Math.random() * (pizzaRect.width * 0.6) + pizzaRect.width * 0.2}px`;
            draggingElement.style.top = `${Math.random() * (pizzaRect.height * 0.6) + pizzaRect.height * 0.2}px`;
            
            pizzaArea.appendChild(draggingElement);
            
            // Adiciona animação especial
            setTimeout(() => {
                draggingElement.classList.add('placed');
            }, 100);
            
            placedIngredients++;

            if (placedIngredients === totalIngredients) {
                // Efeito de confete
                createConfetti();
                
                setTimeout(() => {
                    messageContainer.style.display = 'none';
                    finalMessage.style.display = 'block';
                }, 1500); // 1.5s para exibir a mensagem final
            }
        } else {
            // Volta o ingrediente para a posição original se não for solto na pizza
            draggingElement.style.position = 'static';
        }
        
        draggingElement.style.zIndex = 'auto';
        draggingElement = null;
    });
    
    // Função para criar confete
    function createConfetti() {
        const colors = ['#ff4081', '#e91e63', '#ff80ab', '#f50057', '#c2185b'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                
                document.body.appendChild(confetti);
                
                const animation = confetti.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => confetti.remove();
            }, i * 100);
        }
    }
});
