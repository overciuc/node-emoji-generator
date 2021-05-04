const emoji = require('node-emoji');
// console.log(emoji.get('pizza'));
// console.log(emoji.random().emoji);
// console.log(process.argv[2]);
// console.log(emoji.random().emoji);

if (!process.argv[2]) {
    console.log(emoji.random().emoji);
} else if (emoji.hasEmoji[process.argv[2]]) {
    console.log(emoji.get(process.argv[2]));
} else {
    console.log('Emoji not found');
}