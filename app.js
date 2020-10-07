const user = {email: 'email@email.com'}

try {
  // CORE ERRORS

  // ReferenceError
  // myFunction();

  // TypeError
  // null.myFunction();

  // SyntaxError
  // eval('Hello World');

  //URIError
  // decodeURIComponent('%')

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
    // throw new ReferenceError('User has no name');
    // throw new TypeError('User has no name');
  }

} catch(e) {
  // console.log(e);
  console.log(`User Error: ${e.message}`)
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('this runs regardless of results...')
}

console.log('Program continues...');