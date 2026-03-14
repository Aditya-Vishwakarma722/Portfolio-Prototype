# Setting Up React with Tailwind CSS and shadcn/ui

To use the provided `.tsx` components, you need a React environment with Tailwind CSS and TypeScript. Here is how to set it up:

## 1. Initialize a New Project (Vite + React + TS)
Run the following command in your terminal:
```bash
npm create vite@latest ./ -- --template react-ts
npm install
```

## 2. Install Tailwind CSS
Follow the official Tailwind installation for Vite:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Update your `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add Tailwind directives to your `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Initialize shadcn/ui
Run the shadcn-ui CLI to initialize your project:
```bash
npx shadcn-ui@latest init
```
When prompted, use `/components` (or your preferred path) for components.

## 4. Install Dependencies for Spotlight Card
The component requires `lucide-react` for icons (if used) and React hooks:
```bash
npm install lucide-react
```

## 5. Why the `/components/ui` Folder?
The `/components/ui` folder is the standard location for re-usable, atomic UI components in the shadcn/ui ecosystem. Keeping components here:
- Ensures compatibility with the `npx shadcn-ui add` command.
- Maintains a clean project structure where "UI primitives" are separated from "feature components".
- Allows for easy discovery and re-use across the application.
