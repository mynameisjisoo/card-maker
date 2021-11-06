import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import { firebaseApp } from './service/firebase';
import '@fortawesome/fontawesome-free/js/all.js';

const authService = new AuthService(firebaseApp);

const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

/*
    1) add_form 이나 edit_form에서 imageFileInput에 imageUploader 서비스를 전달하려면 prop으로 타고타고타고
    전달해야 함. 그래서 ImageFileInput 컴포넌트를 외부에서 만든다음에 컴포넌트 자체를 전달함 
    2) 그냥 컴포넌트를 전달하면 예를들면 (FileInput = <ImageFileInput imageuploader={imageUploader}/>) 
    확장성이 떨어지기 때문에 콜백함수로 감싼다. 사용자가 fileInput을 사용할 때 원하는 prop을 전달하면 그대로 컴포넌트에 전달해줌
    3) 컴포넌트 prop인 경우 보통 대문자로 시작
*/

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
