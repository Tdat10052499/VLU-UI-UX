// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(function() {
        notification.classList.add('hide');
        setTimeout(function() {
            notification.remove();
        }, 400);
    }, 3000);
}
