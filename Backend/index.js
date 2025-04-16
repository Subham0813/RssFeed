const express = require("express");
const RSSParser = require("rss-parser");
const cors = require("cors");
const newsData = require("./test.json");

const app = express();
const parser = new RSSParser();
const PORT = 4000;
app.use(cors());

const getData = async url => {
  try {
    const feed = await parser.parseURL(url);
    const items = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      date: item.pubDate
    }));
    return items;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return [];
  }
};

app.get("/category/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newsFeeds = await Promise.all(
      newsData[id].feedUrls.map(async item => ({
        name: item.name,
        data: [await getData(item.url)]
      }))
    );
    
    res.json(newsFeeds);
  } catch (err) {
    console.log("Error fetching feeds: ", err.message);
    res.status(500).json({ message: "Error fetching feeds" });
  }
});

app.listen(PORT, () =>
  console.log(`server started... visit http://localhost:${PORT}`)
);
