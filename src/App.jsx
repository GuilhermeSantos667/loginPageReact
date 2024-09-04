import styles from './App.module.css';
import { AuthOptions } from './components/AuthOptions';
import { Button } from './components/Button';
import { Input } from './components/Input';
import './global.css';
function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1>Login</h1>
        <Input />

        <div>
          <AuthOptions />
        </div>
        <Button/>
        <div className={styles.register}> 
        <p>Don't have an account?</p>
        <a href="#">Register</a>{' '}

        </div>
      </div>
     
    </div>
  );
}

export default App;
