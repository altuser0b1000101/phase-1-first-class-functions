// function receivesAFunction(returnsAnAnonymousFunction) {
//     returnsANamedFunction();
//     returnsAnAnonymousFunction();
//   }


function receivesAFunction(callback){
    callback();   
}

function returnsANamedFunction() {
    let fn = function(){
        console.log("name")
    }
    return fn;
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log('')
    }
}


// let a = returnsAnAnonymousFunction()
// console.log(a)


// function returnsAnAnonymousFunction(){
//      return 
// }


// function returnsAnAnonymousFunction()
//  var fn = returnsAnAnonymousFunction(); {
//     return returnsANamedFunction; 
// }







//     "before all"));{
//         returnsANamedFunction()();
//     }
// }