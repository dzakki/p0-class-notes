[**Back to Home**](./../README.md)

# Multidimensional Array

## Execise before start

1. Apa itu array ?

```js
let students = ['Dzakki', 'Vincent', 'Rudy']
```

2. Cara akses `Vincent` lalu tampilkan ke dalam terminal?
3. Ubahlah `Vincent` menjadi "Vincent Guizot"?
4. Cara menambahkan sebuah element yaitu `Syukur` ke array paling akhir ? ?

## Objectives

- Kenapa kita membutuhkan array multi dimensi
- Looping array multi dimensi
- Akses value array multi dimensi

```
ref:
https://www.lazoid.com/array-multidimensi/
https://www.javascripttutorial.net/javascript-multidimensional-array/
```

## Apa itu Array Multidimensi ?

Multidimensional Array/Array Multidimensi adalah sebuah istilah yang di berikan kepada array yang menampung elemen berupa array (array of array).

## Kenapa kita butuh Array Multidimensi?

Misalkan kita memiliki data students hacktiv8 sebagai berikut:

- student 1: Dzakki, Loyal Fox, dzakki@mail.com
- student 2: Vincent guizot, Prime Fox, vincent@mail.com
- student 3: Rudy harun, Queen Fox, rudy@mail.com

lalu kita simpan ke dalam array menjadi, dengan urutan `[Nama, Batch, Email, ...dst]`.

```js
let students = [
	'Dzakki',
	'Loyal Fox',
	'dzakki@mail.com',
	'Vincent',
	'Prime Fox',
	'vincent@mail.com',
	'Rudy harun',
	'Queen Fox',
	'rudy@mail.com',
]
```

- Index 0, 3, 6 adalah Nama
- Index 1, 4, 7 adalah Batch
- Index 2, 5, 8 adalah Email

Mungkin pattern seperti ini sudah cukup bagus untuk menyimpan data, tapi bagaimana jika salah satu student memiliki nomer hp? Untuk mengakses data akan lebih sulit karena ada 1 student yang memiliki 4 index sementara student yang lain hanya punya 3.

Ada 2 alternative dalam menyelesaikan masalah tersebut, yaitu dengan Array multi dimensi dan Array of Object. hanya saja hari ini kita belum sampe Array Of Object maka kita bisa menggunakan array multi dimensi dengan mengelompokkan students ke array yang masing-masing menyimpan data student. Bentuknya seperti ini `[ [nama, batch, email], ... dst ]`:

```js
let students = [
	['Dzakki', 'Loyal Fox', 'dzakki@mail.com'],
	['Vincent', 'Prime Fox', 'vincent@mail.com'],
	['Rudy harun', 'Queen Fox', 'rudy@mail.com'],
]
```

Jika kita `console.log(students)` maka di terminal akan muncul seperti ini:

```bat
[
  [ 'Dzakki', 'Loyal Fox', 'dzakki@mail.com' ],
  [ 'Vincent', 'Prime Fox', 'vincent@mail.com' ],
  [ 'Rudy harun', 'Queen Fox', 'rudy@mail.com' ]
]
```

**Array Multidimensi** bisa kita gambarkan seperti table yang memiliki index baris dan index kolom. kita bisa menggunakan `console.table(students)` untuk bantuan mengilustrasikan array multi dimensi menjadi bentuk table, sehingga di terminal akan muncul seperti ini:

```bat
┌─────────┬──────────────┬─────────────┬────────────────────┐
│ (index) │      0       │      1      │         2          │
├─────────┼──────────────┼─────────────┼────────────────────┤
│    0    │   'Dzakki'   │ 'Loyal Fox' │ 'dzakki@mail.com'  │
│    1    │  'Vincent'   │ 'Prime Fox' │ 'vincent@mail.com' │
│    2    │ 'Rudy harun' │ 'Queen Fox' │  'rudy@mail.com'   │
└─────────┴──────────────┴─────────────┴────────────────────┘
```

Keterangan:

- data student 1 berada di baris ke 0. `students[0]`
- "Dzakki" berada di baris ke 0 dan kolom ke 0. `students[0][0]`
- "Loyal Fox" berada di baris ke 0 dan kolom ke 1. `students[0][1]`
- "dzakki@mailcom" berada di baris ke 0 dan kolom ke 2. `students[0][2]`
- "Vincent" berada di baris ke 1 dan kolom ke 0. `students[1][0]`
- dst.

Kita juga bisa melakukan loop untuk mengakses semua value terhadap array multidimensi ini dengan cara sebagai berikut:

```js
for (let i = 0; i < students.length; i++) {
	console.log('Nama:', students[i][0])
	console.log('Batch:', students[i][1])
	console.log('Email:', students[i][2])
}
```

## Study Case

Buatlah array multidimensi dengan data sebagai berikut:

- Asia: 'Japan', 'South Korea', dan 'Indonesia'
- US: 'Canada', 'Meksiko', dan 'Argentina'
- Eropa: 'Italy', 'Spain', 'Sweden', dan 'Croatia'

```js
let countries = [
	['Japan', 'South Korea', 'Indonesia'],
	['Canada', 'Meksiko', 'Argentina'],
	['Italy', 'Spain', 'Sweden', 'Croatia'],
]
```

- tampilkan `['Japan', 'South Korea', 'Indonesia']` di dapat dari data countries ke dalam terminal.
- tampilkan `South Korea` di dapat dari data countries ke dalam terminal.
- tampilkan `S` dari `South Korea` di dapat dari data countries ke dalam terminal.

1. Hitung ada berapa banyak Negara yang namanya diawali dengan huruf 'S' ? `3`
2. Hitung ada berapa banyak Negara yang namanya diawali dengan huruf 'I' ? `2`

**answer**

```js
function CountCountry(list, character) {
	if (list.length === 0) {
		return 'Invalid Data'
	}
	let output = 0
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list[i].length; j++) {
			let currentCountry = list[i][j]
			if (currentCountry[0] === character) {
				output++
			}
		}
	}
	return output
}
console.log(CountCountry(countries, 'S')) // 3
console.log(CountCountry(countries, 'S')) // 2
```

3. Tampilkan dalam sebuah array Negara yang namanya diawali dengan huruf 'S'?

```bat
['South Korea', 'Spain', 'Sweden']
```

**answer**

```js
function findCountry(list, character) {
	if (list.length === 0) {
		return 'Invalid Data'
	}
	let output = []
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list[i].length; j++) {
			let currentCountry = list[i][j]
			if (currentCountry[0] === character) {
				output.push(currentCountry)
			}
		}
	}
	return output
}
console.log(findCountry(countries, 'S'))
```

4. Tampilkan dalam bentuk array 2D Negara yang namanya diawali dengan huruf 'S' berdasarkan masing-masing kelompoknya (Benua)? (Optional)

```bat
[
    ['South Korea'],
    [],
    ['Spain', 'Sweden']
]
```

**answer**

```js
function findCountry(list, character) {
	if (list.length === 0) {
		return 'Invalid Data'
	}
	let output = []
	for (let i = 0; i < list.length; i++) {
		let row = []
		for (let j = 0; j < list[i].length; j++) {
			let currentCountry = list[i][j]
			if (currentCountry[0] === character) {
				row.push(currentCountry)
			}
		}
		output.push(row)
	}
	return output
}
```

5.

```js
/*
    input: let countries = ['Japan', 'South Korea', 'Indonesia']
    output:
   [
   	['J', 'a', 'p', 'a', 'n'],
   	['S', 'o', 'u', 't', 'h', ' ', 'K', 'o', 'r', 'e', 'a'],
   	['I', 'n', 'd', 'o', 'n', 'e', 's', 'i', 'a'],
   ]
   */
```

**answer**

```js
let countries = ['Japan', 'South Korea', 'Indonesia']

let output = []

for (let i = 0; i < countries.length; i++) {
	let row = []
	for (let j = 0; j < countries[i].length; j++) {
		let charackterOfCountry = countries[i][j]
		row.push(charackterOfCountry)
	}
	output.push(row)
}

console.log(output)
```
