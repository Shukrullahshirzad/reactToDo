
import styles from './footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Your Todo App</p>
      <p>Made with ❤️ by <a href="https://x.com/cooolCoder" target="_blank">Cooolcoder</a></p>
    </footer>
  );
}
