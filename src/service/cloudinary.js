import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  }
});

const myImage = cld.image('docs/models');

myImage.resize(fill().width(250).height(250));
const imgElement = document.createElement('img');
imgElement.src = myImage.toURL;
export default cld;
