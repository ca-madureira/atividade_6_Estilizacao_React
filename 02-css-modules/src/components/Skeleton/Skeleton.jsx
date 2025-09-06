import styles from './Skeleton.module.css';
export const Skeleton = () => {
    <div className={styles.skeleton}>
        <div className={styles.image}></div>
        <div className={`${styles.text} ${styles.title}`}></div>
        <div className={`${styles.text} ${styles.price}`}></div>
        <div className={styles.button}></div>
    </div>
}

