import { motion } from "framer-motion";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pb-20 relative"
    >
      <Container>
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1"
            >
              Quick Start your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                own AI{" "}
              </span>
              Business
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <Paragraph className="pt-10">
                Leverage our AI-powered platform to revolutionize your digital
                marketing efforts. Get data-driven insights and automation at
                your fingertips.
              </Paragraph>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white"
            >
              <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default CallToAction;
