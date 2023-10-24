import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={"/invoices"}>
        <div className={styles.item_wrapper}>
          <div className={styles.item_title}>
            <h2>ზედნადებები</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item_data}>
            <h3>
              მოლოდინში <span>5</span>
            </h3>
          </div>
        </div>
      </Link>
      <Link href={"/orders"}>
        <div className={styles.item_wrapper}>
          <div className={styles.item_title}>
            <h2>მოთხოვნები</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item_data}>
            <h3>
              მოლოდინში <span>7</span>
            </h3>
          </div>
        </div>
      </Link>
      <Link href={""}>
        <div className={styles.item_wrapper}>
          <div className={styles.item_title}>
            <h2>გაცემები</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item_data}>
            <h3>
              მოლოდინში <span>4</span>
            </h3>
          </div>
        </div>
      </Link>
      <Link href={"/inventory"}>
        <div className={styles.item_wrapper}>
          <div className={styles.item_title}>
            <h2>საწყობი</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item_data}>
            {/* <h3>
              მოლოდინში <span>4</span>
            </h3> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
