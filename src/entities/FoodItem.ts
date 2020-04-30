import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "The bedca Food Item" })
export class FoodItem {
	@Field(() => ID)
	@prop({ required: true })
	id!: string;

	@Field()
	@prop({ required: true })
	name!: string;
}
