from roman_numerals import to_roman

print(to_roman(1) == 'I')
print(to_roman(3) == 'III')
print(to_roman(4) == 'IV')
# add tests to cover different edge cases
print(to_roman(40) == 'XL')
print(to_roman(60) == 'LX')
print(to_roman(90) == 'XC')
print(to_roman(3469) == 'MMMCDLXIX')
