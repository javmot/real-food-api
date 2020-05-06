import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "The bedca Food Item" })
export class FoodItem {
	@Field((_type) => ID)
	@prop({ required: true })
	id!: string;

	@Field()
	@prop({ required: true })
	name!: string;
}

export interface FoodItemInterface extends FoodItem {}
