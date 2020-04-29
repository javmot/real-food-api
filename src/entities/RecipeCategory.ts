import { ObjectType, Field, ID } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The categories of the recipes" })
export class RecipeCategory {
	@Field(() => ID)
	id: string;

	@Field()
	@prop({ required: true })
	title: string;
}

export const RecipeCategoryModel = getModelForClass(RecipeCategory);
