import Project from "./Project";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";

export default function Main(projects) {
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-xl text-center md:text-left  sm:text-2xl md:text-3xl font-bold">
              Hi there, I&apos;m&nbsp;
              <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Adam
              </span>
              👋
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl">
              <p>Junior Web Developer | C# Developer</p>
              <p className="tracking-normal bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent font-extrabold italic">
                C# is the future web development
              </p>
            </p>
          </div>
          <img src="aspreact.png" alt=".NET with React" className="md:w-1/2" />
        </div>
      </div>
      <Project projects={projects} />
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div
          id="contact"
          className="mb-6 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Contact
        </div>
        <div className="flex gap-12 justify-center text-3xl">
          <a href="https://github.com/dedeadamalamsyah">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/dedeadamalamsyah/">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/dedeadamalamsyah/">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/dedeadamalamsyah">
            <BsFacebook />
          </a>
          <a href="https://wa.me/6282233824398">
            <BsWhatsapp />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div
          id="about"
          className="mb-1 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
        >
          About
        </div>
        <p className="text-center">
          I&apos;m a Junior Web Developer with a passion for C#. I am eager to
          learn and grow, and I am always looking for new challenges. I am
          proficient in the following technologies: C#, ASP.NET, MVC, LINQ, and
          SQL Server. I am also proficient in the use of other web development
          technologies, such as HTML, CSS, and JavaScript. Always willing to
          learn new things.
        </p>
      </div>
    </main>
  );
}
