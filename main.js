function createRain() {
    const droplet = document.createElement('div')
    droplet.innerText = '💧'
    droplet.classList.add('droplet')
    droplet.style.left = Math.floor(Math.random()* 100) + 'vw'
    droplet.style.animationDuration = Math.random() * 2 + 0.5 + 's'
    document.body.appendChild(droplet)
    setTimeout(() => droplet.remove(), 2000) // Удаляем созданную каплю
}


setInterval(createRain, 100)
