import { motion } from "framer-motion";
import { aboutData } from "../../utils/aboutData";
import AboutCard from "../cards/AboutCard";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.5, type: "spring" },
  }),
};

const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full md:w-5/12 lg:w-1/2"
        >
          <div className="w-full h-80 sm:h-96 relative">
            <motion.img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="about"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-7/12 lg:w-1/2 flex flex-col"
        >
          <Title>About Our AI Solution </Title>
          <Paragraph>
            We are on a mission to empower businesses with transformative AI
            technology. Our team of experts combines industry‑leading research
            with innovative algorithms to deliver a platform that adapts to your
            unique needs. Join us and lead the digital revolution in your
            industry.
          </Paragraph>
          <div className="pt-8 grid-cols-1 sm:grid-cols-2 gap-4 grid">
            {aboutData.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true }}
              >
                <AboutCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default AboutUs;
