var nums = [4, 7, 10, 13, 16, 19];

function calcCommondiff(nums) {
    var cd = nums[2] - nums[1];
    console.log(cd);
    
}

calcCommondiff(nums); 

function aP(firstTerm, commd, noOfTerms) {
    var a = firstTerm;
    var commonDiff = commd;
    var nn = noOfTerms - 1;
    var tN = a + nn * commonDiff;
    console.log(tN);
}

aP(-28, 7, 21);

function calcTheGP(firstTerm, commRatio, noOfTerms) {
    var ft = firstTerm;
    var commonRatio = commRatio;
    var noT = noOfTerms - 1;
    var tN1 = Math.pow(commonRatio, noT);
    var tN2 = ft * tN1;
    console.log(tN2);
    alert(tN1);
    
}

calcTheGP(1, 10, 7);