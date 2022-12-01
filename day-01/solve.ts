const data = await Deno.readTextFile("./input.txt");

const entries = data.toString().split("\n");

let i = 0;
let acc: { [key: string]: number } = {};

for (const entry of entries) {
  if (entry === "") {
    i++;
  } else {
    acc[i] = (acc[i] || 0) + parseInt(entry);
  }
}

const tuples = Object.entries(acc).sort((a, b) => b[1] - a[1]);

let result = 0;

for (let i = 0; i < 3; i++) {
  result += tuples[i][1];
}

console.log(result);
