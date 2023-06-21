import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import AboutPic from "./rock.jpg";
import ParticleBackGround from '../components/ParticleBackGround';

type Props = {};

function About({}: Props) {
  return (
    <div className=" h-screen w-screen flex justify-center bg-black">
      <div className=" items-center flex ">
        <div className=" w-screen h-screen overflow-hidden">
          <div className="flex flex-col justify-center items-center h-screen w-screen">
            <motion.div
              initial={{ opacity: 0, y: 500, scale: 0.1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 720, scale: 1 }}
              transition={{
                duration: 3,
                delay: 0.1,
                type: "spring",
                damping: 10,
                mass: 1,
                stiffness: 50,
              }}
              whileHover={{ scale: 1.2 }}
              drag
              className=" w-[300px] h-[250px] flex justify-center  md:w-[500px] md:h-[400px]"
            >
              <Image
                height={2000}
                width={2000}
                className="w-[300px] h-[250px]  md:w-[500px] md:h-[400px] rounded-md object-cover mt-20"
                alt=""
                src={AboutPic}
              />
            </motion.div>

            <div className=" w-[80%] md:w-[597px] h-[675px] flex flex-col items-center justify-center ">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-[597px] h-[72px] text-center text-29xl text-white"
              >
                <b className="hidden sm:text-md md:text-3xl lg:text-4x xl:text-5xl md:flex items-center justify-center w-[597px] md:h-[65px] h-[50px] ">
                  About Me?
                </b>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className=" relative flex items-center  m-4 md:w-[60vw] text-black p-2 bg-ghostwhite rounded-xl font-fira-code border-[4px] border-solid border-[#031463] shadow-[0px_0px_50px_rgba(0,_0,_0,_0.8)]"
              >
                <span className="[line-break:anywhere] text-sm md:text-lg lg:text-xl">
                  <span>{`I am a full stack JavaScript developer with a focus on front end frameworks including `}</span>
                  <b>{`React `}</b>
                  <span>{`and `}</span>
                  <b>Next.js</b>
                  <span>{`. I have a passion for creating visually appealing and user-friendly websites and applications that leave a lasting impression. My experience in `}</span>
                  <b>HTML</b>
                  <span>,</span>
                  <b> CSS</b>
                  <span>{`,and `}</span>
                  <b>JavaScript</b>
                  <span>
                    , as well as my ability to develop responsive and
                    interactive interfaces using modern frameworks, make me a
                    valuable asset to any team.
                <br></br>
                <br></br>
                    My ultimate goal is to make a positive impact in the field of
                    web development, to be a part of something greater than myself,
                    and to bring value to a team while pursuing my dream. I am
                    currently seeking new opportunities to apply my skills and
                    expertise in a challenging and dynamic environment.
                  </span>
                </span>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="  rounded-6xl bg-midnightblue box-border w-[182px] h-[42px] flex flex-row items-center justify-center text-[16.51px] text-white border-[1.8px] border-solid border-color-text-dark hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              >
                <motion.a
                  href="https://github.com/PKFireBarry"
                  className="relative "
                >
                  View My Work
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
