import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');
test1El.test(() => {
  const template = document.querySelector('template');
  const templateContent = template.content

  const imgEl = templateContent.querySelector('img')

  const hasSrc = imgEl.hasAttribute('src')
  const hasAlt = imgEl.hasAttribute('alt')

  const pEl = templateContent.querySelector('p')
  const hasArtistName = Boolean(pEl.innerHTML)

  const h3El = templateContent.querySelector('h3')
  const hasAlbumName = Boolean(h3El.innerHTML)

  return !(hasSrc && hasAlt && hasArtistName && hasAlbumName);
})

const test2El = document.getElementById('test-2');
test2El.test(() => {
  const component = document.querySelectorAll('album-art')[0];
  const shadowRoot = component.shadowRoot;

  const imgEl = shadowRoot.querySelector('img');
  const artistNameEl = shadowRoot.querySelector('h3');
  const albumNameEl = shadowRoot.querySelector('p');

  const imgSrc = imgEl.getAttribute('src');
  const imgAlt = imgEl.getAttribute('alt');
  const artistName = artistNameEl.textContent;
  const albumName = albumNameEl.textContent;

  const isValidImgSrc = imgSrc === 'https://component-odyssey.s3.amazonaws.com/romy-melny-nature.jpg'
  const isValidImgAlt = imgAlt === 'Romy Melny album cover'
  const isValidArtistName = artistName === 'Romy Melny'
  const isValidAlbumName = albumName === 'Nature'


  return isValidImgSrc && isValidImgAlt && isValidArtistName && isValidAlbumName;
})
