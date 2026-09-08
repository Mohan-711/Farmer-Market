import styles from './page.module.css';

export default function LogisticsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Logistics Panel</p>
        <h1>Logistics Dashboard</h1>
        <ul>
          <li>Route optimization</li>
          <li>Vehicle tracking</li>
          <li>Delivery status</li>
        </ul>
      </section>
    </main>
  );
}
