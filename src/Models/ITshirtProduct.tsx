import { IBaseProduct } from "./IBaseProduct";

export interface ITshirtProduct extends IBaseProduct{
    size: string;
    color: string;
    shirtType: string;
    neckType: string;
    armLenght: string;
}