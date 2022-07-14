import Header from 'components/commons/Header';
import Main from './Main';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
