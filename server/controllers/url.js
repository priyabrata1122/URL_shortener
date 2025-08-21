const { nanoid } = require("nanoid");
const URL = require("../models/url.js");

async function handleGenerateURL(req,res) {
    const shortID=nanoid(8);
    
}