import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Ref } from "../types";
import { RecipeCategory } from "../entities/RecipeCategory";
import { Recipe } from "../entities/Recipe";
import { RecipeStepInput } from "./RecipeStepInput";
import { FoodItemInput } from "./FoodItemInput";

@InputType()
export class CreateRecipeInput implements Partial<Recipe> {
	@Field()
	@Length(1, 255)
	title!: string;

	@Field()
	time!: string;

	@Field((_type) => String)
	categoryId!: Ref<RecipeCategory>;

	@Field((_type) => RecipeStepInput)
	steps!: RecipeStepInput[];

	@Field((_type) => FoodItemInput)
	ingredients!: FoodItemInput[];
}
