import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="dashboard">
      <footer className="footer">
        <h3 className="contact">CONTACT</h3>
        <div className="links">
          <a href="mailto:leejin0729@gmail.com">GMAIL</a>
          <a href="#">INSTA</a>
        </div>
      </footer>
    </div>
  );
}
