import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Forked from
      {' '}
      <a href="https://github.com/raphaelalmeidamartins">Raphael Martins</a>
      {' '}
      Full Stack Project
    </footer>
  );
}
