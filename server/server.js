const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const LINE_CLIENT_ID = "1594376791";
const LINE_CLIENT_SECRET = "3ba4b99a88ae9f761b72b64ffb1aecfa";
const LINE_CALLBACK_URI = `http://localhost:${port}/line-callback`;

const FB_CLIENT_ID = "1163476240480655";
const FB_CLIENT_SECRET = "f2b7127b5110f27ce98f6ced8aeb3456";
const FB_CALLBACK_URI = `http://localhost:${port}/fb-callback`;
const FB_APP_TOKEN = "1163476240480655|H3F84xqXg6kq4ParF3NVVA8Awqw";

const makeQs = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.urlencoded());

app.use(express.static("../"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../login.html"));
});

app.post("/mecode-callback", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === "mecode@asia.com" && password === "mecode") {
    res.sendFile(path.join(__dirname, "../acount.html"));
  } else {
    alert("email or password is invalid.");
  }
});

app.get("/line-callback", async (req, res) => {
  const { code } = req.query;
  const tokenResponse = await axios
    .post(
      "https://api.line.me/oauth2/v2.1/token",
      makeQs({
        grant_type: "authorization_code",
        code,
        redirect_uri: LINE_CALLBACK_URI,
        client_id: LINE_CLIENT_ID,
        client_secret: LINE_CLIENT_SECRET
      })
    )
    .catch(err => {
      console.log(`token error: ${JSON.stringify(err.response.data)}`);
    });
  const profileResponse = await axios
    .post(
      "https://api.line.me/v2/profile",
      {},
      {
        headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` }
      }
    )
    .catch(err => {
      console.log(`profile error: ${JSON.stringify(err.response.data)}`);
    });

  console.log("///////////////////");
  console.log(profileResponse);

  res.redirect(
    `/acount.html?firstName=${profileResponse.data.first_name}&lastName=${
      profileResponse.data.last_name
    }&userName=${profileResponse.data.displayName}&imgUrl=${
      profileResponse.data.pictureUrl
    }`
  );
});

app.get("/fb-callback", async (req, res) => {
  const { code } = req.query;
  console.log("//////////////CODE/////////");
  console.log(code);
  const tokenResponse = await axios
    .post(
      "https://graph.facebook.com/oauth/access_token",
      makeQs({
        code,
        redirect_uri: FB_CALLBACK_URI,
        client_id: FB_CLIENT_ID,
        client_secret: FB_CLIENT_SECRET
      })
    )
    .catch(err => {
      console.log(`token error: ${JSON.stringify(err.response.data)}`);
    });
  const { access_token } = tokenResponse.data;

  console.log("//////////////////////");
  console.log(access_token);

  const vertifyTokenResponse = await axios
    .get(
      `https://graph.facebook.com/debug_token?input_token=${access_token}&access_token=${FB_APP_TOKEN}`
    )
    .catch(err => {
      console.log(`vertifyToken error: ${JSON.stringify(err.response.data)}`);
      return { data: undefined };
    });
  const { user_id } = vertifyTokenResponse.data.data;
  const profileResponse = await axios
    .get(
      `https://graph.facebook.com/${user_id}?fields=id,picture,email,languages,first_name,last_name,name`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    )
    .catch(err => {
      console.log(`profile error: ${JSON.stringify(err.response.data)}`);
    });
  // res.setHeader("Content-Type", "application/json");

  console.log("////////////////////////");
  console.log(profileResponse);

  // res.end(JSON.stringify(profileResponse.data, null, 3));

  const imgUrl = profileResponse.data.picture.data.url;

  res.redirect(
    `/acount.html?firstName=${profileResponse.data.first_name}&lastName=${
      profileResponse.data.last_name
    }&userName=${profileResponse.data.name}&imgUrl=${
      profileResponse.data.picture
    }`
  );
});

app.get("/acount.html", async (req, res) => {
  res.sendFile(path.join(__dirname, "../acount.html"));
});

app.get("/index.html", async (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
