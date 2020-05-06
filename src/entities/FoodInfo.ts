import { ObjectType, Field, ID } from "type-graphql";
import { prop, arrayProp, getModelForClass } from "@typegoose/typegoose";
import { FoodValue } from "./FoodValue";

@ObjectType({ description: "The bedca Food Item Info" })
export class FoodInfo {
	@Field(() => ID)
	id?: string;

	@Field({ nullable: true })
	@prop()
	name?: string;

	@Field((_type) => [FoodValue])
	@arrayProp({ items: FoodValue, required: true })
	foodValues!: FoodValue[];
}

export const FoodInfoModel = getModelForClass(FoodInfo);

export interface FoodInfoInterface extends FoodInfo {}
