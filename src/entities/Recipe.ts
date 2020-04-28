import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Ref } from "../types";
import { User } from "../entities/User";
import { RecipeStep } from "../entities/RecipeStep";
import { FoodItem } from "../entities/FoodItem";
import { RecipeCategory } from "../entities/RecipeCategory";

@ObjectType({ description: "The Recipe model" })
export class Recipe {
	@Field(() => ID)
	id: string;

	@Field()
	@Property({ required: true })
	title: String;

	@Field()
	@Property()
	time: String;

	@Field()
	@Property()
	img?: String;

	@Field((_type) => String)
	@Property({ ref: RecipeCategory, required: true })
	category_id: Ref<RecipeCategory>;

	@Field((_type) => RecipeStep)
	@Property({ required: true })
	steps: RecipeStep[];

	@Field((_type) => FoodItem)
	@Property({ required: true })
	ingredients: FoodItem[];

	@Field((_type) => String)
	@Property({ ref: User, required: true })
	user_id: Ref<User>;
}

export const RecipeModel = getModelForClass(Recipe);
