import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class PaginationArgs {
	@Field((_type) => Int, { defaultValue: 0 })
	skip: number;

	@Field((_type) => Int, { defaultValue: 5 })
	limit: number;
}
