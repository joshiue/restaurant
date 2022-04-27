import {
  Link,
  Logo,
  NavLinks,
  SocialIcons,
  StyledNav,
  ThemeIcon,
} from "./NavBar.styles";
import { FaFacebook, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
const NavBar = ({ theme, toggleTheme }) => {
  const NavItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <StyledNav initial="hidden" animate="visible" variants={NavItems}>
        <Logo variants={item}>
          ~grand<span>Dels~</span>
        </Logo>
        <NavLinks>
          <Link href="#" variants={item}>
            All menus
          </Link>
          <Link href="#" variants={item}>
            Delivery
          </Link>
          <Link href="#" variants={item}>
            Bar
          </Link>
          <Link href="#" variants={item}>
            Contact
          </Link>
        </NavLinks>
        <ThemeIcon onClick={toggleTheme} colorTheme={theme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </ThemeIcon>
        <SocialIcons>
          <motion.div variants={item}>
            <a href="https://www.google.com">
              <FaFacebook />
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://www.google.com">
              <FaInstagram />
            </a>
          </motion.div>
        </SocialIcons>
      </StyledNav>
    </>
  );
};

export default NavBar;
