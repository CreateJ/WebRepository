const a = 'abaaaacccddd'
const getMaxChar = (string) => {
  const obj = {}
  const sl = string.length
  for(let i =0;i <sl;i++){
    if(obj[string[i]]){
      obj[string[i]]++;
    }else {
      obj[string[i]] = 1;
    }
  }
  console.log(obj)
  let max = -1;
  let maxChar = ''
  let key;
  for(key in obj){
    if(obj[key] > max){
      max = obj[key]
      maxChar = key
    }
  }
  console.log(maxChar)
}

getMaxChar(a)
