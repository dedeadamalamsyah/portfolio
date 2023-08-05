import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { createContext } from "react";
import { useRef } from "react";
import { BackTopButton } from "./components/BackTopButton";
import { useEffect } from "react";

export const projects = [
  {
    name: "ParkShark",
    image: "parkshark.png",
    description: {
      en: "Web-Based application that allows users to manage the parking of vehicles in a given area. The system provides CRUD functionality for managing vehicle data, including the type of vehicle, parking time, and hourly rates. Users can also see vehicle details such as the data that was added to the total fare, time to leave the parking lot, and whether they have paid or not",
      id: "Aplikasi berbasis web yang memungkinkan pengguna untuk mengelola parkir kendaraan di area tertentu. Sistem menyediakan fungsionalitas CRUD untuk mengelola data kendaraan, termasuk jenis kendaraan, waktu parkir, dan tarif per jam. Pengguna juga dapat melihat detail kendaraan seperti data yang ditambahkan pada total tarif, waktu keluar dari tempat parkir, dan apakah sudah membayar atau belum.",
    },
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
    description: {
      en: "Windows Form application that allows users to manage the rental of game consoles. The system provides CRUD functionality for managing console data, including the console brand, console name, renter, rental time, rental duration, rental ending time, console purchase time, console late return fines, and can also print transaction receipts.",
      id: "Aplikasi Windows Form yang memungkinkan pengguna mengelola persewaan konsol game. Sistem menyediakan fungsionalitas CRUD untuk mengelola data konsol, termasuk merek konsol, nama konsol, penyewa, waktu sewa, durasi sewa, waktu berakhir sewa, waktu pembelian konsol, denda keterlambatan pengembalian konsol, dan juga dapat mencetak struk transaksi.",
    },
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
    description: {
      en: "Windows Form application that allows users to race their cars against enemies and collect coins. The game features three types of coins: gold, silver, and bronze. Gold coins are worth the most points, followed by silver coins, and then bronze coins. Players can collect coins by driving over them. The more coins they collect, the higher their score will be.",
      id: "Aplikasi Windows Form yang memungkinkan pengguna untuk memainkan balapan mobil mereka melawan musuh dan mengumpulkan koin. Gim ini menampilkan tiga jenis koin: emas, perak, dan perunggu. Koin emas bernilai poin terbanyak, diikuti oleh koin perak, dan kemudian koin perunggu. Pemain dapat mengumpulkan koin dengan mengendarainya. Semakin banyak koin yang mereka kumpulkan, semakin tinggi skor mereka",
    },
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
    description: {
      en: "Windows Form application that allows users to perform mathematical calculations. The application supports multiplication, division, addition, and subtraction",
      id: "Aplikasi Windows Form yang memungkinkan pengguna untuk melakukan perhitungan matematis. Aplikasi ini mendukung perkalian, pembagian, penjumlahan, dan pengurangan",
    },
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
    description: {
      en: "Website that provides Islamic content to Muslims in Indonesia. The website includes articles, video lectures, the Qur'an, and prayer schedules for regions in Indonesia.",
      id: "Situs web yang menyediakan konten Islami untuk umat Islam di Indonesia. Situs web ini memuat artikel, video ceramah, Al-Qur'an, dan jadwal sholat untuk daerah-daerah di Indonesia.",
    },
    tools: ["HTML", "CSS", "JavaScript", "Visual Studio Code"],
    link: "https://github.com/dedeadamalamsyah/muslim-center",
  },
  {
    name: "Amazona Zoo",
    image: "amazonazoo.png",
    description: {
      en: "Web-Based application that allows users to manage the animals in a zoo. The system provides CRUD functionality for managing animal data, including the animal name, animal photo, animal description, animal species, cage number, and feed number.",
      id: "Aplikasi berbasis web yang memungkinkan pengguna untuk mengelola hewan di kebun binatang. Sistem menyediakan fungsionalitas CRUD untuk mengelola data hewan, termasuk nama hewan, foto hewan, deskripsi hewan, spesies hewan, nomor kandang, dan nomor pakan",
    },
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
    description: {
      en: "C# application that allows users to simulate different CPU scheduling algorithms. The application supports the algorithms First Come First Served, Shortest Job First, Round Robin, and Priority Scheduling",
      id: "Aplikasi C# yang memungkinkan pengguna untuk mensimulasikan algoritma penjadwalan CPU yang berbeda. Aplikasi ini mendukung algoritma First Come First Served, Shortest Job First, Round Robin, dan Penjadwalan Prioritas",
    },
    tools: ["C#", ".NET 7", "Console App", "Visual Studio 2022"],
    link: "https://github.com/dedeadamalamsyah/cpu_scheduling",
  },
];

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

export const strings = {
  id: {
    projects: "Projek",
    contacts: "Kontak",
    introduction: "Hai semuanya, saya ",
    tagline: "Pengembang Web | Pengembang C",
    slogan: "C# adalah bahasa pengembangan web masa depan",
  },
  en: {
    projects: "Projects",
    contacts: "Contacts",
    introduction: "Hi there, I'm ",
    tagline: "Web Developer | C# Developer",
    slogan: "C# is the future web development language",
  },
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const scroll = useRef(null);

  useEffect(() => {
    console.log(
      `Theme changed to ${theme === "dark" ? "dark" : "light"}`
    );
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={
            theme === "dark"
              ? "bg-slate-900 text-gray-100"
              : "bg-slate-600 text-gray-900"
          }
        >
          <BackTopButton scrollRef={scroll}/>
          <Header scrollRef={scroll} />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
