// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
                
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Button click handlers
    setupButtonHandlers();
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function setupButtonHandlers() {
    // Filter button
    const filterBtn = document.querySelector('.btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            showNotification('Filter applied successfully!', 'success');
        });
    }
    
    // Generate report buttons
    const generateBtns = document.querySelectorAll('.btn-generate');
    generateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Report generated successfully!', 'success');
        });
    });
    
    // Save config button
    const saveBtn = document.querySelector('.btn-save');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            showNotification('Configuration saved!', 'success');
        });
    }
    
    // Edit profile button
    const editBtn = document.querySelector('.btn-edit');
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            const preferencesBox = document.querySelector('.preferences-box');
            if (preferencesBox) {
                preferencesBox.scrollIntoView({ behavior: 'smooth' });
                showNotification('You can edit your profile below', 'info');
            }
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showPage('dashboard');
                break;
            case '2':
                e.preventDefault();
                showPage('analytics');
                break;
            case '3':
                e.preventDefault();
                showPage('config');
                break;
            case '4':
                e.preventDefault();
                showPage('reports');
                break;
            case '5':
                e.preventDefault();
                showPage('profile');
                break;
        }
    }
});
