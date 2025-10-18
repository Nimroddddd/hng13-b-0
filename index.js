import axios from "axios";
import express from "express";

const port = 3000

const app = express()

const user = {
  email: "min123kabir@gmail.com",
  name: "Amin Abulkabir",
  stack: "Node.js/Express"
}

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact")
    const { fact } = response.data
    return res.status(200).json({
      status: "success",
      user,
      timestamp: new Date(),
      fact
    })
  } catch (error) {
    console.log(error.message)
    return res.status(503).json({
      status: "success",
      user,
      timestamp: new Date(),
      fact: "Cat Fact API is down, please try again later."
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})