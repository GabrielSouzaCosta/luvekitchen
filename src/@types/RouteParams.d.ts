import { ParsedUrlQuery } from "querystring";

export interface RouteParams extends ParsedUrlQuery {
    id?: string,
}