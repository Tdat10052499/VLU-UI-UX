document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Navigation logic to automatically find current screen
    function navigateTo(toId) {
        const fromScreen = document.querySelector('.screen.active');
        const toScreen = document.getElementById(toId);
        
        if (!fromScreen || !toScreen || fromScreen === toScreen) return;

        // Start fade out
        fromScreen.classList.remove('active');
        
        // Wait for fade out to complete before swapping display properties
        setTimeout(() => {
            fromScreen.style.display = 'none';
            toScreen.style.display = 'flex';
            
            // Force browser to recalculate layout so transition works
            void toScreen.offsetWidth;
            
            // Start fade in
            toScreen.classList.add('active');
        }, 400); // 400ms matches the CSS transition duration
    }

    // Attach Event Listeners
    const btnGetStarted = document.getElementById('btn-get-started');
    if (btnGetStarted) {
        btnGetStarted.addEventListener('click', () => navigateTo('auth-screen'));
    }

    const btnSignIn = document.getElementById('btn-sign-in');
    if (btnSignIn) {
        btnSignIn.addEventListener('click', () => navigateTo('home-screen'));
    }

    const goToDetailCards = document.querySelectorAll('.go-to-detail');
    goToDetailCards.forEach(card => {
        card.addEventListener('click', () => navigateTo('detail-screen'));
    });

    const btnBack = document.getElementById('btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', () => navigateTo('home-screen'));
    }
    
    // Bottom Navigation Logic
    const goToHomeBtns = document.querySelectorAll('.go-to-home');
    goToHomeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo('home-screen'); 
        });
    });
    
    const goToExploreBtns = document.querySelectorAll('.go-to-explore');
    goToExploreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo('explore-screen'); 
        });
    });
    
    const goToCartBtns = document.querySelectorAll('.go-to-cart');
    goToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo('cart-screen'); 
        });
    });
    
    const goToProfileBtns = document.querySelectorAll('.go-to-profile');
    goToProfileBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo('profile-screen'); 
        });
    });
    
    const goToAuthBtns = document.querySelectorAll('.go-to-auth');
    goToAuthBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo('auth-screen'); 
        });
    });
});
