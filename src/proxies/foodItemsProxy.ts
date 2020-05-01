import arrayProxy from "./arrayProxy";
import foodItemProxy from "./foodItemProxy";

export default function foodItemsProxy(foodItemsBedca: Array<any>): Array<any> {
	return arrayProxy(foodItemsBedca, foodItemProxy);
}
