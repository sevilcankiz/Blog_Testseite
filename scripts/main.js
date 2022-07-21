let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/haus.jpg') {
      myImage.setAttribute ('src','bilder/haus.jpg');
    } else {
      myImage.setAttribute ('src','bilder/haus.jpg');
    }
}