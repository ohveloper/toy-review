function power(base, exponent) {
  if (exponent === 0) return 1;

  // const half = parseInt(exponent / 2);
  // const temp = power(base, half);
  // const result = (temp * temp) % 1000000009;

  if (exponent % 2 === 1) {
    return (base * ((power(base, parseInt(exponent / 2)) * power(base, parseInt(exponent / 2))) % 1000000009)) % 1000000009;
  } else return (power(base, parseInt(exponent / 2)) * power(base, parseInt(exponent / 2))) % 1000000009;
}

// 한참을 읽어봐도 모르겠다 매일 매일 좀 봐야겠다
