const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors");
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static("public"))

app.post('/submit-email', cors(), (req, res)=>{
    console.log("Function started");
    const email = req.body.email
    console.log("Email - " + email);
    if (!email) {
        return res.status(400).json({ error: 'Email address is required' });
      }
    const data = {
        members: [{
            email_address: email,
           status: "subscribed"
        }]
    }
    jsonData = JSON.stringify(data)
    const apiKey = "1d7cd524ccd69eaad21dc25bdf57de7e-us11"
    const url = "https://us11.api.mailchimp.com/3.0/lists/5f077fb7ab"
    const options = {
        method: "POST",
        auth: "will:1d7cd524ccd69eaad21dc25bdf57de7e-us11",
        headers: {
            "Content-Type": "application/json", 
          }      
    }
    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
    console.log(email)
})
app.listen(8000, (req, res)=>{
    console.log("Server is Running on Port 8000")
})