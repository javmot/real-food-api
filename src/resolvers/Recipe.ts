import { Resolver, Arg, Query, Mutation, Ctx } from "type-graphql";
import { Recipe, RecipeModel } from "../entities/Recipe";
import { CreateRecipeInput } from "../inputs/Recipe";
import { Context } from "../config/context";

@Resolver(Recipe)
export default class RecipeResolver {
	@Query((_returns) => [Recipe], { nullable: false })
	recipes() {
		return RecipeModel.find();
	}

	@Query((_returns) => [Recipe], { nullable: false })
	recipesByCategory(@Arg("input") categoryId: string) {
		return RecipeModel.find({ category_id: categoryId });
	}

	@Mutation((_returns) => Recipe, { nullable: false })
	createRecipe(
		@Arg("input") recipeInput: CreateRecipeInput,
		@Ctx() { user }: Context
	) {
		return RecipeModel.create({
			...recipeInput,
			userId: user,
		});
	}
}
