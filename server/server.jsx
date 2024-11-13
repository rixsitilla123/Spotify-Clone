const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require("spotify-web-api-node")
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/login", (req, res) => {
	const code = req.body.code
	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:5173",
		clientId: "85ab93ef58bb46a49e6aad04f697da0b",
		clientSecret: "1b95fe3017ef4decbc365352f7f52989"
	})
	spotifyApi.authorizationCodeGrant(code).then(data => {
		res.json({
			accessToken: data.body.access_token,
			refreshToken: data.body.refresh_token,
			expiresIn: data.body.expires_in
		})
	}).catch(err => {
		res.sendStatus(400)
	})
})

app.listen(3001)