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


const purgeEnabled = process.env.NODE_ENV === "production"

console.log("\n")
console.log(`   TailwindCSS \n`)
console.log(`   ----------- \n`)
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)


module.exports = {
  purge: {
    enabled: purgeEnabled,
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    content: ["./pages/**/*.html", "./pages/**/*.tsx", "./pages/**/*.jsx"]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}