const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || process.env.API_PORT;

const authRoute = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// register the routes

app.use("/api/auth/", authRoute);

const server = http.createServer(app);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server is running on ${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err);
	});
