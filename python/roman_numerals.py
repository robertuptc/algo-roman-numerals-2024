def to_roman(num):
    return adding_zeroes(num)

def adding_zeroes(num):
    arr = list(reversed(str(num)))
    roman_numeral = ''
    for i in (range(len(arr))):
        if i == 3:
            arr[i] += "000"
            roman_numeral += creating_roman_number(arr[i], 1000, 3000, 0, 0, 0, 0, 0, "M", "", "", "", "")
        if i == 2:
            arr[i] += "00"
            roman_numeral += (creating_roman_number(arr[i], 100, 303, 400, 500, 600, 800, 900, "C", "CD", "D", "DC", "CM")[::-1])
        if i == 1:
            arr[i] += "0"
            roman_numeral += creating_roman_number(arr[i], 10, 30, 40, 50, 60, 80, 90, "X", "XL", "L", "LX", "XC")[::-1]
            roman_numeral += creating_roman_number(arr[i], 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "I", "IX")
        if i == 0:
            arr[i]
            roman_numeral += (creating_roman_number(arr[i], 1, 3, 4, 5, 6, 8, 9, "I", "IV", "V", "I", "IX")[::-1])
    return roman_numeral[::-1]


def creating_roman_number(num, one, three, four, five, six, eight, nine, l1, l2, l3, l4, l5):
    num = int(num)
    answer = ""
    while num:
        if num >= one and num <= three:
            num-= one
            answer += l1
        elif num == four:
            num-= four
            answer += l2
        elif num >= five and num <= eight:
            num -= five
            answer += l3
        elif num == six:
            num -= six
            answer += l4
        elif num == nine:
            num -= nine
            answer += l5
        else:
            break
    return answer