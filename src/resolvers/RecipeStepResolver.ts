import { Resolver, Query, Arg, FieldResolver } from "type-graphql";
import { RecipeStep } from "../entities/RecipeStep";
import { RecipeModel } from "../entities/Recipe";

@Resolver((_of) => RecipeStep)
export default class RecipeStepResolver {
	@Query((_returns) => [RecipeStep], { nullable: false })
	async recipeSteps(@Arg("input") recipeId: string) {
		const { steps }: any = await RecipeModel.findById(recipeId, {
			steps: true,
		});

		return steps;
	}
}
