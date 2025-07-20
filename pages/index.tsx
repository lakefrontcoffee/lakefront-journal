import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>LakeFront Journal: Day 1</h1>
      <p>Welcome to your first day of reflections ☕</p>
      <form className={styles.form}>
        <label>Coffee Notes:</label>
        <input type="text" placeholder="What I’m sipping today" />
        <label>Daily Goal:</label>
        <input type="text" placeholder="Today my intention is..." />
        <label>Empowering Thought:</label>
        <input type="text" placeholder="A phrase to guide me" />
        <label>Gratitude (Consider today...):</label>
        <input type="text" placeholder="I felt..." />
        <label>Gratitude (I’m thankful for):</label>
        <input type="text" placeholder="Today I’m thankful for..." />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}