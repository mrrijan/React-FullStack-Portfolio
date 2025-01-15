import Styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={Styles.container}>
      <p>
        &copy; 2025 Rijan Lama.
        <br />
        All rights reserved
      </p>
    </section>
  );
}

export default Footer;
