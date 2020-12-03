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

const stream = new CommentStream(r, { subreddit: "freefolk", results: 25});
var count = 0;
const  my_author_id = 't2_94572vkq';
const already_commented = false;
stream.on("item", function(comment) {
    if(comment.author_fullname !== my_author_id){
        if(!already_commented){
            if (comment.body.includes('D&D')) {
                console.log(comment);
                console.log(comment.replies);
                console.log(++count);
                comment.reply('I say, fuck D&D');  
            }
            else if(comment.body.includes('2D')){
                console.log(comment);
                console.log(++count);
                comment.reply('Fuck 2D');                
            }
            else if(comment.body.includes('DnD')){
                console.log(comment);
                console.log(++count);
                comment.reply('Fuck DnD');
            } 
        }
    }
});