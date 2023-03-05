import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ManagementPage = () => {
  return <h1 className={inter.className}>Management</h1>;
};

export default ManagementPage;
