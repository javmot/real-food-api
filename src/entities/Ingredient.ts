import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { IFoodItem } from "./IFoodItem";
import { UnitEnum } from "./UnitEnum";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item" })
export class Ingredient {
	id?: string;

	@prop({ required: true })
	name!: string;

	@Field()
	@prop({ required: true })
	quantity!: number;

	@Field((_type) => UnitEnum)
	@prop({ required: true, enum: UnitEnum, type: Number })
	unit!: UnitEnum;
}

export interface IngredientInterface extends Ingredient {}
