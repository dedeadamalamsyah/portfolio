import Project from "./Project";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Main(projects) {

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-xl text-center md:text-left  sm:text-2xl md:text-3xl font-bold">
              Hi there, I&apos;m&nbsp;
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-sky-500 to-cyan-400">
                Adam
              </span>
              👋
            </h1>
            <div className="mt-6 text-base sm:text-lg md:text-xl">
              <p>Junior Web Developer | C# Developer</p>
              <p className="tracking-normal bg-gradient-to-br bg-clip-text text-transparent font-extrabold italic from-sky-500 to-cyan-400">
                C# is the future web development
              </p>
            </div>
          </div>
          <img src="aspreact.png" alt=".NET with React" className="md:w-1/2" />
        </div>
      </div>
      <Project projects={projects} />
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div
          id="contact"
          className="mb-6 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br bg-clip-text text-transparent from-sky-500 to-cyan-400"
        >
          Contact
        </div>
        <div className="flex gap-6 sm:gap-10 justify-center text-2xl sm:text-3xl items-center">
          <a href="mailto:dedeadamalamsyah9@gmail.com">
            <HiOutlineMail className="text-3xl sm:text-4xl"/>
          </a>
          <a href="https://wa.me/6282233824398">
            <BsWhatsapp/>
          </a>
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
        </div>
      </div>
    </main>
  );
}
