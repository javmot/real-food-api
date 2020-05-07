import { ObjectType } from "type-graphql";
import { IFoodItem } from "./IFoodItem";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item" })
export class FoodItem {
	id!: string;

	name!: string;
}

export interface FoodItemInterface extends FoodItem {}
