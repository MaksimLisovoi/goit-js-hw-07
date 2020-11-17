const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.getElementById('gallery');

images.forEach(el => {
    gallery.insertAdjacentHTML("afterbegin", '<li><img>')
    const imgTags = gallery.querySelectorAll('img')
    imgTags[0].setAttribute("alt", el.alt);
    imgTags[0].setAttribute("src", el.url);
    imgTags[0].setAttribute("width", '300');
   
    // const imgTags = document.createElement('img')
    // console.log(imgTags);
    // const listItems = document.createElement('li')
    // imgTags.setAttribute("alt", el.alt);
    // imgTags.setAttribute("src", el.url);
    // imgTags.setAttribute("width", '300');
    // listItems.insertAdjacentElement('afterbegin', imgTags);
    //  gallery.appendChild(listItems);
});
console.log(gallery);