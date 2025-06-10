import { motion } from "framer-motion";
import Container from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navbarItems } from "./Navbar";
import NavbarItem from "../shared/NavbarItem";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-28 rounded-t-3xl bg-box-bg"
    >
      <Container className="pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-3 mb-4 md:mb-0"
          >
            <motion.img
              src={logo}
              alt="EdgeAI logo"
              className="w-7 h-7"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-lg font-semibold text-heading-1">EdgeAI</span>
          </motion.div>
          <motion.ul
            className="flex gap-6 text-heading-1"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {navbarItems.map((item, key) => (
              <motion.li
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NavbarItem href={item.href} text={item.text} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
