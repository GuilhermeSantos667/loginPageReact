import styles from './Input.module.css';
import { User, LockSimple } from 'phosphor-react';

export function Input({ type, placeHolder }) {
  return (
    <div className={styles.input}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <div className={styles.inputWithIcon}>
            <User size={20} color="#FFFFFF" className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputWithIcon}>
            <LockSimple size={20} color="#FFFFFF" className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
