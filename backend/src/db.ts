import { DataSource } from "typeorm";
import path from "path";
import CONFIG from "./config";

let modelsPath = "";

// for dev use
if (CONFIG.PRODUCTION) {
  // for prod use
  modelsPath = path.join(process.cwd(), "models", "*.js");
} else {
  // for dev use
  modelsPath = path.join(process.cwd(), "src", "models", "*.ts");
}

const db = new DataSource({
  type: "mysql",
  url: CONFIG.DB_URL,

  synchronize: false,     
  dropSchema: false,     

  entities: [modelsPath],
  poolSize: CONFIG.DB_POOL_SIZE,
});


export default db;
