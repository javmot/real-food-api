import arrayProxy from "./arrayProxy";
import foodValueProxy from "./foodValueProxy";

export default function foodValuesProxy(
	foodValuesBedca: Array<any>
): Array<any> {
	return arrayProxy(foodValuesBedca, foodValueProxy);
}
