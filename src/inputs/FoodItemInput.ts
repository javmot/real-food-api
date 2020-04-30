import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { FoodItem } from "../entities/FoodItem";

@InputType()
export class FoodItemInput implements Partial<FoodItem> {
	@Field()
	@Length(1, 255)
	id!: string;

	@Field()
	@Length(1, 255)
	name!: string;
}
