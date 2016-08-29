�������� ������� 'isAllTrue', ������� ��������� 2 ��������� - 'source' � 'filterFn'
source - ������
'filterFn' - ����������� �������
���� ����������� ������� ������ 'true' ��� ���� ��������� �������, �� � ���� 'isAllTrue' ������ 'true'
���� ����������� ������� ������ 'false' ���� �� ��� ������ �������� �������, �� � ���� 'isAllTrue' ������ 'false'

������:
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, '������', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['���', '������', '���', '�����'];

function isNumber(val) {
return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //������ true
console.log(isAllTrue(someNumbers, isNumber)); //������ false
console.log(isAllTrue(noNumbers, isNumber)); //������ false

����������� � ������������ ����������, ���� � 'source' ������ ������.


�� - 2
�������� ������� 'isSomeTrue', ������� ��������� 2 ��������� - 'source' � 'filterFn'
'source' - ������
'filterFn' - ����������� �������
���� ����������� ������� ������ 'true' ���� �� ��� ������ �������� �������, �� � ���� 'isSomeTrue' ������ 'true'
���� ����������� ������� ������ 'false' ��� ���� ��������� �������, �� � ���� 'isSomeTrue' ������ 'false'

�� ������ ���� ����������� � �������������� ������� js (�� ��������� ��������� ����������).
��� ��, ������ ������������ ������� ��� ������ � ���������.

������:
console.log(isSomeTrue(allNumbers, isNumber)); //������ true
console.log(isSomeTrue(someNumbers, isNumber)); //������ true
console.log(isSomeTrue(noNumbers, isNumber)); //������ false


�� 3 (�� ����������)
�������� ������� 'calculator' (� ���� ������), ������� ����� ���� �������� - 'firstNumber'
'firstNumber' - ��� �����, � ������� ����� ������������� ��������
������� 'calculator' ������ ���������� ������, � �������� ������ ���� ��������� �������.
������ �� ���� ������� ��������� �������������� ���������� ���������� � ���������� �����-�� �������������� �������� � ����� ����������� � ��� ������, ������� ���� �������� � 'calculator' � ���������� ���������:
- 'sum' - ���������� 'firstNumber' � ���������� �����������
- 'dif' - �������� �� 'firstNumber' ���������� ���������
- 'div' - ����� 'firstNumber' �� ������ ���������� ��������. ��������� ���� �������� ������� �� ������ ���������� �������� (���� �� ����) � ��� �����
- 'mul' - �������� 'firstNumber' �� ������ ���������� ��������. ��������� ���� �������� ���������� �� ������ ���������� �������� (���� �� ����) � ��� �����.
������������� �������������� ��������, ��� ������� 'div', ����� �������� ����� ����

������:
var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //������ 106
console.log(myCalculator.dif(10, 20)); //������ 70
console.log(myCalculator.div(2, 2)); //������ 25
console.log(myCalculator.mul(2, 2)); //������ 400
