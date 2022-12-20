import { IBaseProduct } from "./IBaseProduct";

export interface IWatchProduct extends IBaseProduct {

    analogue: boolean;
    bandColor: string;
    dialColor: string;
    waterResistant: boolean;

}