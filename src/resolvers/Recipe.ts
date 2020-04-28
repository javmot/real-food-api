import { Resolver, Query } from "type-graphql";
import { Recipe } from "../entities/Recipe";

@Resolver(Recipe)
export default class RecipeResolver {
	@Query((_returns) => Recipe, { nullable: false })
	Recipes(_: any, __: any, { dataSources }: any) {
		return dataSources.bedcaApi.getFoodGroups();
	}
}
