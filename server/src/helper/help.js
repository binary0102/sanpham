const filterConstant = { 
  
    PRICE_LOW_TO_HIGHT : "LOW_PRICE",
    PRICE_HIGHT_TO_LOW : "HIGH_PRICE",
    DISCOUNT_HIGHT : "HIGHEST_DISCOUNT",
}
export function handeleSort(sort) {
    switch(sort) {
        case filterConstant.PRICE_LOW_TO_HIGHT:
            return {
                salePrice: 1
            } 
        case filterConstant.PRICE_HIGHT_TO_LOW:
            return {
                salePrice: -1
            }
        case filterConstant.DISCOUNT_HIGHT: {
            return {
                discount: 1,
            }
        }
        default: return {};
    }
}