import { Resolver, Arg, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodInfo } from "../entities/FoodInfo";
import { Context } from "../config/context";
import { getInfoProfile } from "../config/infoProfile";

const getFoodValues = (foodValues: Array<any>, profile: number) => {
	const infoProfile = getInfoProfile(profile);

	return infoProfile.length
		? infoProfile.map((valueId) =>
				foodValues.find((value) => value.bedcaId === valueId)
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
	foodValues(
		@Arg("profile", { nullable: true, defaultValue: 3 }) profile: number,
		@Root() foodInfo: any
	) {
		const values = getFoodValues(
			foodInfo.foodValues || foodInfo.foodvalue,
			profile
		);
		return values;
	}
}
