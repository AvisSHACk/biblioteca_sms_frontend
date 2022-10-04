const ToggleMenu = (container) => {
    let nav = container.querySelector('.Nav'),
        buttonNav = container.querySelector('.Header__btnMenu');
        
    buttonNav.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('active');
        document.body.classList.toggle('active')
    })
}

export default ToggleMenu;