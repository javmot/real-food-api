import { ObjectType, Field, ID } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Steps Of the Recipe" })
export class RecipeStep {
	@Field(() => ID)
	id: string;

	@Field()
	@prop()
	title: string;

	@Field()
	@prop()
	img?: string;

	@Field()
	@prop()
	description?: string;
}

export const RecipeStepModel = getModelForClass(RecipeStep);
