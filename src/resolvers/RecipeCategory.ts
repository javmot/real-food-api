import { Resolver, Query } from "type-graphql";
import { RecipeCategory } from "../entities/RecipeCategory";

@Resolver(RecipeCategory)
export default class RecipeCategoryResolver {
	@Query((_returns) => RecipeCategory, { nullable: false })
	async RecipeCategorys(_: any, __: any, { dataSources }: any) {
		return dataSources.bedcaApi.getFoodGroups();
	}
}
