const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'The_F_BOT',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const stream = new CommentStream(r, { subreddit: "freefolk", results: 25 });

stream.on("item", comment => {
    if (comment.body.includes('D&D') && comment.author_fullname !== 't2_94572vkq') {
        console.log(comment);
        comment.reply('Fuck D&D');  
    }
    else if(comment.body.includes('2D') && comment.author_fullname !== 't2_94572vkq'){
        console.log(comment);
        comment.reply('Fuck 2D');
    }
    else if(comment.body.includes('DnD') && comment.author_fullname !== 't2_94572vkq'){
        console.log(comment);
        comment.reply('Fuck DnD');
    }
})