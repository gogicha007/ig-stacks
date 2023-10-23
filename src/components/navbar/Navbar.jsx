"use client";
import Link from "next/link";
import React from "react";
import styles from "@/components/navbar/Navbar.module.css";
import Image from "next/image";
import data from "@/dictionaries/sidebar.json";
import { useSelectedLayoutSegment } from "next/navigation";

const links = data;

const Navbar = ({ onClick }) => {
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
            <Image src={link.icon} width={20} height={20} alt="icon" />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
