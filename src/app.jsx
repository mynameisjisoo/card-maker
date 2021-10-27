import styles from './app.module.css';
import Login from './components/login/login';

function App() {
  return (
    <div className={styles.login}>
      <Login />
    </div>
  );
}

export default App;
