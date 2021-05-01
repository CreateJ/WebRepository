// 给定字符串J代表石头中宝石的类型，和字符串S代表你拥有的石头。S中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J中的字母不重复，J和S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  const jewelsMap = {}
  for(const j of jewels){
    jewelsMap[j] = 1;
  }
  let res = 0;
  for(const s of stones){
    if(jewelsMap[s]){
      res ++;
    }
  }
  return res
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

