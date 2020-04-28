import { Resolver, Query } from "type-graphql";
import { User } from "../entities/User";

@Resolver(User)
export default class UserResolver {
	@Query((_returns) => User, { nullable: false })
	me() {
		return {
			id: "7678554654",
			username: "jmota",
		};
	}
}
