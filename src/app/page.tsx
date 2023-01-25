import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-scroll z-0">
      <Header />

      <Hero />

      <About />

      {/* Experience section */}

      {/* Skills section */}

      {/* Projects section */}

      {/* Services section */}

      {/* Contact section */}
    </main>
  );
};

export default Home;
