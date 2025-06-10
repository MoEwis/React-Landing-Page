import { motion } from "framer-motion";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Numbers from "./Numbers";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-32 lg:pt-36 "
    >
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 ">
        {/* Animated background shapes */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.95 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></motion.span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute ring-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-2xl opacity-80 "
          ></motion.span>
        </div>
        {/* Left content */}
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl lg:max-0 lg:flex-1 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"
          >
            Empower Your Business
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2"
            >
              with AI
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Paragraph className="mt-8">
              Our AI SaaS platform seamlessly integrates with your existing
              workflows to deliver real‑time insights, intelligent automation,
              and data‑driven decision-making. Experience a future where your
              business runs smarter, faster, and more efficiently.
            </Paragraph>
          </motion.div>
          {/* Form animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 w-full flex max-w-md mx-auto lg:mx-0"
          >
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              {/* Removed hover animation from the form */}
              <form
                action="#"
                className="py-1 pl-6 flex gap-3 items-center text-heading-3 shadow shadow-box-shadow border boredr-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  {/* Removed hover from svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                {/* Only the Button has hover, which is fine */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="min-w-max text-white">
                    <span className=" relative z-[5]">Get Started</span>
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
        >
          {/* Removed hover from img */}
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero_image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </motion.div>
      </Container>
      <Numbers />
    </motion.section>
  );
};

export default Hero;
