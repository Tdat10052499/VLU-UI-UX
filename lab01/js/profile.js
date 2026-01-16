// Profile management
document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    setupProfileEventListeners();
});

function loadProfileData() {
    const userEmail = localStorage.getItem('userEmail') || '';
    const userName = localStorage.getItem('userName') || '';
    const fullName = localStorage.getItem('fullName') || '';
    const position = localStorage.getItem('position') || 'System Administrator';
    
    // Update profile card
    const profileName = document.getElementById('profileName');
    const profilePosition = document.getElementById('profilePosition');
    const profileAvatar = document.getElementById('profileAvatar');
    const emailDisplay = document.getElementById('emailDisplay');
    
    if (profileName && fullName) {
        profileName.textContent = fullName;
    } else if (profileName && userName) {
        profileName.textContent = userName;
    }
    
    if (profilePosition) {
        profilePosition.textContent = position;
    }
    
    if (profileAvatar) {
        const initials = getInitials(fullName || userName || 'User');
        profileAvatar.textContent = initials;
    }
    
    if (emailDisplay) {
        emailDisplay.value = userEmail;
    }
    
    // Update form inputs
    const fullNameInput = document.getElementById('fullNameInput');
    const positionInput = document.getElementById('positionInput');
    
    if (fullNameInput) {
        fullNameInput.value = fullName || userName || '';
    }
    
    if (positionInput) {
        positionInput.value = position;
    }
}

function getInitials(name) {
    return name
        .split(' ')
        .map(n => n.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2) || 'US';
}

function setupProfileEventListeners() {
    // Save profile button
    const saveProfileBtn = document.querySelector('.btn-save-profile');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function() {
            saveProfileData();
        });
    }
}

function saveProfileData() {
    const fullNameInput = document.getElementById('fullNameInput');
    const positionInput = document.getElementById('positionInput');
    
    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const position = positionInput ? positionInput.value.trim() : '';
    
    if (!fullName) {
        showNotification('Please enter your full name', 'error');
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('position', position);
    
    // Update display
    const profileName = document.getElementById('profileName');
    const profilePosition = document.getElementById('profilePosition');
    const profileAvatar = document.getElementById('profileAvatar');
    
    if (profileName) {
        profileName.textContent = fullName;
    }
    
    if (profilePosition) {
        profilePosition.textContent = position || 'System Administrator';
    }
    
    if (profileAvatar) {
        profileAvatar.textContent = getInitials(fullName);
    }
    
    showNotification('Profile saved successfully!', 'success');
}
