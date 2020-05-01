import { FoodValueInterface } from "../entities/FoodValue";
import { FoodInfoInterface } from "../entities/FoodInfo";
import foodValuesProxy from "./foodValuesProxy";

export default function foodInfoProxy(foodInfoBedca: any): FoodInfoInterface {
	return {
		get id(): string {
			return foodInfoBedca && foodInfoBedca.f_id && foodInfoBedca.f_id[0];
		},

		get name(): string {
			return (
				foodInfoBedca && foodInfoBedca.f_ori_name && foodInfoBedca.f_ori_name[0]
			);
		},

		get foodValues(): Array<FoodValueInterface> {
			return foodValuesProxy(foodInfoBedca.foodvalue);
		},
	};
}
