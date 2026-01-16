# VLU Energy Management System

**Student Name:** Hồ Du Tuấn Đạt  
**Student ID:** 2374802010097  
**Course:** User Interface & User Experience Design  
**Institution:** Van Lang University (VLU)

---

## Project Overview

VLU energy is a comprehensive, modern web-based Energy Management System designed to monitor, analyze, and optimize energy consumption in real-time. This front-end application provides an intuitive dashboard for system administrators and energy managers to track energy usage, manage devices, generate reports, and configure system settings.

The application features a clean, professional interface with a green-themed color palette, emphasizing sustainability and environmental consciousness. It includes multi-language support (English/Vietnamese), responsive design, and smooth animations for an enhanced user experience.

---

## Design Theme

### Color Palette

The application uses a **Green Energy Theme** that reflects environmental sustainability:

- **Primary Color:** `#2d5a3d` - Deep forest green (main brand color)
- **Primary Light:** `#6ec969` - Fresh light green (accents and highlights)
- **Primary Dark:** `#1a3a24` - Dark green (hover states and shadows)
- **Secondary Color:** `#f5f7fa` - Light gray (backgrounds)
- **Text Colors:**
  - Primary: `#2c3e50` - Dark slate
  - Light: `#7f8c8d` - Medium gray
  - Muted: `#95a5a6` - Light gray
- **Accent Colors:**
  - Success: `#27ae60` - Green
  - Warning: `#f39c12` - Orange
  - Error: `#e74c3c` - Red
  - Info: `#3498db` - Blue

### Typography

- **Font Family:** System fonts stack (SF Pro Display, Segoe UI, Roboto, Helvetica, Arial)
- **Font Sizes:** 
  - Headings: 20px - 28px
  - Body: 14px - 16px
  - Small text: 11px - 13px
- **Font Weights:** 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)

### Design Principles

- **Clean & Modern:** Minimalist design with ample white space
- **Card-Based Layout:** Content organized in distinct cards with shadows
- **Consistent Spacing:** 8px grid system for padding and margins
- **Smooth Animations:** Transitions (0.3s ease) and entrance animations
- **Iconography:** Font Awesome 6.4.0 for consistent icons
- **Responsive Design:** Mobile-first approach with breakpoints at 768px, 480px

---

## Application Structure

### Pages Overview

The application consists of **6 main sections**:

#### 1. **Login Page** (`#login`)
The entry point of the application featuring:
- Split-screen layout with form on left, illustration on right
- Email and password authentication
- "Remember me" checkbox functionality
- Gradient background with animated effects
- Form validation and error handling
- Responsive design for mobile devices

**Features:**
- LocalStorage-based session management
- Animated login form with floating labels
- Icon-enhanced input fields
- Smooth transition to dashboard after successful login

<img width="3037" height="1655" alt="image" src="https://github.com/user-attachments/assets/1bba1ecd-72a7-4153-81d1-5ee1b7754a29" />

---

#### 2. **Dashboard** (`#dashboard`)
The main control center displaying real-time energy metrics:

**Layout:**
- **Header Section:** 
  - Personalized greeting with user name
  - Current date and time display
  
- **Quick Stats Grid (4 cards):**
  - Total Energy (kWh)
  - Current Power (kVA)
  - Monthly Cost (USD)
  - Efficiency (Power Factor)

- **Main Content Grid (2 columns):**
  - **Left Column:**
    - Energy Consumption Chart (line chart with 24-hour data)
    - Device Status List (3 devices with online/offline status)
  
  - **Right Column:**
    - Energy Distribution (pie chart)
    - Recent Alerts (3 latest notifications)

- **Quick Actions Section (full width):**
  - Generate Report
  - Optimize Settings
  - Schedule Maintenance
  - Export Data

**Key Features:**
- Real-time data visualization
- Color-coded status indicators
- Interactive hover effects
- Responsive grid layout

<img width="1964" height="1656" alt="image" src="https://github.com/user-attachments/assets/d76758e9-0e84-4315-a786-d15405edc4d7" />

---

#### 3. **Advanced Analytics** (`#analytics`)
Comprehensive analytics and insights page:

**Sections:**
- **Environmental Metrics Cards (4 cards):**
  - CO₂ Saved (green)
  - Average per Hour (blue)
  - Trees Needed (yellow)
  - Carbon Intensity (orange)

- **Analytics Grid (2 columns):**
  - **Left:** 
    - Consumption Trends (bar chart showing monthly data)
    - Peak Hours Analysis (6 time slots with consumption levels)
  
  - **Right:**
    - AI-Powered Insights (3 insight cards with recommendations)
    - Cost Breakdown (detailed cost distribution)

**Features:**
- Color-coded metrics by category
- Interactive bar chart visualization
- Peak hour indicators (low/medium/high)
- AI-generated recommendations
- Percentage-based cost analysis

<img width="2385" height="1655" alt="image" src="https://github.com/user-attachments/assets/52a11e7f-c017-4572-9941-e5b9cab88863" />

---

#### 4. **Configuration** (`#config`)
System configuration and device management:

**Tabbed Interface (4 tabs):**
- **Devices Tab:**
  - Device configuration list (3 devices)
  - Status indicators (online/offline)
  - Quick action buttons (configure, edit, delete)

- **Alerts Tab:**
  - Toggle switches for notification preferences
  - Email notifications
  - Push notifications
  - High consumption alerts
  - Device status alerts

- **Thresholds Tab:**
  - Power threshold settings
  - Cost limit configurations
  - Alert trigger points

- **System Tab:**
  - Company name
  - Time zone selection
  - Currency settings
  - Energy rate configuration
  - Save settings button

**Features:**
- Custom toggle switches
- Form validation
- Settings persistence
- Real-time configuration updates

<img width="2363" height="1652" alt="image" src="https://github.com/user-attachments/assets/b2b14580-fe38-40e1-bfc8-635b992398cb" />

---

#### 5. **Reports** (`#reports`)
Report generation and management system:

**Sections:**
- **Report Templates Grid (4 templates):**
  - Daily Report (blue) - Daily energy consumption analysis
  - Monthly Summary (green) - Comprehensive monthly performance
  - Environmental Impact (orange) - Carbon footprint metrics
  - Device Performance (purple) - Individual device efficiency

- **Recent Reports List:**
  - Report name and metadata
  - File type icons (PDF/Excel)
  - Generated date and file size
  - Action buttons (download, view, share)

**Features:**
- One-click report generation
- Multiple export formats (PDF, Excel, CSV)
- Report templates with time estimates
- Recent reports history
- Quick action buttons

<img width="3033" height="1667" alt="image" src="https://github.com/user-attachments/assets/0700ca25-e4a6-4b90-a9b9-e10f077de7f4" />

---

#### 6. **Settings & Profile** (`#profile`)
User account management and preferences:

**Layout (Grid-based):**
- **Profile Header Card:**
  - Large avatar with initials
  - User name and position
  - Profile badges (Admin, Verified)
  - Statistics (Days Active, Reports Generated, Devices Managed)

- **Account Information Card:**
  - Full name
  - Position/Role
  - Email address (disabled field)
  - Phone number
  - Save changes button

- **Preferences Card:**
  - Language selector (English/Vietnamese)
  - Time zone selector
  - Notification frequency
  - Toggle switches for:
    - Email notifications
    - Dark mode
    - Auto refresh

- **Security Card:**
  - Change password
  - Two-factor authentication
  - Login history

**Features:**
- Profile data persistence
- Multi-language switching
- Real-time preference updates
- Security settings management

<img width="2477" height="1657" alt="image" src="https://github.com/user-attachments/assets/6119c05e-9ed1-44d0-80f9-eecceb6af2b9" />

---

## Technical Architecture

### File Structure

```
lab01/
├── index.html              # Main HTML file (single-page application)
├── css/
│   ├── style.css          # Global styles, variables, animations (400+ lines)
│   ├── login.css          # Login page specific styles (200+ lines)
│   ├── sidebar.css        # Sidebar navigation styles (250+ lines)
│   └── pages.css          # All page content styles (1900+ lines)
├── js/
│   ├── script.js          # Utility functions (notifications)
│   ├── login.js           # Authentication logic
│   ├── sidebar.js         # Sidebar toggle and logout
│   ├── navigation.js      # Page switching and routing
│   ├── profile.js         # Profile data management
│   └── language.js        # Multi-language support system
├── components/            # (Future modular components)
└── pages/                 # (Future page templates)
```

### Technology Stack

#### Frontend Technologies
- **HTML5:** Semantic markup with accessibility attributes
- **CSS3:** 
  - Custom properties (CSS variables) for theming
  - Flexbox and Grid for layouts
  - Animations and transitions
  - Media queries for responsiveness
- **Vanilla JavaScript (ES6+):**
  - No frameworks or libraries
  - Modern ES6+ features (arrow functions, template literals, destructuring)
  - DOM manipulation
  - Event handling
  - LocalStorage API

#### External Dependencies
- **Font Awesome 6.4.0:** Icon library (CDN)
- **Google Fonts:** (Optional, currently using system fonts)

### Key Features Implementation

#### 1. **Single-Page Application (SPA)**
- All pages contained in one HTML file
- JavaScript-based routing
- Dynamic content loading without page refresh
- Smooth page transitions

#### 2. **State Management**
- LocalStorage for data persistence:
  - User authentication status
  - User profile information (email, name, position)
  - Language preference
  - Sidebar state (expanded/collapsed)

#### 3. **Multi-Language Support**
- **Languages:** English (default), Vietnamese
- **Implementation:** 
  - Translation object with 100+ string keys
  - `data-lang` attributes on HTML elements
  - Dynamic text replacement on language change
  - LocalStorage persistence
- **Coverage:** All UI text including labels, buttons, messages, placeholders

#### 4. **Responsive Design**
- **Breakpoints:**
  - Desktop: > 768px
  - Tablet: 481px - 768px
  - Mobile: ≤ 480px
- **Adaptive Elements:**
  - Collapsible sidebar
  - Grid to single-column layouts
  - Stacked cards on mobile
  - Responsive typography

#### 5. **Component System**

##### Cards
- `.dashboard-card` - Standard content container
- `.stat-card` - Metric display cards
- `.analytics-card` - Analytics metric cards
- `.report-template-card` - Report template cards

##### Forms
- `.form-group` - Input field wrapper
- `.form-group-profile` - Profile form fields
- `.toggle-switch` - Custom checkbox toggle
- `.form-grid` - Two-column form layout

##### Navigation
- `.sidebar` - Main navigation panel
- `.nav-item` - Navigation menu items
- `.nav-icon` - Icon containers
- `.nav-label` - Text labels

##### Buttons
- `.btn-login` - Primary login button
- `.btn-primary-full` - Full-width primary button
- `.btn-primary-small` - Small primary button
- `.btn-secondary-small` - Small secondary button
- `.btn-icon-small` - Icon-only button

##### Data Visualization
- `.pie-chart` - Pie chart container
- `.line-chart` - Line chart container
- `.bar-chart` - Bar chart container
- `.chart-box` - Chart wrapper with header

---

## User Experience Features

### 1. **Animation & Micro-interactions**
- **Entrance Animations:**
  - `fadeIn` - Fade in effect
  - `slideInUp` - Slide from bottom
  - `slideInLeft` - Slide from left
- **Hover Effects:**
  - Card lift on hover
  - Button color transitions
  - Icon scale animations
- **Transitions:**
  - 0.3s ease for most interactions
  - 0.4s for page switches
  - Smooth sidebar collapse/expand

### 2. **Notification System**
- Toast-style notifications
- Color-coded by type (success, error, warning, info)
- Auto-dismiss after 3 seconds
- Slide-in animation from top
- Icon indicators

### 3. **Interactive Elements**
- Sidebar expand/collapse toggle
- Active page highlighting
- Device status indicators
- Toggle switches with animation
- Clickable stat cards
- Action buttons with hover effects

### 4. **Accessibility**
- Semantic HTML structure
- ARIA labels and roles (to be enhanced)
- Keyboard navigation support (Ctrl+1-5 for pages)
- High contrast ratios
- Focus indicators
- Icon + text labels

---

## Data Visualization

The application includes several chart types:

1. **Line Chart** (Dashboard - Energy Consumption)
   - 24-hour energy usage
   - Gradient fill under line
   - Interactive data points

2. **Pie Chart** (Dashboard - Energy Distribution)
   - Device-wise energy breakdown
   - Color-coded segments
   - Percentage labels

3. **Bar Chart** (Analytics - Consumption Trends)
   - Monthly comparison bars
   - Hover effects
   - Value labels

4. **Peak Hours Grid** (Analytics)
   - 6 time slots
   - Color indicators (low/medium/high)
   - Consumption values

---

## Security Features

- Client-side form validation
- Password field masking
- Email format validation
- Session management via LocalStorage
- Logout functionality with session clearing
- Disabled fields for sensitive data (email)

---

## Browser Compatibility

- **Supported Browsers:**
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- **Features Used:**
  - CSS Grid and Flexbox
  - CSS Custom Properties
  - ES6+ JavaScript
  - LocalStorage API
  - Font Awesome icons

---

## Responsive Breakpoints

### Desktop (> 768px)
- Full sidebar with text labels
- Multi-column grid layouts
- Expanded charts and graphs
- All features visible

### Tablet (481px - 768px)
- Collapsed sidebar (icons only)
- Two-column layouts convert to single
- Reduced card padding
- Smaller font sizes

### Mobile (≤ 480px)
- Icon-only sidebar
- Single-column layouts
- Stacked stat cards
- Simplified navigation
- Touch-optimized buttons

---

## Performance Optimizations

- **CSS:**
  - Modular CSS files for better caching
  - Minimized repaints with transform/opacity
  - Hardware-accelerated animations
  
- **JavaScript:**
  - Event delegation where applicable
  - Debounced scroll/resize handlers
  - Efficient DOM queries
  
- **Assets:**
  - Font Awesome CDN with caching
  - System fonts (no web font loading)
  - Optimized SVG icons

---

## State Management Flow

```
User Login → Check LocalStorage → Authenticate → Store Session Data
   ↓
Load Dashboard → Initialize Page → Bind Event Listeners
   ↓
User Interaction → Update UI → Save to LocalStorage
   ↓
Language Change → Update All data-lang Elements → Persist Preference
   ↓
Logout → Clear Session → Return to Login
```

---

## Code Quality & Standards

### CSS Methodology
- **BEM-inspired naming** (Block__Element--Modifier)
- Consistent naming conventions
- CSS custom properties for theming
- Mobile-first media queries
- Modular file organization

### JavaScript Patterns
- Pure functions for utilities
- Event-driven architecture
- Clear function naming
- Comments for complex logic
- Error handling for user inputs

### HTML Best Practices
- Semantic HTML5 elements
- Consistent indentation
- Descriptive class names
- Data attributes for JavaScript hooks
- Accessibility considerations

---

## Learning Outcomes

This project demonstrates proficiency in:

1. **UI/UX Design Principles:**
   - Visual hierarchy
   - Color theory application
   - Typography and spacing
   - User-centered design
   - Consistency and patterns

2. **Frontend Development:**
   - Semantic HTML structure
   - Advanced CSS layouts (Grid, Flexbox)
   - Vanilla JavaScript programming
   - DOM manipulation
   - State management

3. **Responsive Design:**
   - Mobile-first approach
   - Flexible layouts
   - Media queries
   - Touch optimization

4. **Web Standards:**
   - W3C HTML5 compliance
   - CSS3 modern features
   - ES6+ JavaScript
   - Cross-browser compatibility

---

## Future Enhancements

Potential improvements for future versions:

- [ ] Backend integration with REST API
- [ ] Real-time data updates via WebSocket
- [ ] Chart.js or D3.js for advanced visualizations
- [ ] Dark mode theme toggle
- [ ] Progressive Web App (PWA) capabilities
- [ ] Export functionality for reports
- [ ] Advanced filtering and search
- [ ] User role management
- [ ] Notification center
- [ ] Mobile app version

---


## Developer

**Hồ Du Tuấn Đạt**  
Student ID: 2374802010097  
Van Lang University - User Interface & User Experience Design  
January 2026

---

## Acknowledgments

- Van Lang University for the UI/UX Design course
- Font Awesome for the comprehensive icon library
- The web development community for best practices and inspiration

---

*Last Updated: January 16, 2026*
