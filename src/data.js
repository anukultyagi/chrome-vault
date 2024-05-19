import images from './../public/images';


const { dadjoke, loremIpsum, lorempicsum, pesticide } = images;

export const cardData = [
    {
        id: 1,
        imgSrc: dadjoke,
        title: 'Dad Joke Extension 😂',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    },
    {
        id: 2,
        imgSrc: lorempicsum,
        title: 'Lorem Picsum Extension 🖼',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    },
    {
        id: 3,
        imgSrc: pesticide,
        title: 'Pesticide (CSS Debugger) ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    },
    {
        id: 4,
        imgSrc: loremIpsum,
        title: 'Lorem Ipsum Extension ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    }
]
