//Write a function that takes an object and returns a new object with keys that have truthy values.


function TruthyValues(obj) {

    let key = Object.keys(obj);
    values.filter((obj)>= key );

}

  const object = { a: 1, b: false, c: '', d: 'hello', e: null };
  const filtereObj = TruthyValues(object);
  
  console.log(filtereObj)
  


  
