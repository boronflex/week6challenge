//Notes: works but not necessarily 'fast', over 11 digits it gets pretty slow,
//I didn't let the full routine run out at 1 trillion but it was taking longer than
//a minute.  I'd like to optimize this for speed, but I have and exam next week I need to
//study for and this took me much longer than they'd give me in a job interview. 
//Good challenge though, I laughed, I cried, and I learned a little something.
//Here are some more comments to get the pull request to work maybe.

function getPrimeFactors(n){

	if (Number.isInteger(n) && n >= 1){

		var primeFactors = new Set();

		if (n%2 === 0){ //skip and add 2 manually- Im going to skip even numbers in
			//subsequent evaluations

			primeFactors.add(2);
		}

		function isPrime(num){

			var isNumberPrime = true;

			if (num%2 === 0){ //if divisible by 2 not going to be prime, this helps me
				//skip even numbers below

				isNumberPrime = false;
				return isNumberPrime;

			} else {

				for(x=3;x<=Math.floor(Math.sqrt(num));x+=2){ //skip even numbers

				// the square root primality comes from research not my own genius originally it was just 'num' before
				// I did some research to optimize but I dont remember or know enough math to code an elliptic curve primality
				// test here before the deadline

					if (num%x === 0){

						isNumberPrime = false;
						return isNumberPrime;

					}
				}
			}

			return isNumberPrime;
		}

		function pullFactors(){

			//props to matthew little for advising me to revisit my loop here
			//I originally wrote a recursive 'if' loop that 'worked' (caveat emptor) but exceeded the stack call
			//when the number argument was 6 figures.  I thought the recursion would have
			//advantages over a for loop but it turns out I was out of my depth
			//and the loop was poorly written.  I converted it to for loop for this 
			//final version.

			var checkNumberFirst = isPrime(n);

			if (checkNumberFirst){ // dont bother to run extra code if the number itself is prime

				// primeFactors.add(n);

				return "the number " + n + " is prime" //testing here

			} else {

				for (var i = 3; i <= Math.floor(n/2); i+=2){ //skip even numbers, they aren't prime
					//a number greater than haf of a number is not a factor

					if (n%i === 0){

						//console.log("divisible by current iteration " + i)

						var factorIsPrime = isPrime(i);

						//console.log("the factor "+ i +" is prime is "+factorIsPrime);

						if (factorIsPrime){

							primeFactors.add(i);

						}

					}


				}

				return primeFactors
			}

		}

		return pullFactors();

	} else {

		return "this function only accepts positive integers";
	}
}