import { FaPhone, FaRegEdit } from "react-icons/fa";
import {
  ContactIcons,
  HeroContent,
  ImageContainer,
  StyledButtons,
  StyledHeroSection,
} from "./HeroSection.styles";
import { motion } from "framer-motion";

const HeroSection = () => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <StyledHeroSection
        initial="hidden"
        animate="visible"
        variants={HeroItems}
      >
        <HeroContent>
          <motion.h2 variants={item}>
            Hot Grills @<span>~granDels~</span>
          </motion.h2>
          <motion.p variants={item}>The most Delicious outdoor food</motion.p>
          <StyledButtons>
            <motion.button variants={item}>Capacity</motion.button>
            <motion.button variants={item}>Location</motion.button>
            <motion.button variants={item}>Seat Type</motion.button>
          </StyledButtons>
        </HeroContent>
        <ContactIcons>
          <motion.a href="https://www.google.com" variants={{hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }}}>
            <FaRegEdit />
          </motion.a>
          <motion.a href="https://www.google.com" variants={{hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }}}>
            <FaPhone />
          </motion.a>
        </ContactIcons>
        <ImageContainer>
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            src="./MAIS.jpg"
            alt="food"
          />
        </ImageContainer>
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;
