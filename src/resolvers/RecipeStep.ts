import { Resolver, Query } from "type-graphql";
import { RecipeStep } from "../entities/RecipeStep";

@Resolver(() => RecipeStep)
export default class RecipeStepResolver {
	@Query((_returns) => RecipeStep, { nullable: false })
	RecipeSteps(_: any, __: any, { dataSources }: any) {
		return dataSources.bedcaApi.getFoodGroups();
	}
}
