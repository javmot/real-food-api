/* eslint-disable max-classes-per-file */
import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Ref } from "../types";
import { RecipeCategory } from "../entities/RecipeCategory";
import { Recipe } from "../entities/Recipe";
import { RecipeStepInput } from "./RecipeStepInput";
import { IngredientInput } from "./IngredientInput";

@InputType()
export class CreateAllRecipeInput implements Partial<Recipe> {
	@Field()
	@Length(1, 255)
	title!: string;

	@Field()
	time!: string;

	@Field((_type) => String)
	categoryId!: Ref<RecipeCategory>;

	@Field((_type) => RecipeStepInput)
	steps!: RecipeStepInput[];

	@Field((_type) => IngredientInput)
	ingredients!: IngredientInput[];
}

@InputType()
export class CreateRecipeInput implements Partial<Recipe> {
	@Field()
	@Length(1, 255)
	title!: string;

	@Field()
	time!: string;

	@Field()
	servings!: number;

	@Field((_type) => String)
	categoryId!: Ref<RecipeCategory>;
}
