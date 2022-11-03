const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, './src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');
 
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}
 
fs.readdirSync(target)
    .forEach(image => {
      // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -large.jpg
      sharp(`${target}/${image}`)
          .resize(1200)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
          );
 
      // mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium0large.jpg
      sharp(`${target}/${image}`)
          .resize(1000)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-medium-large.jpg`),
          );

          // mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium.jpg
          sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`),
          );

          // mengubah ukuran gambar dengan lebar 800px, dengan prefix -small.jpg
          sharp(`${target}/${image}`)
          .resize(600)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
          );

          
          // mengubah ukuran gambar dengan lebar 800px, dengan prefix -xsmall.jpg
          sharp(`${target}/${image}`)
          .resize(400)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-xsmall.jpg`),
          );
    });