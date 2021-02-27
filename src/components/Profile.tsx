import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/johnatanborges.png" alt="Johnatan Borges" />
            <div>
                <strong>Johnatan Borges</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}