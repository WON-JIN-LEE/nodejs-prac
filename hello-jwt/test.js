var target = [
  {
    userId: "won3",
  },
  {
    userId: "won4",
  },
];

const temp = target.map((ele) => {
    const [val] = Object.values(ele);

    return val;
});

console.log(temp);
