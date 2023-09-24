const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  // const profileUpdate = ({ name, age, nationality, location }) => {
    //const { today: newtd, tomorrow: newtm } = HIGH_TEMPERATURES;
    //const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST  
  const half = ({max, min} = stats) => (max + min) / 2;
  // const { max, min } = stats => (max + min) / 2;
  // Only change code above this line
  console.log(half());