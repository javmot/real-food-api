import { RESTDataSource } from "apollo-datasource-rest";
import { parseStringPromise } from "xml2js";
import { getGroupsQuery, getGroupQuery, getFoodQuery } from "./xmlQueries";
import foodItemsProxy from "../proxies/foodItemsProxy";
import foodGroupsProxy from "../proxies/foodGroupsProxy";
import foodInfoProxy from "../proxies/foodInfoProxy";

const headers = {
	"content-type": "text/xml",
};

const parseResponse = (response: any): any => {
	return response.foodresponse.food;
};

export default class BedcaAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://www.bedca.net/bdpub";
	}

	getFoodGroups() {
		return this.post("procquery.php", getGroupsQuery(), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then(foodGroupsProxy);
	}

	getFoodGroup(groupId: string) {
		return this.post("procquery.php", getGroupQuery(groupId), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then(foodItemsProxy);
	}

	getFood(foodId: string) {
		return this.post("procquery.php", getFoodQuery(foodId), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then((food) => food[0])
			.then(foodInfoProxy);
	}
}
