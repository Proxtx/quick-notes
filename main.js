import { listen } from "@proxtx/framework";
import config from "@proxtx/config";

listen(config.port);
console.log("Server Started. Port:", config.port);
