var textWrapper = document.querySelector('.animation-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter small'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.animation-title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 2000 + 30 * i
    }).add({
        targets: '.animation-title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 2000 + 30 * i
    });
