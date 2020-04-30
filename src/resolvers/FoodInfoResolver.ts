import { Resolver, Arg, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodInfo } from "../entities/FoodInfo";
import { Context } from "../config/context";
import { getInfoProfile } from "../config/infoProfile";

const getFoodValues = (foodValues: Array<any>, profile: number) => {
	const infoProfile = getInfoProfile(profile);

	return infoProfile.length
		? infoProfile.map((valueId) =>
				foodValues.find((value) => value.c_id[0] === valueId)
		  )
		: foodValues;
};

@Resolver((_of) => FoodInfo)
export default class FoodInfoResolver {
	@Query((_returns) => FoodInfo, { nullable: false })
	foodInfo(@Arg("input") foodId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFood(foodId);
	}

	@FieldResolver()
	name(@Root() foodInfo: any) {
		return foodInfo.name || foodInfo.f_ori_name[0];
	}

	@FieldResolver()
	id(@Root() foodInfo: any) {
		return foodInfo.id || foodInfo.f_id[0];
	}

	@FieldResolver()
	foodValues(
		@Arg("profile", { nullable: true, defaultValue: 3 }) profile: number,
		@Root() foodInfo: any
	) {
		const values = getFoodValues(foodInfo.foodvalue, profile);
		return values;
	}
}
