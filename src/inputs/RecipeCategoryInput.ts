import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { RecipeCategory } from "../entities/RecipeCategory";

@InputType()
export class CreateRecipeCategoryInput implements Partial<RecipeCategory> {
	@Field()
	@Length(1, 255)
	title!: string;
}
