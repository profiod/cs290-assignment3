/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction() {
	return null; 
}
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
var i;	// counter 
var success = false;	// used to store if an operation was successful 

// double the array element, if successful success = true otherwise success is false
bar = function (doubleArray) {
	for(i = 0; i < doubleArray.length; i++)
	{
		if ((doubleArray[i] *= 2))
		{
			success = true; 
		} 
		else 
		{
			success = false; 
			break; 
		}
	} 

	return success; 
}
//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
var j; 	// counter
var idxBegMsg, idxEndMsg;	// used to store beginning and end of message
var idxEndHash; 	// used to store end of hash 
var idxBegDate, idxEndDate; 	// used to store beg and end of date  
var extHash, extDate, extMsg;	// used to store extracted messages 
var gitLogArr = []; 

function parseGit(logArray)	{
	for (i = 0; i < logArray.length; i++)
	{
		// create msg substring 
		idxBegMsg = logArray[i].indexOf('"') + 1; 
		idxEndMsg = logArray[i].lastIndexOf('"');
		extMsg = logArray[i].substring(idxBegMsg, idxEndMsg);

		// create hash substring and find beginning of date 
		for (j = 0; j < logArray[i].length; j++)
		{
			if (logArray[i].charAt(j) === " ")
			{
				idxEndHash = j; 
				idxBegDate = j + 1; 
				break; 
			}
		}

		extHash = logArray[i].substring(0, idxEndHash); 

		// create date substring 
		idxEndDate = idxBegMsg - 2; 
		extDate = new Date(logArray[i].substring(idxBegDate, idxEndDate)); 

		// add this log to the git log array 
		gitLogArr[i] = new GitLog(extHash, extDate, extMsg); 
	}

	return gitLogArr; 
}
//end your code
