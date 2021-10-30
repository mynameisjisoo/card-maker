import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jisoo',
      company: 'Team Jisoo',
      theme: 'light',
      title: 'Frontend Engineer',
      email: 'devjisoolee@gmail.com',
      message: 'go for it',
      fileName: 'jisoofile',
      fileURL: 'jisoo.png'
    },
    {
      id: '2',
      name: 'Cheetah',
      company: 'Team Cheetah',
      theme: 'colorful',
      title: 'designer',
      email: 'cutiepuppy@cheetah.com',
      message: 'I am a cutest dog',
      fileName: 'cheetahfile',
      fileURL: 'cheetah.png'
    },
    {
      id: '3',
      name: 'Tori',
      company: 'Team Tori',
      theme: 'dark',
      title: 'Product Manager',
      email: 'tori@gmail.com',
      message: 'I am a smartest dog',
      fileName: 'torifile',
      fileURL: null
    }
  ]);

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
