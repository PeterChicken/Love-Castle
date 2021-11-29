"use strict";
window.addEventListener("load", () => {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        alert('Không cần')
        const vid = document.getElementById('ldta')
        vid.play()
    })
});
