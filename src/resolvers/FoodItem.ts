import { Resolver, Arg, Query, Ctx, FieldResolver, Root } from "type-graphql";
import { FoodItem } from "../entities/FoodItem";
import { Context } from "../config/context";

@Resolver(FoodItem)
export default class FoodItemResolver {
	@Query((_returns) => [FoodItem], { nullable: false })
	foodGroup(@Arg("input") groupId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFoodGroup(groupId);
	}

	@FieldResolver()
	name(@Root() foodItem: any) {
		return foodItem.f_ori_name[0];
	}

	@FieldResolver()
	id(@Root() foodItem: any) {
		return foodItem.f_id[0];
	}
}
