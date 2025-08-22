const URL = require("../models/urlSchema.js");
const { nanoid } = require("nanoid");

async function handleGetRequest(req, res) {
    const id = req.params.id;
    const data = await URL.find();
    const user = data.find(x => x.shortID === id);
    if (!user)
        return res.status(400).json({ Message: "URL not found" });

    return res.status(200).json({ URL: user.redirectID });
    // res.redirect(user.redirectID);
}

async function handlePostRequest(req, res) {
    const body = req.body;
    const shortID = nanoid(10);
    const data = await URL.find();
    const user = data.find(x => x.redirectID === body.url);
    if (user)
        return res.status(200).json({ URL: `http://localhost:8000/url/${shortID}`, Message: "User exists" });

    await URL.create({
        shortID: shortID,
        redirectID: body.url,
    })
        .then(() => {
            return res.status(201).json({ URL: `http://localhost:8000/url/${shortID}` })
        })
        .catch((err) => {
            return res.status(400).json({ Message: "Cannot generate URL" });
        })
}

module.exports = {
    handleGetRequest,
    handlePostRequest,
}
