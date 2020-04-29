import { Resolver, Arg, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodInfo } from "../entities/FoodInfo";
import { FoodValue } from "../entities/FoodValue";
import { Context } from "../config/context";

const ENERGY_BEDCA_ID = "409";
const PROTEIN_BEDCA_ID = "416";
const FAT_MONOUNSATURATED_BEDCA_ID = "282";
const FAT_POLYUNSATURATED_BEDCA_ID = "287";
const FAT_SATURATED_BEDCA_ID = "299";
const CHOLESTEROL_BEDCA_ID = "433";

const getFoodValue = (foodInfo: any, valueId: string): FoodValue => {
	const foodValue = foodInfo.foodvalue.find(
		(value: any) => value.c_id[0] === valueId
	);

	return {
		total: foodValue.best_location[0],
		unit: foodValue.v_unit[0],
	};
};

@Resolver(FoodInfo)
export default class FoodInfoResolver {
	@Query((_returns) => FoodInfo, { nullable: false })
	foodInfo(@Arg("input") foodId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFood(foodId);
	}

	@FieldResolver()
	name(@Root() foodInfo: any) {
		return foodInfo.f_ori_name[0];
	}

	@FieldResolver()
	id(@Root() foodInfo: any) {
		return foodInfo.f_id[0];
	}

	@FieldResolver()
	energy(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, ENERGY_BEDCA_ID);
	}

	@FieldResolver()
	protein(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, PROTEIN_BEDCA_ID);
	}

	@FieldResolver()
	fatMonounsaturated(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, FAT_MONOUNSATURATED_BEDCA_ID);
	}

	@FieldResolver()
	fatPolyunsaturated(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, FAT_POLYUNSATURATED_BEDCA_ID);
	}

	@FieldResolver()
	fatSaturated(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, FAT_SATURATED_BEDCA_ID);
	}

	@FieldResolver()
	cholesterol(@Root() foodInfo: any) {
		return getFoodValue(foodInfo, CHOLESTEROL_BEDCA_ID);
	}
}
