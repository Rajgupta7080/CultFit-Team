function get() {
  console.log("mememememem");
}
const fun = async () => {
  const data = await fetch(`http://localhost:8004/bestseller`);
  const data2 = await data.json();
  console.log(data2);
};
fun();
