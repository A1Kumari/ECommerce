import LeadershipTeam from "@/data/leadershipTeam";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className={inter.className}>Home Page</h1>
    </main>
  );
}
