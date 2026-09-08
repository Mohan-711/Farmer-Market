import styles from './page.module.css';

export default function CompanyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Company Panel</p>
        <h1>Company Dashboard</h1>
        <ul>
          <li>Supplier management</li>
          <li>Order overview</li>
          <li>Contracts and audits</li>
        </ul>
      </section>
    </main>
  );
}
