window.addEventListener('load', main);

function main() {
    const button = document.querySelector('button');
    button.addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
    const sidebar = document.querySelector('aside');
    const root = document.querySelector(':root');
    root.style.setProperty('--sidebar-width', '0');

    const sidebarWidth = root.style.getPropertyValue('--sidebar-width');

    if (sidebar.style.width === '0px') {
        root.style.setProperty('--sidebar-width', null);
     
        
    } else {
        root.style.setProperty('--sidebar-width', '0');
   

    }
}