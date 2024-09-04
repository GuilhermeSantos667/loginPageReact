import styles from './Auth.module.css';

export function AuthOptions() {
  return (
    <div className={styles.auth}>
      <div className={styles.checkbox}>
        <input type="checkbox" />{' '}<span>Remember me</span>
      </div>
      <div>
        <a href="#">Forgot Password?</a>
      </div>

    </div>
  );
}
