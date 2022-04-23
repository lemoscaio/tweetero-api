import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(cors());
app.set("query parser", "simple");

const users = [],
    tweets = [];

app.post("/sign-up", (req, res) => {
    const body = req.body;

    if (!body.username || !body.avatar) {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        fetch(body.avatar)
            .then(() => {
                const newUser = {
                    username: body.username,
                    avatar: body.avatar,
                };
                users.push(newUser);
                res.status(201).send("Ok");
            })
            .catch(() => {
                res.status(400).send("Insira uma imagem válida!");
            });
    }
});

app.get("/tweets", (req, res) => {
    let page = req.query.page;

    if (Number.isInteger(parseInt(page))) {
        let numberOfTweets = 10;
        let minIndex = tweets.length - page * (numberOfTweets + 1);
        let maxIndex = tweets.length - (page - 1) * (numberOfTweets + 1);

        const tweetsPage = tweets.filter((tweet, index) => {
            return index > minIndex && index <= maxIndex;
        });

        tweetsPage.reverse();

        res.send(tweetsPage);
    } else {
        res.status(400).send("Informe uma página válida!");
    }
});

app.post("/tweets", (req, res) => {
    const body = req.body;

    if (!body.tweet) {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        const user = users.find((user) => user.username === req.header("User"));
        const newTweet = {
            username: user.username,
            avatar: user.avatar,
            tweet: body.tweet,
        };
        tweets.push(newTweet);
        res.status(201).send("Ok");
    }
});

app.get("/tweets/:username", (req, res) => {
    const { username } = req.params;

    const userTweets = tweets.filter((tweet) => {
        return tweet.username === username;
    });

    res.send(userTweets);
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
