import { RESTDataSource } from "apollo-datasource-rest";
import { parseStringPromise } from "xml2js";
import { getGroupsQuery, getGroupQuery, getFoodQuery } from "./xmlQueries";

const headers = {
	"content-type": "text/xml",
};

const getFood = (response: any): any => {
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
			.then(getFood);
	}

	getFoodGroup(groupId: string) {
		return this.post("procquery.php", getGroupQuery(groupId), { headers })
			.then(parseStringPromise)
			.then(getFood);
	}

	getFood(foodId: string) {
		return this.post("procquery.php", getFoodQuery(foodId), { headers })
			.then(parseStringPromise)
			.then(getFood)
			.then((food) => food[0]);
	}
}
