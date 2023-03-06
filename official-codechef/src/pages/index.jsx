import MenuBar from "../components/Home/MenuBar";
import LeadershipTeam from "@/data/leadershipTeam";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className={inter.className} style={{ marginBottom: "60px" }}>
        Home Page
      </h1>
    </main>
  );
}
