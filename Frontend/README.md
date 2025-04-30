# Ride-Sharing Application Frontend

This is the frontend implementation of a ride-sharing application built with React and Vite. The application handles both user and captain (driver) functionalities including registration, authentication, and profile management.

## Tech Stack

- **React** - UI Library
- **Vite** - Build Tool and Development Server
- **Tailwind CSS** - Utility-first CSS Framework
- **Axios** - HTTP Client
- **React Router** - Client-side Routing

## Features

### User Management
- User Registration
- User Login/Logout
- User Profile Management

### Captain Management
- Captain Registration with Vehicle Details
- Captain Login/Logout
- Captain Profile Management

### Vehicle Types Supported
- Car
- Motorcycle
- Auto

## API Integration

The frontend communicates with a backend server running on port 3000. API requests are proxied through Vite's development server to avoid CORS issues.

### Proxy Configuration
```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
}
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Environment Setup

Make sure your backend server is running on `http://localhost:3000` before starting the frontend application.

## Development

The application uses:
- HMR (Hot Module Replacement) for fast refresh during development
- ESLint for code quality
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

