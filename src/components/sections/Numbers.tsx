import { motion } from "framer-motion";
import Container from "../shared/Container";
const numberData = [
  { number: "100+", text: "AI Models Implemented" },
  { number: "250+", text: " Enterprise Clients" },
  { number: "99.9%", text: " Uptime Guarantee" },
  { number: "10+", text: "Years of Innovation" },
];
const Numbers = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-12 md:mt-16"
    >
      <Container className="flex justify-center items-center">
        <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
          {numberData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.07 }}
              className="text-center px-5 transition-transform"
            >
              <motion.h2
                className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.18 + 0.22,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {item.number}
              </motion.h2>
              <motion.p
                className="mt-2 text-heading-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.14 + 0.35,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Numbers;
