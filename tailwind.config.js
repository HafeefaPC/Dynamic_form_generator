/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "src/components/DynamicForm.tsx" ,
    "src/components/JsonEditor.tsx",
    "src/App.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
