# 🎬 Studio Ghibli API

*Leia isso em Português: [🇧🇷 Português](README.pt-br.md)*

## 📝 Project Description 

This is a React TypeScript project that consumes the **Studio Ghibli public API** to create an interactive web application. The project displays the **10 first Studio Ghibli films in alphabetical order** with a modern, responsive interface. Users can click on any film to view its complete details, including description, director, producer, release date, and Rotten Tomatoes score.

This project was developed as a **challenge to practice React, TypeScript, Tailwind CSS, React Router, and API consumption skills**.

## 🔎 Features

- **Responsive design** for all devices
- **API consumption** using the Ghibli API (`https://ghibliapi.vercel.app/films`)
- **10 films sorted alphabetically** by title
- **Home page** displaying film posters and titles
- **Detail page** with complete film information
- **Loading animation** with custom GIF indicator
- **Client-side routing** using React Router
- **Fully typed with TypeScript** for type safety
- **Styled with Tailwind CSS** for modern, clean UI
- **Link back to home** from detail page
- **Hover effects** with scale transitions on film cards

## 🛠️ Tools & Technologies Used

- **React:** UI library for building components
- **TypeScript:** Static typing for JavaScript
- **Vite:** Build tool and development server
- **React Router DOM:** Client-side navigation
- **Tailwind CSS:** Utility-first CSS framework
- **Fetch API:** HTTP requests to consume the API
- **Git:** Version control

## 💡 Project Decisions

1. **Separation of Concerns**
   - Created separate components: `Home`, `FilmDetail`, `Header`, and `Layout`
   - Each component has a single responsibility for easier maintenance and testing

2. **State Management**
   - Used `useState` hook for managing films and loading state
   - Implemented `isLoading` state to handle loading UI during API calls

3. **API Request Handling**
   - Used `useEffect` hook to fetch data when component mounts
   - Implemented error handling with `try-catch` blocks
   - Added `.finally()` to ensure loading state is always updated

4. **TypeScript Interface**
   - Created a `Movie` interface to type API responses
   - Ensures data consistency and prevents runtime errors

5. **Styling**
   - Used Tailwind CSS utility classes for responsive design
   - Implemented custom gap and width calculations with `flex-wrap` for 5 films per row

6. **Routing Strategy**
   - Used React Router's `useParams` hook to handle dynamic film IDs
   - Implemented `Link` component for client-side navigation

## 📁 Project Structure

```
studio-ghibli-api/
│
├── src/
│   ├── assets/
│   │   ├── catbus-loading.gif
│   │   ├── favicon.png
│   │   ├── studio-ghibli.png
│   │   ├── studio-ghibli.svg
│   │   └── studio-shibli-logo-secondary.png
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   └── index.tsx          # Header component with navigation
│   │   └── Layout/
│   │       └── index.tsx          # Main layout wrapper with Header and Outlet
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── index.tsx          # Film listing page
│   │   └── FilmDetail/
│   │       └── index.tsx          # Individual film details page
│   │
│   ├── routes/
│   │   └── index.tsx              # Route configuration with React Router
│   │
│   ├── styles/
│   │   └── globals.css            # Global styles and Tailwind imports
│   │
│   ├── App.tsx                    # Main app component with router setup
│   └── main.tsx                   # React DOM render entry point
│
├── public/
│   └── favicon.ico                # Website favicon
│
├── index.html                     # HTML entry point
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json              # App-specific TS config
├── tsconfig.node.json             # Build tool TS config
├── vite.config.ts                 # Vite configuration
├── package.json                   # Project dependencies and scripts
└── README.md                       # This file
```

### Folder Organization Details

- **`src/assets/`** - Images, GIFs, and other static resources used throughout the application
- **`src/components/`** - Reusable React components (Header, Layout)
- **`src/pages/`** - Page-level components representing different routes
- **`src/routes/`** - React Router configuration and route definitions
- **`src/styles/`** - Global CSS and styling configuration

## 💦 Challenges Faced

- **Understanding TypeScript generics** for typing the `useParams` hook
- **Implementing conditional rendering** based on loading state: the first 10 movies in alphabetical order
- **Handling dynamic routes** and passing IDs through URL parameters
- **CSS layout flex** to display using flex on screens of various sizes
- **Styling responsiveness** for mobile and desktop views
- **Using Tailwind CSS** using Tailwind CSS framework to build a responsive and modern website

## 🔓 What I Learned

- How to consume REST APIs using the Fetch API in React
- TypeScript interface definitions and type safety in React components
- Using `useParams` and `useEffect` hooks for data fetching and routing
- Conditional rendering patterns in React
- Responsive design with Tailwind CSS and flexbox
- React Router DOM for client-side navigation
- Error handling and loading states in async operations
- Component composition and separation of concerns

## 💭 Possible Future Updates

- ✅ Complete basic project structure and routing
- Add film search/filter functionality
- Implement film sorting options (by year, rating, director)
- Add a favorites/bookmark feature using localStorage
- Create a carousel component for featured films
- Add animation transitions between pages
- Implement dark/light theme toggle
- Add internationalization (English/Portuguese/Spanish)
- Create a detailed cast and crew section
- Add film reviews or ratings from other sources
- Optimize images and implement lazy loading
- Add unit and integration tests

## 🚀 How to Run the Project

Follow the steps below to run the project on your machine:

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cezarviana/studio-ghibli-api.git
   cd studio-ghibli-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The application will be available at `http://localhost:5173` (or the URL shown in terminal)
   - Open the URL in your web browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)