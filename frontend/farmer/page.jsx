import styles from './page.module.css';

export default function FarmerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Farmer Panel</p>
        <h1>Farmer Dashboard</h1>
        <ul>
          <li>Manage crops</li>
          <li>Track sales</li>
          <li>Review payment history</li>
        </ul>
      </section>
    </main>
  );
}
