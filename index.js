import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// const users = [];
const users = [
    {
        username: "lemoscaio",
        avatar: "https://avatars.githubusercontent.com/u/74937642?v=4",
    },
];
// const tweets = [];
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
    },
    {
        username: "lemoscaio",
        avatar: "https://avatars.githubusercontent.com/u/74937642?v=4",
        tweet: "eu amo o hub",
    },
];

app.post("/sign-up", (req, res) => {
    const body = req.body;
    const newUser = {
        username: body.username,
        avatar: body.avatar,
    };
    users.push(newUser);
    res.send("Ok");
});

app.get("/tweets", (req, res) => {
    const lastTenTweets = tweets.filter((tweet, index) => {
        return index > tweets.length - 11;
    });

    res.send(lastTenTweets);
});

app.post("/tweets", (req, res) => {
    const body = req.body;
    const user = users.find((user) => user.username === req.body.username);
    const newTweet = {
        username: user.username,
        avatar: user.avatar,
        tweet: body.tweet,
    };
    tweets.push(newTweet);
    res.send("Ok");
});

app.get("/tweets/:username", (req, res) => {
    const { username } = req.params;

    const userTweets = tweets.filter((tweet) => {
        return tweet.username === username;
    });

    res.send(userTweets);
});

app.listen(5000, () => {
    console.log("Nasceu na porta");
});
