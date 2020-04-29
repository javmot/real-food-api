import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import { RecipeStep } from "../entities/RecipeStep";
import { RecipeModel } from "../entities/Recipe";

@Resolver(() => RecipeStep)
export default class RecipeStepResolver {
	@Query((_returns) => [RecipeStep], { nullable: false })
	async recipeSteps(@Arg("input") recipeId: string) {
		const { steps }: any = await RecipeModel.findById(recipeId, {
			steps: true,
		}).lean();

		return steps;
	}

	@FieldResolver()
	id(@Root() recipeStep: any) {
		return recipeStep._id || "";
	}
}
