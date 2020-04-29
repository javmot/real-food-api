import { ObjectType, Field, ID } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { Ref } from "../types";
import { User } from "./User";
import { RecipeStep } from "./RecipeStep";
import { FoodItem } from "./FoodItem";
import { RecipeCategory } from "./RecipeCategory";

@ObjectType({ description: "The Recipe model" })
export class Recipe {
	@Field(() => ID)
	id: string;

	@Field()
	@prop({ required: true })
	title: string;

	@Field()
	@prop()
	time: string;

	@Field()
	@prop()
	img?: string;

	@Field((_type) => String)
	@prop({ ref: RecipeCategory, required: true })
	categoryId: Ref<RecipeCategory>;

	@Field((_type) => RecipeStep)
	@prop({ required: true, ref: RecipeStep })
	steps: RecipeStep[];

	@Field((_type) => FoodItem)
	@prop({ required: true })
	ingredients: FoodItem[];

	@Field((_type) => String)
	@prop({ ref: User, required: true })
	userId: Ref<User>;
}

export const RecipeModel = getModelForClass(Recipe);
