"use client"
import Link from "next/link";
import React from "react";
import styles from "@/components/navbar/Navbar.module.css";

const links = [
  {
    id: 1,
    title: "მთავარი",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "საწყობი",
    url: "/inventory",
  },
  {
    id: 3,
    title: "მომწოდებლები",
    url: "/suppliers",
  },
  {
    id: 4,
    title: "მოთხოვნები",
    url: "/orders",
  },
  {
    id: 5,
    title: "ინვოისები",
    url: "/invoices",
  },
  {
    id: 6,
    title: "რეპორტები",
    url: "/reports",
  },
  {
    id: 7,
    title: "პარამეტრები",
    url: "/settings",
  },
];

const Navbar = ({ onClick }) => {
  onClick = (e) => {console.log(e.target.text)}
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link} onClick={onClick}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
