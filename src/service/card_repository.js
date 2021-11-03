import { firebaseDatabase } from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    //firebase에서 이 경로의 데이터가 업데이트 될때마다
    //snapshot의 value가 설정되어있으면 onUpdate라는 콜백함수 호출
    ref.on('value', snappshot => {
      const value = snappshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); //위 구문 처리 끝나면 synCard애 리턴 이하의 콜백이 할당됨(sync처리 끄고싶을 떄)
  }
}

export default CardRepository;
