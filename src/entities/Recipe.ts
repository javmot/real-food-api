import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
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
	@Property({ required: true })
	title: string;

	@Field()
	@Property()
	time: string;

	@Field()
	@Property()
	img?: string;

	@Field((_type) => String)
	@Property({ ref: RecipeCategory, required: true })
	categoryId: Ref<RecipeCategory>;

	@Field((_type) => RecipeStep)
	@Property({ required: true })
	steps: RecipeStep[];

	@Field((_type) => FoodItem)
	@Property({ required: true })
	ingredients: FoodItem[];

	@Field((_type) => String)
	@Property({ ref: User, required: true })
	userId: Ref<User>;
}

export const RecipeModel = getModelForClass(Recipe);
