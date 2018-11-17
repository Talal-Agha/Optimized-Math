for (let i = 1; i <= 100; i++) {
  let output;
  if (Math.abs(i % 2) == 1) output = "odd";
  if (i % 2 == 0) output = "even";
  if (i % 3 == 0) output = "divisible by three";
  if (i % 2 == 0 && i % 3 == 0) output = "divisible by two and three";
  console.log("The number '" + i + "' is " + output);
}
