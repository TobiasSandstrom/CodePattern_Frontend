import { IBaseProduct } from "./IBaseProduct";

export interface IShoeProduct extends IBaseProduct {

    size: string;
    color: string;
    shoeCategory: string;

}