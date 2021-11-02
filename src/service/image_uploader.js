class ImageUploader {
  async upload(file) {
    const data = new FormData();
    const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    data.append('file', file);
    data.append('upload_preset', preset);
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/jisoo/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    return await result.json();
  }
}
export default ImageUploader;
