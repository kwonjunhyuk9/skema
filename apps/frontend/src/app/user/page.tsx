"use client";
import styles from "./page.module.css";

const weeklyTests = [
  { day: "Mon", count: 2 },
  { day: "Tue", count: 4 },
  { day: "Wed", count: 1 },
  { day: "Thu", count: 3 },
  { day: "Fri", count: 5 },
  { day: "Sat", count: 2 },
  { day: "Sun", count: 0 },
];

export default function UserPage(): React.ReactElement {
  const maxCount = Math.max(...weeklyTests.map((entry) => entry.count), 1);
  const totalCount = weeklyTests.reduce((sum, entry) => sum + entry.count, 0);
  const averageCount = Math.round((totalCount / weeklyTests.length) * 10) / 10;

  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.title}>Weekly Tests</h1>
          <p className={styles.subtitle}>Number of tests in the week</p>
        </header>
        <hr className={styles.divider} />
        <div role="img">
          <div className={styles.chartGrid}>
            {weeklyTests.map((entry) => (
              <div className={styles.barGroup} key={entry.day}>
                <div className={styles.barTrack}>
                  <div
                    className={styles.bar}
                    style={{ ["--bar-height" as string]: `${(entry.count / maxCount) * 100}%` }}
                    aria-hidden="true"
                  />
                </div>
                <span className={styles.barValue}>{entry.count}</span>
                <span className={styles.barLabel}>{entry.day}</span>
              </div>
            ))}
          </div>
          <div className={styles.chartFooter}>
            <span>Total Tests: {totalCount}</span>
            <span>Average Tests: {averageCount}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
