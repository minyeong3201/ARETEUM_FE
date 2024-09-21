import "../styles/StyledMain.css";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Main() {
  const navigate = useNavigate();

  function GoTimeTable() {
    navigate("/timetable");
  }
  function GoBooth() {
    navigate("/booth");
  }
  function GoIntro() {
    navigate("/intro");
  }
  function GoTalk() {
    navigate("/talk");
  }
  function GoPeople() {
    navigate("/people");
  }

  const floatingVariants1 = {
    initial: { y: 10 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants2 = {
    initial: { y: 20 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants3 = {
    initial: { y: 5 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants4 = {
    initial: { y: 0 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants5 = {
    initial: { y: 15 },
    animate: { y: [0, 20, 0] },
  };

  const btnHoverVariants = {
    hover: { scale: 1.15, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="container">
        <div className="main-logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/Main/Main-logo.svg`}
            alt="logo"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/Main/Main-bg.svg`}
            alt="Main-bg"
            className="main-bg"
          />
          <motion.img
            src={`${process.env.PUBLIC_URL}/images/Main/Main-star.svg`}
            alt="main-star"
            className="main-star"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="menu">
          <div className="timetable">
            <motion.img
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants1}
              onClick={() => GoTimeTable()}
              src={`${process.env.PUBLIC_URL}/images/Main/Timetable-illur.svg`}
              alt="illur"
              className="timetable-illur c-po"
            />
            <motion.img
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoTimeTable()}
              src={`${process.env.PUBLIC_URL}/images/Main/Timetable-btn.svg`}
              alt="btn"
              className="timetable-btn c-po"
            />
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/Main/Timetable-som.svg`}
              alt="som"
              className="timetable-som"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -5, 0, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="booth">
            <motion.img
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants2}
              onClick={() => GoBooth()}
              src={`${process.env.PUBLIC_URL}/images/Main/Booth-illur.svg`}
              alt="illur"
              className="booth-illur c-po"
            />
            <motion.img
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoBooth()}
              src={`${process.env.PUBLIC_URL}/images/Main/Booth-btn.svg`}
              alt="btn"
              className="booth-btn c-po"
            />
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/Main/Booth-som.svg`}
              alt="som"
              className="booth-som"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="intro">
            <motion.img
              initial="initial"
              animate="animate"
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants3}
              onClick={() => GoIntro()}
              src={`${process.env.PUBLIC_URL}/images/Main/Intro-illur.svg`}
              alt="illur"
              className="intro-illur c-po"
            />
            <motion.img
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoIntro()}
              src={`${process.env.PUBLIC_URL}/images/Main/Intro-btn.svg`}
              alt="btn"
              className="intro-btn c-po"
            />
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/Main/Intro-som.svg`}
              alt="som"
              className="intro-som"
              initial={{ y: 0 }}
              animate={{ y: [-10, 0] }}
              transition={{
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                duration: 0.4,
                repeatDelay: 1,
              }}
            />
          </div>
          <div className="talk">
            <motion.img
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants4}
              onClick={() => GoTalk()}
              src={`${process.env.PUBLIC_URL}/images/Main/Talk-illur.svg`}
              alt="illur"
              className="talk-illur c-po"
            />
            <motion.img
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoTalk()}
              src={`${process.env.PUBLIC_URL}/images/Main/Talk-btn.svg`}
              alt="btn"
              className="talk-btn c-po"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/Main/Talk-som.svg`}
              alt="som"
              className="talk-som"
            />
          </div>
          <div className="people">
            <motion.img
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants5}
              onClick={() => GoPeople()}
              src={`${process.env.PUBLIC_URL}/images/Main/People-illur.svg`}
              alt="illur"
              className="people-illur c-po"
            />
            <motion.img
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoPeople()}
              src={`${process.env.PUBLIC_URL}/images/Main/People-btn.svg`}
              alt="btn"
              className="people-btn c-po"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/Main/People-som.svg`}
              alt="som"
              className="people-som"
            />
          </div>
        </div>
        <div className="footer">
          <img
            src={`${process.env.PUBLIC_URL}/images/Footer.svg`}
            alt="footer"
          />
        </div>
      </div>
    </>
  );
}
