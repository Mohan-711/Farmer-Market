import styles from './page.module.css';

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.tag}>Welcome</p>
        <h1>Farmer Market</h1>
        <p className={styles.text}>
          A digital marketplace connecting farmers, buyers, companies, logistics,
          government teams, and end consumers.
        </p>
        <button className={styles.button}>Get Started</button>
      </section>
    </main>
  );
}
