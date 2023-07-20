export default function Project() {
  const projects = [
    {
      name: "ParkShark",
      image: "parkshark.png",
      description:
        "Web-Based application that allows users to manage the parking of vehicles in a given area. The system provides CRUD functionality for managing vehicle data, including the type of vehicle, parking time, and hourly rates. Users can also see vehicle details such as the data that was added to the total fare, time to leave the parking lot, and whether they have paid or not",
      tools: [
        "CSS",
        "JavaScript",
        "Bootstrap",
        ".NET 7",
        "ASP.NET Core Web App MVC",
        "Visual Studio 2022",
        "MySQL",
        "SQLyog",
        "XAMPP",
      ],
      link: "https://github.com/dedeadamalamsyah/ParkShark",
    },
    {
      name: "Retro Gaming",
      image: "retrogaming.png",
      description:
        "Windows Form application that allows users to manage the rental of game consoles. The system provides CRUD functionality for managing console data, including the console brand, console name, renter, rental time, rental duration, rental ending time, console purchase time, console late return fines, and can also print transaction receipts.",
      tools: [
        "C#",
        ".NET 6",
        "Windows Form App (.NET Framework)",
        "Visual Studio 2022",
        "MySQL",
        "SQLyog",
        "XAMPP",
      ],
      link: "https://github.com/dedeadamalamsyah/retro-game",
    },
    {
      name: "Car Racing Game",
      image: "car_racing_game.jpeg",
      description:
        "Windows Form application that allows users to race their cars against enemies and collect coins. The game features three types of coins: gold, silver, and bronze. Gold coins are worth the most points, followed by silver coins, and then bronze coins. Players can collect coins by driving over them. The more coins they collect, the higher their score will be.",
      tools: [
        "C#",
        ".NET 6",
        "Windows Form App (.NET Framework)",
        "Visual Studio 2022",
      ],
      link: "https://github.com/dedeadamalamsyah/car-racing-game",
    },
    {
      name: "Calculator",
      image: "calculator.ico",
      description:
        "Windows Form application that allows users to perform mathematical calculations. The application supports multiplication, division, addition, and subtraction",
      tools: [
        "C#",
        ".NET 6",
        "Windows Form App (.NET Framework)",
        "Visual Studio 2022",
      ],
      link: "https://github.com/dedeadamalamsyah/calculator",
    },
    {
      name: "Muslim Center",
      image: "muslimcenter.jpg",
      description:
        "Website that provides Islamic content to Muslims in Indonesia. The website includes articles, video lectures, the Qur'an, and prayer schedules for regions in Indonesia.",
      tools: ["HTML", "CSS", "JavaScript", "Visual Studio Code"],
      link: "https://github.com/dedeadamalamsyah/muslim-center",
    },
    {
      name: "Amazona Zoo",
      image: "amazonazoo.png",
      description:
        "Web-Based application that allows users to manage the animals in a zoo. The system provides CRUD functionality for managing animal data, including the animal name, animal photo, animal description, animal species, cage number, and feed number.",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap Template",
        "PHP",
        "MySQL",
        "SQLyog",
        "XAMPP",
      ],
      link: "https://github.com/dedeadamalamsyah/amazona-zoo",
    },
    {
      name: "CPU Scheduling",
      image: "cpuscheduling.png",
      description:
        "C# application that allows users to simulate different CPU scheduling algorithms. The application supports the algorithms First Come First Served, Shortest Job First, Round Robin, and Priority Scheduling",
      tools: ["C#", ".NET 7", "Console App", "Visual Studio 2022"],
      link: "https://github.com/dedeadamalamsyah/cpu_scheduling",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
      <div
        id="projects"
        className="mb-6 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Projects
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 lg:flex-row"
          >
            <a
              href={project.link}
              className="w-64 shrink-0 flex justify-center"
            >
              <img src={project.image} alt={project.name}/>
            </a>
            <div className="">
              <div className="flex flex-col items-center gap-y-2 text-center lg:flex-row">
                <a href={project.link} className="hover:text-cyan-400">
                  <div className="text-base sm:text-lg md:text-xl font-semibold">
                    {project.name}
                  </div>
                </a>
                <div className="lg:ml-3 flex gap-2 flex-wrap justify-center">
                  {project.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex rounded-md px-2 py-1 text-xs font-semibold bg-[#fe89d5] text-fuchsia-900"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-gray-400 text-justify">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
