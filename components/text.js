import styles from '../css/text.module.scss';

export default function Text({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
