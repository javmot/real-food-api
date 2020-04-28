import { Resolver, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodGroup } from "../entities/FoodGroup";
import { Context } from "../config/context";

@Resolver(FoodGroup)
export default class FoodGroupResolver {
	@Query((_returns) => [FoodGroup], { nullable: false })
	foodGroups(@Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFoodGroups();
	}

	@FieldResolver()
	name(@Root() foodGroup: any) {
		return foodGroup.fg_ori_name[0];
	}

	@FieldResolver()
	id(@Root() foodGroup: any) {
		return foodGroup.fg_id[0];
	}
}
