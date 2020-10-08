let re;

re = /hello/;
re = /hello/i;
re = /^hello/i; // ^ - Must start with
re = /^hello$/i; // $ - Must end with
re = /h.llo/i; // . - Matches any character ONE times
re = /h*llo/i; // * - Matches any character 0 o many times
re = /gre?a?y/i; // * - Matches any character 0 o many times
re = /gray\?/i; // * - Matches any character 0 o many times

// [] - character sets
re = /gr[ae]y/i; // must be an A or E
re = /[GF]ray/i; // must be a G or F
re = /[^GF]ray/i; // oposite - match anything EXCEPT G or F
re = /[A-Z]ray/; // Any uppercase letter
re = /[a-z]ray/; // Any lowercase letter
re = /[A-Za-z]ray/; // Any letter
re = /[A-Z]ray/i; // Any letter
re = /[0-9]ray/i; // Any number
re = /[0-9][0-9]ray/i; // Any number - extend the index

// {} - quantifiers
re = /Hel{2}o/i; // letter followed by {n} occur n times
re = /Hel{2,4}o/i; // letter followed by {n, m} occur between n - m times
re = /Hel{2,}o/i; // letter followed by {n} occur at least n times

// () - grouping
re = /([0-9]x){3}/i; // making a repetition on a specific regex
re = /^([0-9]x){3}$/i; // setting the specific start and ending parameters

// shorthand character classes
re = /\w/; // word character - one letter, any number or _
re = /\w+/; // + = one or more letter, any number or _
re = /\W/; // W (uppercase) = ANYTHING BUT letter, any number or _
re = /\d/; // d = any one number
re = /\d+/; // d = any number 0 or more times
re = /\D/; // D (uppercase) = ANYTHING BUT any number
re = /\s/; // s = any whitespace character
re = /\S/; // S (uppercase) = ANYTHUNG BUY any whitespace character
re = /\S/; // S (uppercase) = ANYTHUNG BUY any whitespace character
re = /Hell/i;
re = /Hell\b/i; // word boundary

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y

const str = 'x';

const result = re.exec(str);
console.log(result);

function retest(re, str) {
  if(re.exec(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}