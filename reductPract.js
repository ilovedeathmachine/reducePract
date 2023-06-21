const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key) {
    return arr.reduce((result, obj) => {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
        return result;
    }, []);
}



vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};


function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').reduce((count, char) => {
        const lowercaseChar = char.toLowerCase();
        if (vowels.includes(lowercaseChar)) {
            count[lowercaseChar] = (count[lowercaseChar] || 0) +1;
        }
        return count;
    }, {});
}



const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arr, 'title', 'Instructor') //

[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]


function addKeyAndValue(arr, key, value) {
    return arr.reduce((accum, obj) => {
        obj[key] = value;
        accum.push(obj);
        return accum;
    }, []);
}



function isEven(val){
    return val % 2 === 0;
  }
  
  const arr = [1,2,3,4,5,6,7,8];
  
  partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
  const names = ['Elie', 'Colt', 'Tim', 'Matt'];
  
  partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]




function partition(arr, callback) {
    return arr.reduce((result, val) => {
        if (callback(val)) {
            result[0].push(val);
        } else {
            result[1].push(val);
        }
        return result;
    }, [[], []]);
}















// const midtermScores = [70, 88, 93, 94, 64, 62, 56];
// const finalsScores = [92, 93, 76, 77, 78, 81, 64, 62];

// const minMidtermScore = midtermScores.reduce(function(min, nextScore) {
//     return nextScore < min ? nextScore : min;
// });

// const maxScore = midtermScore.reduce(function(max, nextScore) {
//     return nextScore > max ? nextScore : max;
// });

// const minOverallScore = finalScores.reduce(function(min, nextScore) {
//     return nextScore < min ? nextScore : min;
// }, minMidtermScore);

