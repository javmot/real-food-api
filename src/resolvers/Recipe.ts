import {
	Resolver,
	Arg,
	Query,
	Mutation,
	Ctx,
	FieldResolver,
	Root,
} from "type-graphql";
import { Recipe, RecipeModel } from "../entities/Recipe";
import { CreateRecipeInput } from "../inputs/Recipe";
import { Context } from "../config/context";

@Resolver(() => Recipe)
export default class RecipeResolver {
	@Query((_returns) => [Recipe], { nullable: false })
	recipes() {
		return RecipeModel.find().lean().exec();
	}

	@Query((_returns) => [Recipe], { nullable: false })
	recipesByCategory(@Arg("input") categoryId: string) {
		return RecipeModel.find({ category_id: categoryId }).lean().exec();
	}

	@FieldResolver()
	id(@Root() recipe: any) {
		return recipe._id;
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
