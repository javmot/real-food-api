import arrayProxy from "./arrayProxy";
import foodGroupProxy from "./foodGroupProxy";

export default function foodGroupsProxy(
	foodGroupsBedca: Array<any>
): Array<any> {
	return arrayProxy(foodGroupsBedca, foodGroupProxy);
}
