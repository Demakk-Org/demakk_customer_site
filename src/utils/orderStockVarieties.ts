import { StockVariety } from "@/model/productModel";

const orderStockVarietiesByMainFirst = (stockVarieties: StockVariety[]) => {
  let stockVarietiesShallowCopy = [...stockVarieties];
  let mainStockVarietyIndex = stockVarietiesShallowCopy.findIndex(
    (v) => v.class == "Main"
  );

  let mainStockVariety = stockVarietiesShallowCopy.splice(
    mainStockVarietyIndex,
    1
  );
  let orderedStockVarieties = mainStockVariety.concat(
    stockVarietiesShallowCopy
  );

  return orderedStockVarieties;
};

export default orderStockVarietiesByMainFirst;
