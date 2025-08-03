# BrewCraft ☕ - Premium Coffee Shop Application

A modern, responsive React-based coffee shop application that allows users to explore premium coffee collections, manage favorites, place orders, and discover their perfect coffee experience.

## 🌟 Features

### 🏠 **Home Page**
- **Hero Section** with stunning banner and call-to-action
- **Category Browse** - Explore coffees by different categories
- **Featured Coffee Cards** displaying popular selections
- **Responsive Design** optimized for all devices

### ☕ **Coffee Exploration**
- **Complete Coffee Catalog** with detailed information
- **Category Filtering** - Filter by coffee types and origins
- **Advanced Sorting** - Sort by popularity and rating
- **Search & Discovery** tools for finding the perfect brew

### 📋 **Coffee Details**
- **Comprehensive Information** including ingredients, nutrition facts, and brewing instructions
- **Interactive Rating System** with star displays
- **Order Placement** with customizable size and quantity options
- **Related Recommendations** based on category preferences

### 💖 **Favorites Dashboard**
- **Personal Collection** management with local storage
- **Statistics Overview** - Total favorites, premium picks, and average ratings
- **Easy Management** - Add/remove favorites with toast notifications
- **Visual Analytics** displaying your coffee preferences

### 🔐 **Authentication System**
- **Email/Password Registration** with strong password validation
- **Google OAuth Integration** for seamless sign-in
- **Protected Routes** for authenticated features
- **User Session Management**

### 🛒 **Ordering System**
- **Interactive Order Forms** with size and quantity selection
- **Customer Information Collection**
- **Order Confirmation** with detailed summaries
- **Price Calculation** based on selections

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **React Router v6** - Client-side routing with nested routes
- **React Context API** - Global state management for authentication

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **Lucide React** - Beautiful, customizable icons
- **Gradient Design System** - Modern color schemes and animations

### **Authentication**
- **Firebase Authentication** - Secure user authentication
- **Google OAuth Provider** - Social login integration
- **Protected Route System** - Route-level authentication guards

### **Data Management**
- **Local Storage** - Client-side data persistence for favorites
- **JSON Data Sources** - Static data files for coffee and category information
- **React Hot Toast** - Elegant notification system

### **Development Tools**
- **React Loader Data** - Efficient data fetching patterns
- **Component-based Architecture** - Modular and reusable components
- **Responsive Design Patterns** - Mobile-first approach

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Card.jsx         # Coffee card component
│   ├── Categories.jsx   # Category selection component
│   ├── CoffeeCard.jsx   # Coffee display card
│   ├── Heading.jsx      # Section heading component
│   └── Spinner.jsx      # Loading spinner component
├── pages/               # Main application pages
│   ├── Home.jsx         # Landing page with hero section
│   ├── Coffees.jsx      # Coffee catalog with filtering
│   ├── Dashboard.jsx    # User favorites management
│   ├── CoffeeDetails.jsx # Detailed coffee information
│   ├── SignIn/          # Authentication pages
│   │   └── Signin.jsx
│   ├── SignUp/
│   │   └── SignUp.jsx
│   └── PrivateRoute/
│       └── PrivateRoute.jsx
├── layout/              # Application layout components
│   └── MainLayout.jsx   # Main application wrapper
├── utils/               # Utility functions
│   └── index.js         # Local storage management
├── routes/              # Application routing
│   └── Routes.jsx       # Route configuration
└── assets/              # Static assets
    └── banner.jpg       # Hero section banner image
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account for authentication setup

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brewcraft-coffee-shop.git
   cd brewcraft-coffee-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication with Email/Password and Google providers
   - Copy your Firebase config and add to your environment variables

4. **Create environment file**
   ```bash
   # Create .env file in root directory
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📊 Data Structure

### **Coffee Object Schema**
```javascript
{
  id: number,
  name: string,
  image: string,
  category: string,
  origin: string,
  type: string,
  rating: number,
  popularity: number,
  description: string,
  ingredients: string[],
  nutrition_info: {
    calories: number,
    fat: number,
    carbohydrates: number,
    protein: number
  },
  making_process: string
}
```

### **Category Object Schema**
```javascript
{
  category: string,
  description: string,
  image: string
}
```

## 🔧 Key Features Implementation

### **Authentication Flow**
- **Sign Up**: Email validation with strong password requirements
- **Sign In**: Email/password and Google OAuth options
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Session Persistence**: User state maintained across browser sessions

### **Favorites Management**
- **Local Storage**: Client-side persistence for user preferences
- **Toast Notifications**: Real-time feedback for user actions
- **Statistics Calculation**: Dynamic analytics on user's favorite collection

### **Responsive Design**
- **Mobile-First**: Optimized for mobile devices with desktop enhancements
- **Grid Layouts**: Responsive grid systems for different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions

### **Order System**
- **Dynamic Pricing**: Real-time price calculation based on size and quantity
- **Form Validation**: Client-side validation for required fields
- **Order Confirmation**: Detailed order summaries with customer information

## 🎨 Design System

### **Color Palette**
- **Primary**: Amber to Orange gradients (`from-amber-400 to-orange-600`)
- **Secondary**: Pink to Rose accents (`from-pink-50 to-rose-50`)
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green tones for confirmations
- **Error**: Red tones for warnings

### **Typography**
- **Headings**: Bold, gradient text effects
- **Body Text**: Clean, readable font families
- **Interactive Text**: Color transitions on hover states

### **Spacing & Layout**
- **Consistent Spacing**: Tailwind's spacing scale (4, 6, 8, 12, etc.)
- **Grid Systems**: Responsive grid layouts
- **Container Widths**: Max-width containers for content

## 🔒 Security Features

### **Authentication Security**
- **Firebase Security Rules**: Server-side validation
- **Password Requirements**: Complex password validation
- **OAuth Integration**: Secure third-party authentication
- **Session Management**: Automatic token refresh

### **Data Protection**
- **Client-side Validation**: Input sanitization
- **Local Storage Encryption**: Secure data storage
- **XSS Protection**: React's built-in protections

## 📱 Responsive Breakpoints

- **Mobile**: `sm:` - 640px and up
- **Tablet**: `md:` - 768px and up  
- **Desktop**: `lg:` - 1024px and up
- **Large Desktop**: `xl:` - 1280px and up

## 🧪 Testing Considerations

### **Unit Testing**
- Component rendering tests
- Function utility tests
- Authentication flow tests

### **Integration Testing**
- User interaction flows
- API integration tests
- Route navigation tests

### **E2E Testing**
- Complete user journeys
- Cross-browser compatibility
- Mobile responsiveness

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
# or
yarn build
```

### **Deployment Options**
- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Zero-configuration deployment for React apps
- **Firebase Hosting**: Integrated hosting with Firebase services
- **AWS S3**: Static website hosting with CloudFront CDN

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling consistency
- Write descriptive commit messages
- Add comments for complex logic
- Test new features thoroughly

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/brewcraft-coffee-shop/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/brewcraft-coffee-shop/discussions)
- **Email**: your.email@example.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Firebase** for authentication services
- **Lucide** for beautiful icons
- **Coffee Community** for inspiration

---

**Built with ❤️ and ☕ by [Your Name]**

*Discover your perfect coffee experience with BrewCraft!*
