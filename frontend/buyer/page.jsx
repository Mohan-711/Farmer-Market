import styles from './page.module.css';

export default function BuyerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Buyer Panel</p>
        <h1>Buyer Dashboard</h1>
        <ul>
          <li>Browse products</li>
          <li>Place orders</li>
          <li>Track deliveries</li>
        </ul>
      </section>
    </main>
  );
}
