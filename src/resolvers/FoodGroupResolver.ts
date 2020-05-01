import { Resolver, Query, Ctx } from "type-graphql";
import { FoodGroup } from "../entities/FoodGroup";
import { Context } from "../config/context";

@Resolver((_of) => FoodGroup)
export default class FoodGroupResolver {
	@Query((_returns) => [FoodGroup], { nullable: false })
	foodGroups(@Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFoodGroups();
	}
}
