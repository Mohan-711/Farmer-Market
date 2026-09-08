import styles from './page.module.css';

export default function GovernmentPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Government Panel</p>
        <h1>Government Dashboard</h1>
        <ul>
          <li>Monitoring reports</li>
          <li>Policy data</li>
          <li>Market compliance</li>
        </ul>
      </section>
    </main>
  );
}
