export const calculateCompoundInterest = (
  principal = 100000,
  time = 10,
  rate = 0.05,
  n = 1
) => {
  const compoundInterest = (p, t, r, n) => {
    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;
    return interest;
  };
  //   const simpleInterset = (p, r, t) => {
  //     return p * r * t;
  //   };
  const res = compoundInterest(principal, time, rate, n);
  console.log(res);
  return res;
};
