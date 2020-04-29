import { Resolver, FieldResolver, Root } from "type-graphql";
import { FoodValue } from "../entities/FoodValue";

@Resolver(() => FoodValue)
export default class FoodValueResolver {
	@FieldResolver()
	id(@Root() foodValue: any) {
		return foodValue.c_id[0];
	}

	@FieldResolver()
	name(@Root() foodValue: any) {
		return foodValue.c_ori_name[0];
	}

	@FieldResolver()
	total(@Root() foodValue: any) {
		return parseFloat(foodValue.best_location[0]);
	}

	@FieldResolver()
	unit(@Root() foodValue: any) {
		return foodValue.v_unit[0];
	}
}
