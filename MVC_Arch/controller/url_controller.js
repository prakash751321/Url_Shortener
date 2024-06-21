const shortid = require("shortid");
const URL = require("../model/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectedUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID
  })
  // return res.json({ id: shortID });
}

async function getShortIdUrl(req, res) {
    const shortId = req.params.shortId
        const data = await URL.findOneAndUpdate({
            shortId
        }, {
            $push: {
                visitHistory: {
                    timestamp: new Date().toString()
                }
            }
        })
        res.redirect(data.redirectedUrl)
    }

async function getAnalytics(req, res) {
    const shortId = req.params.shortId
    const data = await URL.findOne({ shortId })
    return res.json({
        totalClicks : data.visitHistory.length,
        analytics : data.visitHistory
    })
}

module.exports = {
  generateNewShortUrl,
  getShortIdUrl,
  getAnalytics
};
