export function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  }
}

/*Javascript that makes some of the pictures wider and bigger than the others, every 5th picture rendering will be big.
And every 6th picture will be wide*/
