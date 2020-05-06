import { FoodGroupInterface } from "../entities/FoodGroup";

export default function foodGroupProxy(
	foodGroupBedca: any
): FoodGroupInterface | null {
	if (!foodGroupBedca) return null;

	return {
		get id(): string {
			return foodGroupBedca && foodGroupBedca.fg_id && foodGroupBedca.fg_id[0];
		},

		get name(): string {
			return (
				foodGroupBedca &&
				foodGroupBedca.fg_ori_name &&
				foodGroupBedca.fg_ori_name[0]
			);
		},
	};
}
