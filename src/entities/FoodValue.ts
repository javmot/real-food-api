import { ObjectType, Field, Float, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "The bedca Food Value" })
export class FoodValue {
	@Field((_type) => ID)
	id!: string;

	@Field()
	@prop()
	bedcaId!: string;

	@Field({ nullable: true })
	@prop()
	name?: string;

	@Field({ nullable: true })
	@prop()
	unit?: string;

	@Field((_type) => Float, { nullable: true })
	@prop()
	total?: number;
}
