import { motion } from "framer-motion";
import Container from "../shared/Container";
import Title from "../shared/Title";

// Use import for images if you want them to work after build (recommended for React/Vite apps)
import discordLogo from "../../assets/logos/discord.png";
import openaiLogo from "../../assets/logos/openai.png";
import paypalLogo from "../../assets/logos/paypal.png";
import slackLogo from "../../assets/logos/slack.png";
import spotifyLogo from "../../assets/logos/spotify.png";
import youtubeLogo from "../../assets/logos/youtube.png";

const logos = [
  { src: discordLogo, alt: "discord" },
  { src: openaiLogo, alt: "openai" },
  { src: paypalLogo, alt: "paypal" },
  { src: slackLogo, alt: "slack" },
  { src: spotifyLogo, alt: "spotify" },
  { src: youtubeLogo, alt: "youtube" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
  }),
};

const Brands = () => {
  return (
    <section className="">
      <Container className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto "
        >
          <Title>Trusted by Industry Leaders</Title>
        </motion.div>
        <motion.div
          className="flex justify-center flex-wrap gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.alt}
              variants={itemVariants}
              custom={idx}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.1)",
              }}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group transition-all"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Brands;
