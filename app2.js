let re;
re = /hello/i; 
// re = /hello/i; // i - makes case insensitive
// re = /hello/g; // g - global search, looks for all instances

// console.log(re);
// console.log(re.source);

//exec() - return result in an array or null
// console.log(re.exec('hello world'));
// console.log(re.exec('hello world')[0]);
// console.log(re.exec('hello world').index);
// console.log(re.exec('hello world').input);

//text() = returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

//search() - Return index of first match / -1
// const str = 'Gabs Hello there';
// const result = str.search(re);
// console.log(result);

//replace() - Return a new string with some or all matches of pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);