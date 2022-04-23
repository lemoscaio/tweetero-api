import express from "express";
import cors from "cors";
import fetch from "node-fetch";

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
        tweet: "eu amo o hub2",
    },
    {
        username: "lemoscaio",
        avatar: "https://avatars.githubusercontent.com/u/74937642?v=4",
        tweet: "eu amo o hub3",
    },
    {
        username: "usuario1",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet4",
    },
    {
        username: "usuario2",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet5",
    },
    {
        username: "usuario3",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet6",
    },
    {
        username: "usuario4",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet7",
    },
    {
        username: "usuario5",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet8",
    },
    {
        username: "usuario6",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet9",
    },
    {
        username: "usuario7",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet10",
    },
    {
        username: "usuario8",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet11",
    },
    {
        username: "usuario9",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet12",
    },
    {
        username: "usuario10",
        avatar: "https://picsum.photos/200/300",
        tweet: "tweet13",
    },
];

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
    const lastTenTweets = tweets.filter((tweet, index) => {
        return index > tweets.length - 11;
    });

    res.send(lastTenTweets);
});

app.post("/tweets", (req, res) => {
    const body = req.body;

    if (!body.username || !body.tweet) {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        const user = users.find((user) => user.username === req.body.username);
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
    console.log("Nasceu na porta");
});
