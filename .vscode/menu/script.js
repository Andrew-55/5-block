const dom = {
    block: document.querySelector('.block'),
    menuBtn: document.querySelector('.menu-btn'),
}

dom.menuBtn.onclick = () => dom.block.classList.toggle('open');