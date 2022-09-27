// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./organisms/**/*.{js,ts,jsx,tsx}",
//     "./molecules/**/*.{js,ts,jsx,tsx}",
//     "./atoms/**/*.{js,ts,jsx,tsx}",
//     "./styles/**/*.{js,ts,jsx,tsx}",

//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: {
//     preflight: true,
//   }
// }

const purgeEnabled = process.env.NODE_ENV === "production";

console.log("\n");
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  purge: [
    "./pages/**/*.html",
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./organisms/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
