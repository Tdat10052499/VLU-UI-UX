// Multi-language support
const translations = {
    en: {
        // Login Page
        'login.title': 'Energy Management System',
        'login.subtitle': 'Monitor and optimize your energy consumption',
        'login.email': 'Email Address',
        'login.password': 'Password',
        'login.remember': 'Remember me',
        'login.button': 'Login',
        'login.footer': 'Energy Management System © 2024',
        
        // Sidebar
        'sidebar.dashboard': 'Dashboard',
        'sidebar.analytics': 'Advanced Analytics',
        'sidebar.config': 'Configuration',
        'sidebar.reports': 'Reports',
        'sidebar.profile': 'Settings & Profile',
        'sidebar.logout': 'Logout',
        
        // Dashboard
        'dashboard.title': 'Energy Dashboard',
        'dashboard.energy': 'Total Energy',
        'dashboard.power': 'Current Power',
        'dashboard.cost': 'Monthly Cost',
        'dashboard.efficiency': 'Efficiency',
        'dashboard.consumption': 'Energy Consumption',
        'dashboard.devices': 'Device Status',
        'dashboard.alerts': 'Recent Alerts',
        'dashboard.actions': 'Quick Actions',
        'dashboard.distribution': 'Energy Distribution',
        'dashboard.device.ac': 'Air Conditioning',
        'dashboard.device.lighting': 'Lighting System',
        'dashboard.device.hvac': 'HVAC System',
        'dashboard.action.report': 'Generate Report',
        'dashboard.action.optimize': 'Optimize Settings',
        'dashboard.action.schedule': 'Schedule Maintenance',
        'dashboard.action.export': 'Export Data',
        'dashboard.alert.consumption': 'High energy consumption detected in Building A',
        'dashboard.alert.offline': 'Device AC-101 is offline',
        'dashboard.alert.maintenance': 'Scheduled maintenance tomorrow',
        
        // Analytics
        'analytics.title': 'Advanced Analytics',
        'analytics.co2': 'CO₂ Saved',
        'analytics.avg': 'Avg/Hour',
        'analytics.trees': 'Trees Needed',
        'analytics.carbon': 'Carbon Intensity',
        'analytics.trends': 'Consumption Trends',
        'analytics.peak': 'Peak Hours Analysis',
        'analytics.insights': 'AI Insights',
        'analytics.cost': 'Cost Breakdown',
        'analytics.insight1': 'Peak usage occurs during 9-11 AM. Consider load shifting.',
        'analytics.insight2': 'HVAC efficiency dropped 15%. Maintenance recommended.',
        'analytics.insight3': 'Lighting automation saved 230 kWh this month.',
        'analytics.cost.hvac': 'HVAC System',
        'analytics.cost.lighting': 'Lighting',
        'analytics.cost.equipment': 'Equipment',
        'analytics.cost.total': 'Total Cost',
        
        // Configuration
        'config.title': 'Configuration',
        'config.tab.devices': 'Devices',
        'config.tab.alerts': 'Alerts',
        'config.tab.thresholds': 'Thresholds',
        'config.tab.system': 'System',
        'config.device.ac': 'Air Conditioning Unit',
        'config.device.lighting': 'Smart Lighting',
        'config.device.hvac': 'HVAC Controller',
        'config.alert.email': 'Email Notifications',
        'config.alert.email.desc': 'Receive alerts via email',
        'config.alert.push': 'Push Notifications',
        'config.alert.push.desc': 'Get real-time notifications',
        'config.alert.high': 'High Consumption Alert',
        'config.alert.high.desc': 'Alert when usage exceeds threshold',
        'config.alert.device': 'Device Status Alerts',
        'config.alert.device.desc': 'Notify when devices go offline',
        'config.system.company': 'Company Name',
        'config.system.timezone': 'Time Zone',
        'config.system.currency': 'Currency',
        'config.system.rate': 'Energy Rate',
        'config.system.save': 'Save Settings',
        
        // Reports
        'reports.title': 'Reports',
        'reports.subtitle': 'Generate and manage reports',
        'reports.daily': 'Daily Report',
        'reports.daily.desc': 'Daily energy consumption and cost analysis',
        'reports.monthly': 'Monthly Summary',
        'reports.monthly.desc': 'Comprehensive monthly performance report',
        'reports.environmental': 'Environmental Impact',
        'reports.environmental.desc': 'Carbon footprint and sustainability metrics',
        'reports.device': 'Device Performance',
        'reports.device.desc': 'Individual device efficiency analysis',
        'reports.generate': 'Generate',
        'reports.recent': 'Recent Reports',
        'reports.download': 'Download',
        'reports.view': 'View',
        'reports.share': 'Share',
        
        // Profile
        'profile.title': 'Settings & Profile',
        'profile.days': 'Days Active',
        'profile.reports': 'Reports Generated',
        'profile.devices': 'Devices Managed',
        'profile.account': 'Account Information',
        'profile.account.subtitle': 'Manage your account details',
        'profile.fullname': 'Full Name',
        'profile.email': 'Email',
        'profile.position': 'Position',
        'profile.phone': 'Phone Number',
        'profile.save': 'Save Changes',
        'profile.preferences': 'Preferences',
        'profile.preferences.subtitle': 'Customize your experience',
        'profile.language': 'Language',
        'profile.timezone': 'Time Zone',
        'profile.theme': 'Dark Mode',
        'profile.theme.desc': 'Enable dark theme',
        'profile.notifications': 'Email Notifications',
        'profile.notifications.desc': 'Receive email updates',
        'profile.auto': 'Auto Refresh',
        'profile.auto.desc': 'Automatically refresh dashboard',
        'profile.security': 'Security',
        'profile.security.subtitle': 'Manage your security settings',
        'profile.password': 'Change Password',
        'profile.password.desc': 'Last changed 2 months ago',
        'profile.2fa': 'Two-Factor Authentication',
        'profile.2fa.desc': 'Not enabled',
        'profile.sessions': 'Login History',
        'profile.sessions.desc': 'View active sessions',
        'profile.enable': 'Enable',
        'profile.change': 'Change',
        'profile.view': 'View',
        
        // Common
        'common.status': 'Status',
        'common.active': 'Active',
        'common.online': 'Online',
        'common.offline': 'Offline',
        'common.viewall': 'View All',
        'common.ago': 'ago',
        'common.minutes': 'minutes',
        'common.hours': 'hours',
        'common.days': 'days',
        'common.saved': 'Settings saved successfully!',
        'common.error': 'An error occurred. Please try again.',
    },
    vi: {
        // Login Page
        'login.title': 'Hệ Thống Quản Lý Năng Lượng',
        'login.subtitle': 'Giám sát và tối ưu hóa tiêu thụ năng lượng của bạn',
        'login.email': 'Địa chỉ Email',
        'login.password': 'Mật khẩu',
        'login.remember': 'Ghi nhớ đăng nhập',
        'login.button': 'Đăng nhập',
        'login.footer': 'Hệ Thống Quản Lý Năng Lượng © 2024',
        
        // Sidebar
        'sidebar.dashboard': 'Trang chủ',
        'sidebar.analytics': 'Phân tích nâng cao',
        'sidebar.config': 'Cấu hình',
        'sidebar.reports': 'Báo cáo',
        'sidebar.profile': 'Cài đặt & Hồ sơ',
        'sidebar.logout': 'Đăng xuất',
        
        // Dashboard
        'dashboard.title': 'Bảng Điều Khiển Năng Lượng',
        'dashboard.energy': 'Tổng Năng Lượng',
        'dashboard.power': 'Công Suất Hiện Tại',
        'dashboard.cost': 'Chi Phí Tháng',
        'dashboard.efficiency': 'Hiệu Suất',
        'dashboard.consumption': 'Tiêu Thụ Năng Lượng',
        'dashboard.devices': 'Trạng Thái Thiết Bị',
        'dashboard.alerts': 'Cảnh Báo Gần Đây',
        'dashboard.actions': 'Thao Tác Nhanh',
        'dashboard.distribution': 'Phân Bổ Năng Lượng',
        'dashboard.device.ac': 'Điều Hòa Không Khí',
        'dashboard.device.lighting': 'Hệ Thống Chiếu Sáng',
        'dashboard.device.hvac': 'Hệ Thống HVAC',
        'dashboard.action.report': 'Tạo Báo Cáo',
        'dashboard.action.optimize': 'Tối Ưu Cài Đặt',
        'dashboard.action.schedule': 'Lên Lịch Bảo Trì',
        'dashboard.action.export': 'Xuất Dữ Liệu',
        'dashboard.alert.consumption': 'Phát hiện tiêu thụ năng lượng cao tại Tòa nhà A',
        'dashboard.alert.offline': 'Thiết bị AC-101 đang ngoại tuyến',
        'dashboard.alert.maintenance': 'Bảo trì đã lên lịch vào ngày mai',
        
        // Analytics
        'analytics.title': 'Phân Tích Nâng Cao',
        'analytics.co2': 'CO₂ Tiết Kiệm',
        'analytics.avg': 'TB/Giờ',
        'analytics.trees': 'Cây Cần Trồng',
        'analytics.carbon': 'Cường Độ Carbon',
        'analytics.trends': 'Xu Hướng Tiêu Thụ',
        'analytics.peak': 'Phân Tích Giờ Cao Điểm',
        'analytics.insights': 'Thông Tin AI',
        'analytics.cost': 'Chi Phí Chi Tiết',
        'analytics.insight1': 'Sử dụng cao điểm vào 9-11 giờ sáng. Xem xét điều chỉnh tải.',
        'analytics.insight2': 'Hiệu suất HVAC giảm 15%. Khuyến nghị bảo trì.',
        'analytics.insight3': 'Tự động hóa chiếu sáng tiết kiệm 230 kWh tháng này.',
        'analytics.cost.hvac': 'Hệ Thống HVAC',
        'analytics.cost.lighting': 'Chiếu Sáng',
        'analytics.cost.equipment': 'Thiết Bị',
        'analytics.cost.total': 'Tổng Chi Phí',
        
        // Configuration
        'config.title': 'Cấu Hình',
        'config.tab.devices': 'Thiết Bị',
        'config.tab.alerts': 'Cảnh Báo',
        'config.tab.thresholds': 'Ngưỡng',
        'config.tab.system': 'Hệ Thống',
        'config.device.ac': 'Máy Điều Hòa',
        'config.device.lighting': 'Đèn Thông Minh',
        'config.device.hvac': 'Bộ Điều Khiển HVAC',
        'config.alert.email': 'Thông Báo Email',
        'config.alert.email.desc': 'Nhận cảnh báo qua email',
        'config.alert.push': 'Thông Báo Đẩy',
        'config.alert.push.desc': 'Nhận thông báo thời gian thực',
        'config.alert.high': 'Cảnh Báo Tiêu Thụ Cao',
        'config.alert.high.desc': 'Cảnh báo khi vượt ngưỡng',
        'config.alert.device': 'Cảnh Báo Trạng Thái Thiết Bị',
        'config.alert.device.desc': 'Thông báo khi thiết bị ngoại tuyến',
        'config.system.company': 'Tên Công Ty',
        'config.system.timezone': 'Múi Giờ',
        'config.system.currency': 'Đơn Vị Tiền Tệ',
        'config.system.rate': 'Giá Điện',
        'config.system.save': 'Lưu Cài Đặt',
        
        // Reports
        'reports.title': 'Báo Cáo',
        'reports.subtitle': 'Tạo và quản lý báo cáo',
        'reports.daily': 'Báo Cáo Hàng Ngày',
        'reports.daily.desc': 'Phân tích tiêu thụ và chi phí năng lượng hàng ngày',
        'reports.monthly': 'Tóm Tắt Tháng',
        'reports.monthly.desc': 'Báo cáo hiệu suất tháng toàn diện',
        'reports.environmental': 'Tác Động Môi Trường',
        'reports.environmental.desc': 'Chỉ số dấu chân carbon và bền vững',
        'reports.device': 'Hiệu Suất Thiết Bị',
        'reports.device.desc': 'Phân tích hiệu quả từng thiết bị',
        'reports.generate': 'Tạo',
        'reports.recent': 'Báo Cáo Gần Đây',
        'reports.download': 'Tải xuống',
        'reports.view': 'Xem',
        'reports.share': 'Chia sẻ',
        
        // Profile
        'profile.title': 'Cài Đặt & Hồ Sơ',
        'profile.days': 'Ngày Hoạt Động',
        'profile.reports': 'Báo Cáo Đã Tạo',
        'profile.devices': 'Thiết Bị Quản Lý',
        'profile.account': 'Thông Tin Tài Khoản',
        'profile.account.subtitle': 'Quản lý chi tiết tài khoản',
        'profile.fullname': 'Họ và Tên',
        'profile.email': 'Email',
        'profile.position': 'Chức Vụ',
        'profile.phone': 'Số Điện Thoại',
        'profile.save': 'Lưu Thay Đổi',
        'profile.preferences': 'Tùy Chọn',
        'profile.preferences.subtitle': 'Tùy chỉnh trải nghiệm của bạn',
        'profile.language': 'Ngôn Ngữ',
        'profile.timezone': 'Múi Giờ',
        'profile.theme': 'Chế Độ Tối',
        'profile.theme.desc': 'Bật giao diện tối',
        'profile.notifications': 'Thông Báo Email',
        'profile.notifications.desc': 'Nhận cập nhật qua email',
        'profile.auto': 'Tự Động Làm Mới',
        'profile.auto.desc': 'Tự động làm mới bảng điều khiển',
        'profile.security': 'Bảo Mật',
        'profile.security.subtitle': 'Quản lý cài đặt bảo mật',
        'profile.password': 'Đổi Mật Khẩu',
        'profile.password.desc': 'Đã đổi 2 tháng trước',
        'profile.2fa': 'Xác Thực Hai Yếu Tố',
        'profile.2fa.desc': 'Chưa bật',
        'profile.sessions': 'Lịch Sử Đăng Nhập',
        'profile.sessions.desc': 'Xem phiên đang hoạt động',
        'profile.enable': 'Bật',
        'profile.change': 'Đổi',
        'profile.view': 'Xem',
        
        // Common
        'common.status': 'Trạng Thái',
        'common.active': 'Hoạt Động',
        'common.online': 'Trực Tuyến',
        'common.offline': 'Ngoại Tuyến',
        'common.viewall': 'Xem Tất Cả',
        'common.ago': 'trước',
        'common.minutes': 'phút',
        'common.hours': 'giờ',
        'common.days': 'ngày',
        'common.saved': 'Lưu cài đặt thành công!',
        'common.error': 'Đã xảy ra lỗi. Vui lòng thử lại.',
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language
function initLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    updatePageLanguage();
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    showNotification(
        lang === 'vi' ? 'Đã chuyển sang tiếng Việt' : 'Changed to English',
        'success'
    );
}

// Update all text elements
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = translations[currentLanguage][key];
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'password') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
