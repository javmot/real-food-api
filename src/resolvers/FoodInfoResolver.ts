import { Resolver, Arg, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodInfo } from "../entities/FoodInfo";
import { Context } from "../config/context";
import { getInfoProfile } from "../config/infoProfile";

const getFoodValues = (foodValues: Array<any>, profile: number) => {
	const infoProfile = getInfoProfile(profile);

	return infoProfile.length && foodValues.length
		? infoProfile.map((valueId) =>
				foodValues.find((value) => value.bedcaId === valueId)
		  )
		: foodValues;
};

@Resolver((_of) => FoodInfo)
export default class FoodInfoResolver {
	@Query((_returns) => FoodInfo, { nullable: true })
	foodInfo(@Arg("input") foodId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFood(foodId);
	}

	@FieldResolver()
	foodValues(
		@Arg("profile", {
			nullable: true,
			defaultValue: 3,
			description: `Defines detail level: 0 -> Energy, 1 -> Macros, 2 -> Detailed, 3 -> All (default)`,
		})
		profile: number,
		@Root() foodInfo: any
	) {
		const values = getFoodValues(foodInfo.foodValues, profile);
		return values;
	}
}
