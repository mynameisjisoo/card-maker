import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
    //onAuthStateChanged에서 auth의 변경 감지할 때 실행될 콜백함수 전달
    //useEffect는 마운트될때만 호출되고 컴포넌트 상태가 변경되면 전달해놓은 콜백함수가 실행?
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        {/* <div className={styles.cardMaker}> */}
        {/* </div> */}
        {/* <div className={styles.cardPreview}> */}
        {/* </div> */}
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
