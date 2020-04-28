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
		user: "5ea7f90bc613a8b3ecf26cd2",
		req,
		res,
	};
};
