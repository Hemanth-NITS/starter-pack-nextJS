# Next.js Project Setup: App Router, Tailwind CSS v3, Shadcn UI (JavaScript, No `src` Directory)

This guide provides step-by-step instructions to set up a Next.js project using the App Router, integrate Tailwind CSS v3, and configure Shadcn UI specifically for a JavaScript-only environment with no `src` directory.



## Setup Steps

### 1. Create a New Next.js Project

This command will prompt you for several configurations. Choose the following options carefully:

```bash
npx create-next-app@latest my-next-shadcn-app
```
When prompted, select these options:\
- Would you like to use TypeScript?: `No`\
- Would you like to use ESLint?: `No` (or `Yes`, if you prefer ESLint with JS)\
- Would you like to use Tailwind CSS?: `Yes` (we'll downgrade it to v3 in the next step)\
- Would you like to use src/ directory?: `No`\
- Would you like to use App Router (recommended)?: `Yes`\
- Would you like to customize the default import alias?: `No`\

### 2. Navigate Into Your New Project Directory
```bash
cd my-next-shadcn-app
```
### 3. Install Tailwind CSS v3
```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3 postcss@latest autoprefixer@latest
```
### 4. Initialize Tailwind CSS and PostCSS Config Files
This command creates your `tailwind.config.js` and `postcss.config.js` files in the project root.\
```bash
npx tailwindcss init -p
```
### 5. Manually Update tailwind.config.js
Open the `tailwind.config.js` file and update the content array to include the correct folders.\
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}', // Optional if using 'pages' directory
    './components/**/*.{js,jsx}', // For components
    './app/**/*.{js,jsx}', // For App Router files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
### 6. Add Tailwind Directives to Your Global CSS File
Open `app/globals.css` and ensure it contains the following:\
```css
/* app/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add your custom global styles below these directives */
```

### 7. Initialize Shadcn UI
This command sets up Shadcn UI:
```bash
npx shadcn@latest init
```
When prompted, select:
- `Style`: New York (or Default)
- `Base color`: Zinc (or your preference)
It may skip further prompts if it auto-detects your setup — this is expected.\

### 7a. Manually Verify/Adjust `components.json`
Open `components.json` in the root directory and make sure it matches:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```
Update and save it if needed.\

### 8. Add Your First Shadcn UI Component
You can now add Shadcn UI components like this:
```bash
npx shadcn@latest add button
```
This adds the Button component to components/ui/button.jsx and installs any required dependencies.

### 9. Start the Development Server
You're all set! Start the dev server:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.


**✅ You can now use Shadcn UI components, Tailwind utility classes, and even apply `@apply` in your CSS.
🧠 Remember to add `"use client"`; at the top of any component using state, events, or hooks.
**

**The End**
