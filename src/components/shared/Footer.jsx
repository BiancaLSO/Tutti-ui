import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles}>
      <div className={styles.container}>
        <div className={styles.columnOne}></div>
        <div className={styles.columnTwo}></div>
        <div className={styles.columnThree}></div>
        This is a footer
      </div>
    </footer>
  );
}
