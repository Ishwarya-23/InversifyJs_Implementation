import { container } from "./inversify.config";
import { ApiManager } from "./utils/apiManager";

let apiManager = container.get<ApiManager>("ApiManager");
apiManager.fetchData();