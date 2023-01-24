import { Inter } from "@next/font/google";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-red-500">Wasiq's Portfolio</h1>
    </main>
  );
};

export default Home;
