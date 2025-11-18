"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-justify">
            Dedicated and results-driven <span className="font-semibold text-white">Senior Full-Stack Developer</span> with 5+ years of experience designing and implementing scalable, secure, and high-performance systems across <span className="font-semibold">fintech</span>, <span className="font-semibold">e-commerce</span>, and <span className="font-semibold"></span>AI-driven platforms.
          </li>
          <li className="text-justify">
            Proficient in <span className="font-semibold">Python, Java, C# .NET, Node.js</span>, and <span className="font-semibold">Go</span>, with expertise in <span className="font-semibold">microservices architecture, GraphQL, gRPC</span>, and <span className="font-semibold">event-driven systems</span>. Strong background in cloud-native development across <span className="font-semibold">AWS</span> and <span className="font-semibold">Azure</span>, leveraging <span className="font-semibold">CI/CD pipelines</span> for rapid, reliable delivery.
          </li>
          <li className="text-justify">
            Hands-on experience with <span className="font-semibold">healthcare</span> and <span className="font-semibold">financial compliance systems</span> (HIPAA, PCI DSS), implementing <span className="font-semibold">secure authentication</span> (OAuth2, JWT), <span className="font-semibold">encryption</span>, and <span className="font-semibold">RBAC</span>. Adept at building <span className="font-semibold">data pipelines</span>, <span className="font-semibold">real-time monitoring</span>, and optimizing <span className="font-semibold">high-throughput services</span> to handle thousands of transactions per second.
          </li>
          <li className="text-justify">
            Recognized as a <span className="font-semibold">collaborative team player and mentor</span>, <span className="font-semibold">bridging developers</span>, <span className="font-semibold">data engineers</span>, and <span className="font-semibold">business stakeholders</span> to deliver impactful solutions. Passionate about applying <span className="font-semibold">cutting-edge technologies</span> to solve complex problems and drive measurable business outcomes.
          </li>
        </ul>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
