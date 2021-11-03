import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state; //로그인컴포넌트 통해서 왔으면 값이 있고 다른 컴포넌트 통한다면 값이 없음
  const [userId, setUserId] = useState(historyState && historyState.id); //historystate가 있으면 그것의 id (로그인통해서 온 경우?)
  const [cards, setCards] = useState({}); //database
  const [userName, setUserName] = useState([]);

  const onLogout = () => {
    authService.logout();
  };

  //about sync
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    //useEffect내에서 return 하면 페이지가 언마운트될때 리턴에 등록한 콜백함수가 실행됨
    return () => stopSync(); //syncCards 내의 return문 실행
  }, [userId, cardRepository]);

  //about login
  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);
      } else {
        //사용자가 없다면
        history.push('/');
      }
    });
    //onAuthStateChanged에서 auth의 변경 감지할 때 실행될 콜백함수 전달
    //useEffect는 마운트될때만 호출되고 컴포넌트 상태가 변경되면 전달해놓은 콜백함수가 실행?
  }, [authService, history]);

  const createOfUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card; //card의 id를 키로, card자체를 값으로 저장
      return updated;
    });
    //(state를 업데이트할 때) 이전 상태를 배경으로 해서 변경된 값을 업데이트할 때는
    //컴포넌트 안의 스테이트를 이용해서 업뎃하면 업뎃하는 시점에 있는 스테이트가 오래된 것일 수 있음
    //즉, 동기적으로 할수 없을 때가 있음 그래서 이전값을 받아서 새로운 값을 하는 콜백함수를 이용
    //=> setCards를 부르는 시점의 cards를 복사헤서 새로 업데이트 되는 card 변경헤줌
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} userName={userName} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOfUpdateCard}
          updateCard={createOfUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
