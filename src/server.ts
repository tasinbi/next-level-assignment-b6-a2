import app from "./app";
import config from "./config";
import initDB from "./config/db";

const port = config.port || 5000;

initDB();
//!===== Server Running =====
app.listen(port, () => {
  console.log(`Server Running listening on port ${port}`);
});
