import { Resolver, Mutation, Query, Arg } from "type-graphql";
import {
	RecipeCategory,
	RecipeCategoryModel,
} from "../entities/RecipeCategory";
import { CreateRecipeCategoryInput } from "../inputs/RecipeCategoryInput";

@Resolver((_of) => RecipeCategory)
export default class RecipeCategoryResolver {
	@Query((_returns) => [RecipeCategory], { nullable: false })
	async recipeCategories() {
		return RecipeCategoryModel.find().exec();
	}

	@Mutation((_returns) => RecipeCategory, { nullable: false })
	async createRecipeCategory(
		@Arg("input") categoryInput: CreateRecipeCategoryInput
	) {
		return RecipeCategoryModel.create(categoryInput);
	}
}
