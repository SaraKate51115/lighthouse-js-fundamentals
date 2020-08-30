function howManyHundreds(bottles){
  let containers = bottles / 100;
  if (bottles % 100 === 0){
    return containers;
  } else {
    return Math.floor(containers);
  }
}
console.log(howManyHundreds(999));