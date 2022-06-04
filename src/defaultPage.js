export default function defaultPage(){


let content=document.getElementById('content');
const heading=document.createElement('h1');
heading.innerText='My amazing Restaurant';

const headingSmall=document.createElement('h2');
headingSmall.innerText='Our todays food looks like this:';

const foodDiv=document.createElement('div');
foodDiv.id='food-div';
const penus='a';
    const bowlText=document.createElement('p');
    bowlText.innerText='This chia bowl is packed with fiber, low in sugar, and is the perfect breakfast to fuel you for the day!';
    const bowlImg=document.createElement('img');
    bowlImg.src='../src/bowl.jpg';
    bowlImg.width=200;
    const bowlDiv=document.createElement('div');
    bowlDiv.append(bowlText,bowlImg);

    const ketoText=document.createElement('p');
    ketoText.innerText='This keto plate is particularly great for all of you low carb high fat lowers!';
    const ketoImg=document.createElement('img');
    ketoImg.src='../src/keto.jpg';
    ketoImg.width=200;
    const ketoDiv=document.createElement('div');
    ketoDiv.append(ketoText,ketoImg);

    const wrapText=document.createElement('p');
    wrapText.innerText='You love that crispy feeling of a crunchy wrap in your mouth, dont you? Try out this wrap - you will love it even more!';
    const wrapImg=document.createElement('img');
    wrapImg.src='../src/wrap.jpg';
    wrapImg.width=200;
    const wrapDiv=document.createElement('div');
    wrapDiv.append(wrapText,wrapImg);

    foodDiv.append(bowlDiv,ketoDiv,wrapDiv);

content.append(heading,headingSmall,foodDiv);
return content;
};