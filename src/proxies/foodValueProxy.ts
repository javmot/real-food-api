import { FoodValueInterface } from "../entities/FoodValue";

export default function foodValueProxy(
	foodValueBedca: any
): FoodValueInterface {
	return {
		get id(): string {
			return foodValueBedca && foodValueBedca.c_id && foodValueBedca.c_id[0];
		},

		get bedcaId(): string {
			return foodValueBedca && foodValueBedca.c_id && foodValueBedca.c_id[0];
		},

		get name(): string {
			return (
				foodValueBedca &&
				foodValueBedca.c_ori_name &&
				foodValueBedca.c_ori_name[0]
			);
		},

		get unit(): string {
			return (
				foodValueBedca && foodValueBedca.v_unit && foodValueBedca.v_unit[0]
			);
		},

		get total(): number {
			return (
				(foodValueBedca &&
					foodValueBedca.best_location &&
					parseFloat(foodValueBedca.best_location[0])) ||
				0
			);
		},
	};
}
