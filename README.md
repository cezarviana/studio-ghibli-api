# 🎬 Studio Ghibli API

*Leia isso em Português: [🇧🇷 Português](README.pt-br.md)*

## 📝 Project Description

This project is a React + TypeScript application that consumes the public **Studio Ghibli API** to display a modern and interactive catalog of films. The app shows the first 10 films in alphabetical order and allows the user to view the complete details of each one.

The goal is to practice and apply concepts such as **React components**, **state management**, **routing**, **Tailwind styling**, **API integration**, and **TypeScript typing**.

## 🎨 Project Visual

<div align="center">
   <div align="center">
   <img src="./src/assets/desktop.gif"  style="height: 300px; text-align: center;"> 
   <br><br>
   <img src="./src/assets/mobile.gif"  style="height: 300px; text-align: center;"> <br>
   </div>
</div>

## 🔎 Features

- Responsive interface for desktop and mobile screens
- Fetching data from the official Ghibli API
- Alphabetical film ordering by title
- Film cards on the home page
- Dynamic detail page for each movie
- Reusable loading component while data is being fetched
- Reusable API service functions for list and detail requests
- React Router navigation using URL params
- Type-safe data structure with TypeScript
- Tailwind CSS styling for modern UI
- Back-to-home navigation from the detail page

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Fetch API
- Git

## 💡 Project Decisions

1. **Component organization**
   - Created dedicated components for structure and reuse, such as `Header`, `Footer`, `Layout`, and `Loading`
   - Each section has a clear responsibility for easier maintenance

2. **State management**
   - `useState` is used to control list and detail data
   - Loading state is used to display a loading indicator during API requests

3. **Service layer**
   - Reusable functions were extracted to `src/services/movies.ts`
   - This avoids repeating `fetch` logic in multiple pages

4. **API logic reuse**
   - `getMovies()` fetches the catalog
   - `getMovieById(id)` fetches a single movie by ID
   - Both functions are reused in the Home and FilmDetail pages

5. **Type safety**
   - A `Movie` type is used to define the structure of the API response
   - This reduces runtime bugs and improves development safety

6. **Routing**
   - Dynamic routes are handled with `useParams()`
   - Navigation is done with `Link` from React Router

## 📁 Project Structure

```bash
studio-ghibli-api/
├── src/
│   ├── assets/
│   │   ├── catbus-loading.gif
│   │   ├── studio-ghibli.png
│   │   └── studio-shibli-logo-secondary.png
│   │
│   ├── components/
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   ├── Header/
│   │   │   └── index.tsx
│   │   ├── Layout/
│   │   │   └── index.tsx
│   │   └── Loading/
│   │       └── loading.tsx
│   │
│   ├── pages/
│   │   ├── FilmDetail/
│   │   │   └── index.tsx
│   │   └── Home/
│   │       └── index.tsx
│   │
│   ├── routes/
│   │   └── index.tsx
│   ├── services/
│   │   └── movies.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── movie.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── README.pt-br.md
└── .gitignore
```

### Folder purpose

- `src/assets/` — images and static media used in the app
- `src/components/` — reusable interface pieces such as header, footer, layout, and loading
- `src/pages/` — page screens such as Home and FilmDetail
- `src/routes/` — route configuration
- `src/services/` — reusable API request logic
- `src/styles/` — global styling
- `src/types/` — TypeScript interfaces and types

## 🎯 Main flow of the app

- `Home` loads the list of films from the API
- the list is sorted alphabetically and limited to the first 10
- each card links to `/film/:id`
- `FilmDetail` fetches the selected movie by ID and shows the details
- while loading, the `Loading` component appears on screen

## 💭 Future improvements

- Add search and filters
- Add sorting options by year or score
- Add favorites feature using localStorage
- Add animations between pages
- Add more detailed movie sections
- Improve accessibility and SEO
- Add tests for components and API flow

## 📌 Notes

This project is a practical example of how to combine React, TypeScript, API consumption, and route-based UI into a small but complete frontend app.

## 🚀 How to run the project

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/cezarviana/studio-ghibli-api.git
cd studio-ghibli-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install the React-Router-Dom:**

```bash
npm i react-router-dom
```

4. **Start the dev server:**

```bash
npm run dev
```

5. **Open the project in the browser at the URL shown in the terminal, usually:**

```bash
http://localhost:5173
```

### Available scripts

- `npm run dev` — starts the local development server
- `npm run build` — builds the production version
- `npm run preview` — previews the production build locally
- `npm run lint` — executes lint checks