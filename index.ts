
interface user  {
  name: string
  age: number
};

function printProps(propKey: keyof user){
  if(propKey === 'name' || propKey === 'age') {
    console.log(propKey);
  } else {
    throw new Error('Invalid key');
  }
}

const admin = {
  name: 'Peter',
  age: 30,
  //role: 'Admin'
};

// Throws an exception
Object.keys(admin).forEach(x=> {
  printProps(x as keyof user);
});
