import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <h3 className={styles.title}>Album</h3>
      <div className={styles.userInfoBox}>
        <p className={styles.userName}>
          user5<span>님</span>
        </p>
        <button type="button" className={styles.loginState}>
          로그아웃
        </button>
      </div>
    </header>
  );
}

export default Header;
