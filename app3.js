let re;

re = /hello/;
re = /hello/i;
re = /^hello/i; // ^ - Must start with
re = /^hello$/i; // $ - Must end with
re = /h.llo/i; // . - Matches any character ONE times
re = /h*llo/i; // * - Matches any character 0 o many times
re = /gre?a?y/i; // * - Matches any character 0 o many times
re = /gray\?/i; // * - Matches any character 0 o many times

const str = 'gray?';

const result = re.exec(str);
console.log(result);

function retest(re, str) {
  if(re.exec(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}