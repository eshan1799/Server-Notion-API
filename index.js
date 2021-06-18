// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Client } = require("@notionhq/client");

const server = express ()
const port = process.env.PORT || 5000

server.use(express.json())
server.use(cors())

// const corsOptions = {
//     origin: 'https://notion-api-sdk.herokuapp.com/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

server.get('/', (req, res) => { res.send("Notion server running!") })

server.post('/', function (req, res) {
    const data = req.body
    const newPageRes = createNewPage(data.postWord, data.postDefinition, data.postSynonyms)
    res.send(newPageRes);
})

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

async function createNewPage(word, definition, synonyms) {
    const response = await notion.pages.create({
        parent: {
            database_id: process.env.WORD_DATABASE_ID,
        },
        properties: {
            Word: {
                title: [
                    {
                        text: {
                            content: word,
                        },
                    },
                ],
            },
            Definition: {
                rich_text: [{
                    text: {
                        content: definition
                    }
                }]
            },
            Synonym: {
                rich_text: [{
                    text: {
                        content: synonyms,
                    }
                }]
            },
        },
    });
    return response;
};

server.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))
