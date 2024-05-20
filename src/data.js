import images from './../public/images';

const { dadjoke, loremIpsum, lorempicsum, pesticide } = images;

export const cardData = [
    {
        id: 1,
        imgSrc: dadjoke,
        title: 'Dad Joke Extension 😂',
        desc: 'This extension provides a daily dose of hilarious dad jokes. Click on the extension to get a good laugh every time!',
    },
    {
        id: 2,
        imgSrc: lorempicsum,
        title: 'Lorem Picsum Extension 🖼',
        desc: 'Browse high-quality images from Lorem Picsum directly in your browser. Perfect for designers and developers looking for inspiration and beautiful visuals!',
    },
    {
        id: 3,
        imgSrc: pesticide,
        title: 'Pesticide (CSS Debugger)',
        desc: 'Pesticide outlines every element on your webpage, helping you quickly identify and debug CSS layout issues with ease and efficiency.',
    },
    {
        id: 4,
        imgSrc: loremIpsum,
        title: 'Lorem Ipsum Extension',
        desc: 'Generate Lorem Ipsum text directly in your editor. Perfect for testing layouts, fonts, and content placeholders easily and conveniently!',
    }
];
