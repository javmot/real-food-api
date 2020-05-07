import { registerEnumType } from "type-graphql";

export enum UnitEnum {
	GRAMS,
	TABLESPOON,
}

registerEnumType(UnitEnum, {
	name: "UnitEnum",
});
