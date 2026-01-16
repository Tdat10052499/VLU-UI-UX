// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simple validation - accept any email/password
            if (email && password) {
                // Extract username from email
                const userName = email.split('@')[0];
                
                // Save to localStorage
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', userName);
                
                // Show success notification
                showNotification('Login successful!', 'success');
                
                // Show dashboard after a short delay
                setTimeout(function() {
                    showDashboard();
                }, 500);
            }
        });
    }
    
    // Check if user is already logged in
    checkLoginStatus();
});

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    
    if (isLoggedIn === 'true') {
        showDashboard();
    }
}

function showDashboard() {
    // Hide login page
    const loginPage = document.querySelector('.login-page');
    const container = document.querySelector('.container');
    
    if (loginPage && container) {
        loginPage.classList.remove('active');
        container.style.display = 'flex';
        
        // Update greeting
        updateGreeting();
    }
}

function updateGreeting() {
    const userName = localStorage.getItem('userName') || 'User';
    const fullName = localStorage.getItem('fullName') || userName;
    const dashboardGreeting = document.querySelector('#dashboard .page-header h2');
    
    if (dashboardGreeting) {
        dashboardGreeting.textContent = '👋 Hello, ' + fullName + '!';
    }
}
