function toggleMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('menu-button');
    
    // Bestimmt die Position des Buttons
    const rect = button.getBoundingClientRect();
    // Setzt das Menü an die Position des Buttons
    menu.style.top = (rect.top + window.scrollY + button.offsetHeight) + 'px';
    menu.style.left = (rect.left + window.scrollX) + 'px';
    
    // Toggle das Menü sichtbar/unsichtbar
    menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
}
