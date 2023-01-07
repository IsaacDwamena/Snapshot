import home1 from "../images/home1.jpg";

// Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animate";
import Wave from "./Wave";

// styled
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We sell what you need</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              To make your <span> ideas</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for all your photography or videography gears you need. We
          have a wide range of equipments.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
