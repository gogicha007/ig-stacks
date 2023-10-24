"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/navbar/Navbar.module.css";
import data from "@/dictionaries/sidebar.json";
import { useSelectedLayoutSegment } from "next/navigation";

const links = data;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <ul className={styles.container}>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            className={classNames(
              (segment ? segment : "") ===
                link.url.slice(link.url.lastIndexOf("/") + 1)
                ? styles.active
                : "",
              styles.link
            )}
          >
            <Image src={link.icon} width={20} height={20} alt="icon" />
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
