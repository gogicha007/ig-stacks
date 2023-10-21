"use client";
import Link from "next/link";
import React from "react";
import styles from "@/components/navbar/Navbar.module.css";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  {
    id: 1,
    icon: "/images/home.svg",
    title: "მთავარი",
    url: "/",
  },
  {
    id: 2,
    icon: "/images/inventory.svg",
    title: "საწყობი",
    url: "/inventory",
  },
  {
    id: 3,
    icon: "/images/suppliers.svg",
    title: "მომწოდებლები",
    url: "/suppliers",
  },
  {
    id: 4,
    icon: "/images/orders.svg",
    title: "მოთხოვნები",
    url: "/orders",
  },
  {
    id: 5,
    icon: "/images/invoice.svg",
    title: "ინვოისები",
    url: "/invoices",
  },
  {
    id: 6,
    icon: "/images/reports.svg",
    title: "რეპორტები",
    url: "/reports",
  },
  {
    id: 7,
    icon: "/images/settings.svg",
    title: "პარამეტრები",
    url: "/settings",
  },
];

const Navbar = ({ onClick }) => {
  // onClick = (e) => {console.log(e.target.text)}
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.link}
            onClick={onClick}
          >
            <Image
              src={link.icon}
              width={20}
              height={20}
              alt="icon"
            />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
