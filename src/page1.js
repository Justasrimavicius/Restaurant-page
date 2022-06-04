export default function page1(){

let content=document.getElementById('content');


const mainDiv=document.createElement('div');
mainDiv.classList.add('main-div');

const heading=document.createElement('h1');
heading.innerText='The glorious and amazing CHAIA BOWL';
const desc=document.createElement('p');
desc.classList.add('desc');
desc.innerText='Chia can be a funny ingredient to experiment with, and quite honestly, Im not always a fan of chia preparations. That said, when Ive found my groove with them, theyre great - high in fiber, omega-3s, an ancient energy seed used by the Aztecs, Mayans, and Incans. I make a version of this bowl before a yoga class, or before a morning paddling / swimming in Lake Tahoe, and it really keeps me going, feeling strong.';

const Recipe=document.createElement('div');
Recipe.classList.add('recipe-div');

const recipePara=document.createElement('p');
recipePara.classList.add('recipe-para');
recipePara.innerText='Combine the chia seeds with the almond milk and stir well. Allow to sit for at least 15 minutes, stirring occasionally, or until the chia seeds completely bloom and soften. You can also do this step a night ahead, but I like the flavor better when the chia isnt allowed to sit for that long. Just before serving, sweeten to taste with preferred sweetener, and then top with toasted coconut flakes, crushed seasonal fruit, and anything else you like.';

const chiaImg=document.createElement('img');
chiaImg.src='../src/keto.jpg';
chiaImg.width=400;
Recipe.append(chiaImg,recipePara);
mainDiv.append(heading,desc,Recipe);



content.append(mainDiv);
return content;
}