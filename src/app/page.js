import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="dashboard">
      <h1 className="korean-comment">
        안녕하세요! 제 이름은 <span className="sample">이예진</span>
        <br />
        <span className="highlight type1">진짜 문제</span>를{' '}
        <span className="highlight type2">제대로</span> 해결하는{' '}
        <span className="highlight type3">프로덕트 매니저</span>
        <br />를 꿈꿉니다.
      </h1>
      <p className="english-comment">부가설명 와랄라라라라라라랄</p>
      <footer className="footer">
        <h3 className="contact">CONTACT</h3>
        <div className="links">
          <a href="mailto:leejin0729@gmail.com">GMAIL</a>
          <a href="#">INSTA</a>
        </div>
        <p className="caption">Jinlee is a designer based in Seoul</p>
      </footer>
    </div>
  );
}
