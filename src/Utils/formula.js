export const newPopulation = (value) => {
  const valueStr = value.toString();
  const valueLen = valueStr.length;
  switch (valueLen) {
    case 4:
      `${valueStr.slice(0, 1)},${valueStr.slice(1)}`;
      break;
    case 5:
      `${valueStr.slice(0, 2)},${valueStr.slice(2)}`;
      break;
    case 6:
      `${valueStr.slice(0, 3)},${valueStr.slice(3)}`;
      break;
    case 7:
      `${valueStr.slice(0, 1)},${valueStr.slice(1, 4)},${valueStr.slice(4)}`;
      break;
    case 8:
      return`${valueStr.slice(0, 2)},${valueStr.slice(2, 5)},${valueStr.slice(5)}`;
      break;
    case 9:
      return`${valueStr.slice(0, 3)},${valueStr.slice(3, 6)},${valueStr.slice(6)}`;
      break;
    case 10:
      `${valueStr.slice(0, 1)},${valueStr.slice(1, 4)},${valueStr.slice(4, 7)},${valueStr.slice(7)}`;
      break;
    default:
      value
      break;
  }
}
