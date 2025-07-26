import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Lakefront Journal</h1>
          <p className={styles.quote}>"Each day is a chance to savor and strive."</p>
        </div>

        <h2>✨ DAY 1 ✨</h2>

        <form className={styles.form}>
          <label>☕ Coffee Notes (What I’m sipping today):</label>
          <input type="text" placeholder="Sumatra blend" />

          <label>📜 Daily Goal (Today my intention is...)</label>
          <input type="text" placeholder="Focus on the present moment" />

          <label>🌟 Empowering Thought (A phrase to guide me)</label>
          <input type="text" placeholder="I am capable of navigating challenges" />

          <label>🍁 Gratitude (Consider today...)</label>
          <input type="text" placeholder="I felt calm and centered" />

          <label>⭐ Gratitude (Today I’m thankful for...)</label>
          <input type="text" placeholder="My supportive friends" />

          <button type="submit">SAVE</button>
        </form>

        <div className={styles.footer}>DAY 1 OF 7</div>
      </div>
    </div>
  );
}
