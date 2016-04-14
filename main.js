var picture = document.getElementById('mainpicture');

picture.src = "https://placekitten.com/100/200";
picture.className="kittenimg";

var title = document.getElementsByTagName('h1')[0];

title.style.color = 'red';

var newP = document.createElement('p');

var newH1 = document.createElement('h1');

var newImg = document.createElement('img');
newImg.src = "http://placekitten.com/300/100"

var body = document.getElementsByTagName('body')[0];

body.appendChild(newImg);

body.appendChild(newH1);

body.appendChild(newP);

newH1.innerText = "Cats Invaded"

newH1.style.color = "purple";

newP.innerText = "Were going to take over your page"
