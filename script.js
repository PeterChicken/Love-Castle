"use strict";
window.addEventListener("load", () => {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        alert('Cảm ơn nhiều nhá')
        const vid = document.getElementById('ldta')
        vid.play()
    })
});
