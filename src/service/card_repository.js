import firebaseApp from 'firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    //firebase에서 이 경로의 데이터가 업데이트 될때마다
    //snapshot의 value가 설정되어있으면 onUpdate라는 콜백함수 호출
    ref.on('value', snappshot => {
      const value = snappshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); //sync처리 끄고싶을 떄
  }
}

export default CardRepository;
