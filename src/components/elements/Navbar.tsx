import Container from "../shared/Container";
import logo from "../../assets/icon.svg";
import NavbarItem from "../shared/NavbarItem";
import BtnLink from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
export const navbarItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                EdgeAI
              </div>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-4 left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
            <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
              {navbarItems.map((item, key) => (
                <NavbarItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>
            <div className="lg:min-w-max flex items-center sm:max pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
              <BtnLink text="Get Started " href="#cta" className="" />
            </div>
          </div>
          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? "🌞" : "🌜"}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../shared/Container";
// import logo from "../../assets/icon.svg";
// import NavbarItem from "../shared/NavbarItem";
// import BtnLink from "../shared/BtnLink";
// import { useThemeStore } from "../../store/ThemeStore";

// const navbarItems = [
//   { href: "#", text: "Home" },
//   { href: "#services", text: "Services" },
//   { href: "#about-us", text: "About Us" },
//   { href: "#features", text: "Features" },
// ];

// const Navbar = () => {
//   const { toggleTheme, theme } = useThemeStore();

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="absolute inset-x-0 top-0 z-50 py-6"
//     >
//       <Container>
//         <nav className="w-full flex justify-between gap-6 relative">
//           {/* Logo with animation */}
//           <motion.div
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="min-w-max inline-flex relative"
//           >
//             <motion.a
//               href="/"
//               className="relative flex items-center gap-3"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 17 }}
//             >
//               <motion.img
//                 src={logo}
//                 alt="logo"
//                 className="w-10 h-10"
//                 animate={{ rotate: [0, 360] }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="inline-flex text-lg font-semibold text-heading-1"
//               >
//                 EdgeAI
//               </motion.div>
//             </motion.a>
//           </motion.div>

//           {/* Navigation Items */}
//           <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-4 left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
//             <motion.ul
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center"
//             >
//               {navbarItems.map((item, key) => (
//                 <motion.li
//                   key={key}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * key + 0.5 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <NavbarItem href={item.href} text={item.text} />
//                 </motion.li>
//               ))}
//             </motion.ul>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="lg:min-w-max flex items-center sm:max pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <BtnLink text="Get Started " href="#cta" className="" />
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Theme Toggle Button */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//             className="min-w-max flex items-center gap-x-3"
//           >
//             <motion.button
//               onClick={toggleTheme}
//               whileHover={{ scale: 1.1, rotate: 180 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 17,
//               }}
//               className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={theme}
//                   initial={{ opacity: 0, rotate: -180 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   exit={{ opacity: 0, rotate: 180 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {theme === "dark" ? "🌞" : "🌜"}
//                 </motion.span>
//               </AnimatePresence>
//             </motion.button>
//           </motion.div>
//         </nav>
//       </Container>
//     </motion.header>
//   );
// };

// export default Navbar;
