import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { FoodDataSources } from "../dataSources/FoodDataSource";
import BedcaAPI from "../dataSources/BedcaAPI";

export interface Context {
	headers: IncomingHttpHeaders;
	user: string;
	req: Request;
	res: Response;
	dataSources: FoodDataSources;
}

export const dataSources = (): DataSources<FoodDataSources> => ({
	bedcaAPI: new BedcaAPI(),
});

export const context = (req: Request, res: Response) => {
	return {
		user: "5eaa8d2b25b99a878234cb3a",
		req,
		res,
	};
};
