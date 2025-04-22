;
import app from "./src/app.js";
import config from './src/config/config.js  ';






import connectDB from './src/db/db.js';
connectDB()
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });