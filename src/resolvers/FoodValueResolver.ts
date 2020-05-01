import { Resolver, FieldResolver, Root } from "type-graphql";
import { FoodValue } from "../entities/FoodValue";

@Resolver((_of) => FoodValue)
export default class FoodValueResolver {
	@FieldResolver()
	id(@Root() foodValue: any) {
		return foodValue.id || foodValue.c_id[0];
	}

	@FieldResolver()
	name(@Root() foodValue: any) {
		return foodValue.name || foodValue.c_ori_name[0];
	}

	@FieldResolver()
	total(@Root() foodValue: any) {
		const totalMapped =
			foodValue.total === undefined
				? parseFloat(foodValue.best_location[0])
				: foodValue.total;
		return totalMapped;
	}

	@FieldResolver()
	unit(@Root() foodValue: any) {
		return foodValue.unit || foodValue.v_unit[0];
	}
}
