import LeadershipTeam from "@/data/leadershipTeam";
import { Poppins } from "next/font/google";
import Depart_Lead from "../components/Home/Depart_Lead"
import ContactUs from "../components/Home/ContactUs";
const inter = Poppins({ subsets: ["latin"],
weight: '400' });

export default function Home() {
  return (
    <main className={inter.className}>
      {/* <h1 className={inter.className}>Home Page</h1> */}
      <Depart_Lead/>
      <ContactUs/>
    </main>
  );
}
