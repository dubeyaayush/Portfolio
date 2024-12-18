import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Ayush, a passionate Web developer with a keen eye for MERN
          Stack . With a background in Civil as well as IT, I strive to create impactful and
          visually stunning Software solutions as well as design websites that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
        <li style={{fontWeight: "bold"}}>Bachelor Of Technology – Civil Engineering</li>
        National Institute of Technology, Warangal
        <br />
        2021 – present
        <br />
        <br />

        <li style={{fontWeight: "bold"}}>Minor degree in Computer Science  </li>
        2022 - present
        <br />
        Developed a strong foundation in programming, algorithms, and software development. Acquired skills in languages like C++, JavaScript, and frameworks such as React.js and Node.js.
        <br />
        <br />
        Relevant Courses:
        <br />
        <br />
        <li>Data Structures and Algorithms</li>
        <li>Web Development</li>
        <li>Database Management</li>
        <li>Software Engineering</li>
        
        
        <br />
        </span>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        <p style={{fontWeight: "bold"}}>Programming Languages</p>
        <li style={{fontWeight: "bold"}}>C++:</li> Strong foundation in object-oriented programming and problem-solving.
        <li style={{fontWeight: "bold"}}>HTML & CSS:</li> Proficient in creating responsive and visually appealing layouts.
        <li style={{fontWeight: "bold"}}>JavaScript:</li> Skilled in dynamic client-side scripting.
        <br />
        <br />
        <p style={{fontWeight: "bold"}}>Frameworks & Libraries</p>
        <li style={{fontWeight: "bold"}}>React.js:</li> Experience building interactive and scalable user interfaces.
        <li style={{fontWeight: "bold"}}>Node.js:</li> Backend development and API integration expertise.
        <br />
        <br />
        <p style={{fontWeight: "bold"}}>Web Development</p>
        <li>Proficient in designing and developing websites for small and medium-sized businesses, including Landing pages, Service listings and Online stores.</li>
        <li>Skilled in creating end-to-end solutions, from front-end UI to back-end logic.</li>
        <br />
        <p style={{fontWeight: "bold"}}>Other Expertise</p>
        <li style={{fontWeight: "bold"}}>Search Engine Optimization (SEO):</li> Basic knowledge to optimize websites for better visibility.
        <li style={{fontWeight: "bold"}}>Project Management:</li> Experience managing projects from start to finish with clear communication.
        <br />
        <br />
        <p style={{fontWeight: "bold"}}>Tools & Technologies</p>
        <li style={{fontWeight: "bold"}}>Version Control:</li> GitHub for version control and collaboration.
        <li style={{fontWeight: "bold"}}>Content Management:</li> Experience working with WordPress.
        <br />
        <br />
        <p style={{fontWeight: "bold"}}>Soft Skills</p>
        <li>Strong communication skills for effective collaboration with clients and teams.</li>
        <li>Persistent and self-motivated to learn and adapt to new technologies.</li>
        <br />
        <p style={{fontWeight: "bold"}}>Freelancing</p>
        <li>Experienced in bidding and securing projects on freelancing platforms like Upwork.</li>

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        <p style={{fontWeight: "bold"}}>Internship at Matshui Enterprises</p>
        Role – Intern
        <br />
        Location-Ranchi |  15th June to 15th August 2023
        <br />

        <li>Contributed to real-world projects.</li>
        <li>Collaborated with a professional team to meet project deadlines, improving my teamwork and communication skills.</li>
        <li>Learned valuable practices such as time management, problem-solving, and working in a structured environment.</li>
        <br />
        <p style={{fontWeight: "bold"}}>Academic Collaboration</p>
        Engaged regularly with college professors to deepen understanding of computer science concepts, including:
        <li style={{fontWeight: "bold"}}>Data Structures and Algorithms:</li> Strengthened logical thinking and problem-solving.
        <li style={{fontWeight: "bold"}}>Web Development:</li> Developed knowledge of building responsive, functional websites.
        <li style={{fontWeight: "bold"}}>Software Engineering:</li> Learned the importance of clean code and software design principles.
        <li>Gained insights into industry best practices and academic research, bridging theory with practical applications.</li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        <li style={{fontWeight: "bold"}}>Selected for Special Minor Course:</li>
        Chosen among the top 50 students in the college to pursue an exclusive minor course in Computer Science, showcasing academic excellence and dedication.
        <br />
        <br />
        <li style={{fontWeight: "bold"}}>Merit Cum Means Scholarship (2021-22):</li>
        Awarded for outstanding academic performance with a CGPA of 8.66, recognizing both merit and financial need.
        <br />
        <br />
        <li style={{fontWeight: "bold"}}>Competitive Programming Achievements:</li>
        Actively participated in platforms like LeetCode, HackerRank, and GeeksforGeeks, securing high rankings and improving problem-solving skills.
        <br />
        Solved diverse challenges, demonstrating strong expertise in algorithms and data structures.

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to leverage my technical expertise and creative problem-solving skills to develop impactful software solutions that simplify lives and empower businesses. As a passionate and adaptive learner, I strive to bridge the gap between ideas and execution, delivering high-quality, user-centric applications. My goal is to continuously grow as a developer while contributing to meaningful projects that make a difference in the digital world.
        </p>
      </div>
    </div>
  );
}

export default About;
