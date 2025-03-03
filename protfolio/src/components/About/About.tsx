import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import me from "../../assets/me.jpg";

const About: React.FC = () => {

  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        className="bg-dark w-full h-[90vh] pt-10 "
      >
        <div
          className="flex justify-between items-center gap-10 w-3/4 mx-auto "
          
        >
          <div className="w-1/2 h-fit text-white space-y-2 rounded-4xl border-2 border-accent p-8">
            <p className="text-lg m-0 p-0 text-accent">Welcome! I'm</p>
            <p className="text-7xl">Elroy Anaki</p>
            <p className="text-3xl text-amber-400 text-magic">
              Full Stack Developer{" "}
              <span>
                <LuCodeXml size={40} className="inline ml-3 text-amber-400" />
              </span>
            </p>
            <p className="text-xl">
              Innovative and detail-oriented software developer with expertise
              in full-stack development, API integrations, and database
              management. <br />
              <span className=" mt-5">
                Passionate about problem-solving and optimizing performance.
              </span>
              <br />
              <span>
                Actively contributing to impactful projects while refining
                technical skills.
              </span>{" "}
              <br />
              <span>
                Seeking to join a forward-thinking team to build efficient and
                scalable solutions
              </span>{" "}
              .
            </p>
          </div>
          <motion.div
            className="w-1/3 h-full bg-purple-300 rounded-xl"
            animate={{
              y: ["0%", "-5%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img
              src={me}
              alt="Elroy Anaki"
              className="object-cover w-full h-full opacity-90 rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
