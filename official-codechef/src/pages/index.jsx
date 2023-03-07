import LeadershipTeam from "@/data/leadershipTeam";
import { Inter } from "next/font/google";
import Depart_Lead from "../components/Home/Depart_Lead"
import ContactUs from "../components/Home/ContactUs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <h1 className={inter.className}>Home Page</h1> */}
      <Depart_Lead/>
      <ContactUs/>
    </main>
  );
}
