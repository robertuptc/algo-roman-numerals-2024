function toRoman(num) {
    let arrOfNum = num.toString().split('');
    let decimalsArr = addingDecimals(arrOfNum);
    return addingRomanNum(decimalsArr)
};


function addingDecimals(arr) {
    if (arr.length == 4) {
        arr[0] += "000"
        arr[1] += "00"
        arr[2] += "0"
    } else if (arr.length == 3) {
        arr[0] += "00"
        arr[1] += "0"
        
    } else if (arr.length == 2) {
        arr[0] += "0"
    }
    return arr
}


function addingRomanNum(arr) {
    let counter = 0
    let answer = ''

    // console.log(">>>>", arr.length)
    if (arr[0].length == 4) {
        // thousands math
        counter = Number(arr[0])
        while (counter) {
            counter -= 1000
            answer += "M"
        }

        // hundreds math
        counter = Number(arr[1])
        answer += smallNumBeforeLargeNum(counter, 100, 300, 400, 500, 600, 800, 900, "C", "CD", "D", "DC", "CM")
        
        // tens math
        counter = Number(arr[2])
        answer += smallNumBeforeLargeNum(counter, 10, 30, 40, 50, 60, 80, 90, "X", "XL", "L", "LX", "XC")
        
        // ones math
        counter = Number(arr[3])
        answer += smallNumBeforeLargeNum(counter, 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "VI", "IX")
    } else if (arr[0].length == 3) {
        counter = Number(arr[0])
        answer += smallNumBeforeLargeNum(counter, 100, 300, 400, 500, 600, 800, 900, "C", "CD", "D", "DC", "CM")
        
        // tens math
        counter = Number(arr[1])
        answer += smallNumBeforeLargeNum(counter, 10, 30, 40, 50, 60, 80, 90, "X", "XL", "L", "LX", "XC")
        
        // ones math
        counter = Number(arr[2])
        answer += smallNumBeforeLargeNum(counter, 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "VI", "IX")
    } else if (arr[0].length == 2) {
        // tens math
        counter = Number(arr[0])
        answer += smallNumBeforeLargeNum(counter, 10, 30, 40, 50, 60, 80, 90, "X", "XL", "L", "LX", "XC")
        
        // ones math
        counter = Number(arr[1])
        answer += smallNumBeforeLargeNum(counter, 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "VI", "IX")
    } else {
        // ones math
        counter = Number(arr[0])
        answer += smallNumBeforeLargeNum(counter, 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "VI", "IX")
    }
    // console.log(answer)
    return answer
}


function smallNumBeforeLargeNum(num, one, three, four, five, six, eight, nine, l1, l2, l3, l4, l5) {
    let answer = ''

    while (num) {
        if (num >= one && num <= three) {
            num -= one
            answer += l1
        } else if (num == four) {
            num -= four
            answer += l2
        } else if (num >= five && num <= eight) {
            num -= five
            answer += l3
        } else if (num == six) {
            num -= six
            answer += l4
        } else if (num == nine) {
            num -= nine
            answer += l5
        } else {
            break;
        }
    }
    return answer
}

module.exports = {toRoman}