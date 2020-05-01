import { Resolver, Arg, Query, Mutation, Ctx } from "type-graphql";
import { Recipe, RecipeModel } from "../entities/Recipe";
import { CreateRecipeInput } from "../inputs/RecipeInput";
import { Context } from "../config/context";
import { recipeInfoHook, mergeFoodValues } from "../hooks/recipeHooks";

@Resolver((_of) => Recipe)
export default class RecipeResolver {
	@Query((_returns) => [Recipe], { nullable: false })
	recipes() {
		return RecipeModel.find().exec();
	}

	@Query((_returns) => Recipe, { nullable: true })
	recipe(@Arg("id") id: string) {
		return RecipeModel.findById(id).exec();
	}

	@Query((_returns) => [Recipe], { nullable: false })
	recipesByCategory(@Arg("input") categoryId: string) {
		return RecipeModel.find({ category_id: categoryId }).exec();
	}

	@Mutation((_returns) => Recipe, { nullable: false })
	async createRecipe(
		@Arg("input") recipeInput: CreateRecipeInput,
		@Ctx() { user, dataSources }: Context
	) {
		const foodValues = await recipeInfoHook(
			recipeInput.ingredients,
			dataSources.bedcaAPI
		);
		return RecipeModel.create({
			...recipeInput,
			userId: user,
			info: {
				name: recipeInput.title,
				foodValues: mergeFoodValues(foodValues),
			},
		});
	}
}
