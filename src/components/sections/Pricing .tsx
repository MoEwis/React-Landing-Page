import { motion } from "framer-motion";
import { pricingPlans } from "../../utils/pricingPlan";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.6, type: "spring" },
  }),
};

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      className="py-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Container className="text-center">
        <Title>Pricing</Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative group h-full"
            >
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative"
                >
                  {plan.bestValue && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                    text-white text-xs font-bold uppercase tracking-wider
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                    >
                      Best Value
                    </motion.div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-heading-1">
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                        <span className="text-primary">✅</span>
                        <span>{feature} </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button className="w-full text-white">Choose Plan</Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};
export default Pricing;
