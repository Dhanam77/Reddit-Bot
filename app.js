const { CommentStream } = require("snoostorm");
const repliedTo = require("./Model/repliedto.js")

require('dotenv').config();
const Snoowrap = require('snoowrap');
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    function () {
        console.log('connected to database');
    }
);

const r = new Snoowrap({
    userAgent: 'The_F_BOT',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

const stream = new CommentStream(r, { subreddit: "freefolk", results: 25 });
var count = 0;
const my_author_id = process.env.MY_AUTHOR_ID;
stream.on("item", async function (comment) {
    if (comment.author_fullname !== my_author_id) {
        if (comment.body.includes('D&D')) {
            console.log(comment);
            console.log(++count);
            comment.reply('Fuck D&D');
            const repliedToObject = new repliedTo({
                comment_id: comment.id
            });
            try {
                await repliedToObject.save();
            }
            catch (err) {
                console.log(err);
            }
        }
        else if (comment.body.includes('2D')) {
            console.log(comment);
            console.log(++count);
            comment.reply('Fuck 2D');
            const repliedToObject = new repliedTo({
                comment_id: comment.id
            });
            await repliedToObject.save();
        }
        else if (comment.body.includes('DnD')) {
            console.log(comment);
            console.log(++count);
            comment.reply('Fuck DnD');
            const repliedToObject = new repliedTo({
                comment_id: comment.id
            });
            await repliedToObject.save();
        }
    }
}
);

async function already_commented(id) {
    repliedTo.findOne({ comment_id: id }, function (err, doc) {
        if (err) throw err;
        if (doc) {
            return true;
        }
        else {
            return false;
        }
    });

}