// Progression #1: Greatest of the two numbers
const greatestOfTwoNumbers = (a,b) => {
  return a>b ? a : b;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findScaryWord = (a) => {
  let ans=null,mx=-1;
  for (const k of a) {
    if(k.length > mx){
      mx=k.length;
      ans=k;
    }
  }
  return ans;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const netPrice = (a) => {
  let sum=0;
  for (const k of a) {
    sum+=k;
  }
  return sum;
}

const add = (a) => {
  let ans=0;
  for(const k of a){
      if(typeof(k)=="string"){
        ans+=k.length;
      }
      else if(typeof(k)=="boolean"){
        if(k){
          ans++;
        }
       }
       else if(typeof(k)=="number"){
         ans+=k;
       }
       else{
         throw new Error("Unsupported data type sir or ma'am");
       }
    }
  return ans;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const midPointOfLevels = (a) => {
    if(a.length>0){
      return add(a)/a.length;
    }
    return a.length===0 ? null : add(a)/a.length;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength = (a) => {
  return a.length===0 ? null : add(a)/a.length;
}

const avg = (a) => {
  return a.length===0 ? null : parseFloat((add(a)/a.length).toFixed(2));
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

const uniqueArray = (a) => {
  if(a.length===0){
    return null;
  }
  let m = {};
  for (const k of a) {
    if(k in m){
      m[k]=m[k]+1;
    }
    else{
      m[k]=1;
    }
  }
  let res=[];
  for(const k in m){
    res.push(k);
  } 

  return res;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const searchElement = (a,emt) => {
  if(a.length===0)return null;
  
  return a.includes(emt);

}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

const howManyTimesElementRepeated = (a,wrd) => {
  if(a.length===0){
    return 0;
  }
  let m = {};
  for (const k of a) {
    if(k in m){
      m[k]=m[k]+1;
    }
    else{
      m[k]=1;
    }
  }
  if(wrd in m){
    return m[wrd];
  }
  else{
    return 0;
  }
}



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

const maximumProduct = (a) => {
  let i,j,ans=Number.MIN_VALUE,p,q;
  for(i=0;i<10-4;i++){
    for(j=0;j<10-4;j++){
      p = a[i][j]*a[i+1][j]*a[i+2][j]*a[i+3][j];
      q = a[i][j]*a[i][j+1]*a[i][j+2]*a[i][j+3];
      ans=Math.max(p,q,ans);
    }
  }
  return ans;
}
