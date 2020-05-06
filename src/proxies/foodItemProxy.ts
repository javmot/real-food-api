import { FoodItemInterface } from "../entities/FoodItem";

export default function foodItemProxy(
	foodItemBedca: any
): FoodItemInterface | null {
	if (!foodItemBedca) return null;

	return {
		get id(): string {
			return foodItemBedca && foodItemBedca.f_id && foodItemBedca.f_id[0];
		},

		get name(): string {
			return (
				foodItemBedca && foodItemBedca.f_ori_name && foodItemBedca.f_ori_name[0]
			);
		},
	};
}
