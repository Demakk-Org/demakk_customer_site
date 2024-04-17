const singleToDouble = (num: number) => {
  let number = num * 100;
  if (number < 10) return "0" + number;
  return number.toString().slice(0, 2);
};

const getPrice = (price: number | string): { int: string; dec: string } => {
  let num: number;

  if (typeof price == "string") {
    num = Number.parseFloat(price);
  } else {
    num = price;
  }

  const integerPart: number = Math.floor(num);
  const decimalPart: number = num - integerPart;

  const decimal: number = Number.parseFloat(decimalPart + "").toFixed(
    2
  ) as unknown as number;

  let returnIntegerPart: string[] = [];
  let integerPartStringList: string[] = integerPart.toString().split("");

  integerPartStringList.reverse().forEach((num, ind) => {
    returnIntegerPart.push(num);

    if ((ind + 1) % 3 == 0 && integerPartStringList.length - 1 != ind) {
      returnIntegerPart.push(",");
    }
  });

  return {
    int: returnIntegerPart.reverse().join(""),
    dec: singleToDouble(decimal),
  };
};

export default getPrice;
