// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const logoutItem = document.querySelector('.logout-item');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
            container.classList.toggle('sidebar-expanded');
            
            // Save expanded state to localStorage
            const isExpanded = sidebar.classList.contains('expanded');
            localStorage.setItem('sidebarExpanded', isExpanded);
        });
    }
    
    // Restore sidebar state
    const sidebarExpanded = localStorage.getItem('sidebarExpanded') === 'true';
    if (sidebarExpanded && sidebar) {
        sidebar.classList.add('expanded');
        container.classList.add('sidebar-expanded');
    }
    
    // Logout functionality
    if (logoutItem) {
        logoutItem.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            localStorage.removeItem('fullName');
            localStorage.removeItem('position');
            
            // Reload page to show login
            location.reload();
        });
    }
});
