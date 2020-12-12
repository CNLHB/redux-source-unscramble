// import  {createStore}  from  './index.js'
// const reducer = (state={}, action)=>{

//     return state
// }
// const store = createStore(reducer)

// console.log(store);
function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => {
        console.log(a,b);
      return  (...args) => a(b(...args))
    })
  }

//第一次   (...args) => a(b(...args))  c
function a(fn){
console.log("start a");
console.log("end a");
}
function b(fn){
    console.log("start b");
    console.log("end b");
}
function c(fn){
    console.log("start c");
    console.log("end c");
}
let fns = compose(a,b,c)
console.info(fns());
[1,2,3].reduce((a,b)=>{
    console.log(a,b);
    return a+b
})