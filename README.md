# Server-Notion-Dictionary-API

## Description
A webapp that seeks to automate some of the manual facets of creating a new Notion database. It uses Notion's new API, SDK and an open dictionary API to fetch definitions & synonyms of words and posts them to a notion vocabulary db.

## Instructions
- ## Deployed Version
    - Visit [this link]()
- ## Local Version
    - ### First Time Setup Instructions
        - #### Prerequisites
            - [Node.js](https://nodejs.org/en/)
            - [npm](https://www.npmjs.com/get-npm)
        - Fork and Clone This Repository
        - Create a file called `.env`
        - Inside `.env`:
            - Add `NOTION_API_TOKEN = {Your Notion developer API token}` ([Sign up here](https://developers.notion.com/), if you haven't already)
            - Add `WORD_DATABASE_ID = {The ID of the Notion database you wish to append these datapoints to}`
        - In the terminal run `npm install`
    - ### Regular Running (After first time setup)
        - #### Terminal 1
            - Run `npm start`
            - NOTE: When finished, kill server with `CTRL+C` twice and the run `exit` before closing terminal
