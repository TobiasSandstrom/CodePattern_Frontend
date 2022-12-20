// Smidigt att ha ett interface samt att kunna typa vad ens funktioner
// vill ta emot.
// Så istället för Function(category:string, id:string)
// Kan man skriva Function(req:ProductDetailsRequest).

// Det ser det mycket bättre och blir skönare att koda så man får intellisense


export interface ProductDetailsRequest {
    category:string;
    id:string;
}