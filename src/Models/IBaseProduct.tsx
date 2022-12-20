// ISP - Skapar ett bas interface och låter andra interfaces ärva/extenda från detta (Shoes, Watches, Tshirt)
// OPC - Genom tidigare uppfyller man även OPS då man aldrig behöver ändra i denna filen för att lägga
// till nya produkter, man kan helt enkelt låta dem ärva och extenda från denna.

export interface IBaseProduct {

    artNumber: string;
    brand: string;
    category: string;
    imgUrl: string;
    longDescription: string;
    name: string;
    price: number;
    rating: number;
    shortDescription: string;
}