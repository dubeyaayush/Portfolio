import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import MySQL from "../../public/MySQL.png"
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png"
import python from "../../public/python.webp"
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: MySQL,
      name: "MySQL",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: html,
      name: "HTML",
    },
    {
      id: 7,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 8,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 9,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          Although I may not have extensive professional experience in web development, I am a passionate and driven individual with a strong foundation in programming and a thirst for learning. As a fresher, I bring enthusiasm, creativity, and a commitment to excellence in everything I do. My dedication to building personal projects, improving my skills in technologies like React.js, JavaScript, and Node.js, and competing on platforms like LeetCode reflects my readiness to tackle real-world challenges. I am eager to apply my knowledge, learn from experienced professionals, and contribute to meaningful projects, given the opportunity.
          I've more than 2 years of personal experience in below technologies.
        </p>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
