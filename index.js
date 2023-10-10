const express = require("express");
const cors = require("cors");

const app = express();
const userRoute = require("./routes/Users");
app.use(cors());
app.use(express.json());

const port = 5000;
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

app.use("/users", userRoute);
