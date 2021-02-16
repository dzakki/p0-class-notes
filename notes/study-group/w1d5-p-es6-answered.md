[**Back to Home**](./../../README.md)

# ES6 Answered

## RMT 010 Jersey Fox [Irvan(PIC), Rara, Aufa]

- saya ingin mengakses let num = 90 angka 0 dari variable num tersebut, bagaimakah caranya ?

```
let penampung = num.toString()
penampung[1]
```

- apa perbedaan let dan const ?

```
	let : adalah sebuah variabel yang nilainya bisa di reasign ulang dan tidak bisa re declare, apabila terdapat dalam scope yang sama.
	const : sebuah variabel yang nilainya tidak bisa di reasign ulang, dan tidak bisa re declare, apabila terdapat dalam scope yang sama.
```

- kapan kita menggunakan const ?

```
ketika memiliki nilai yang sudah pasti atau tidak ingin di reasign
```

```js
let name = 'no name'
if (true) {
	// apakah kita bisa mengakses variable name di dalam scope if ?
}
// Bisa
```

```js
let name = 'no name'
if (true) {
	let name = 'dzakki'
	name = 'irvan'
	console.log(name) // apa yank muncul di dalam terminal ?
}
// dzakki
```

```js
let name = 'no name'
if (true) {
	let name = 'dzakki'
}
console.log(name) // apa yank muncul di dalam terminal ?

// no name
```

```js
// apa yang terjadi jika kode ini di jalankan ?
if (true) {
	let name = 'dzakki'
}
console.log(name)
// error
```

```js
// apa yang di tampilkan dalam terminal jika kode ini di jalankan ?
console.log(`umur saya adalah ${9 * 9}`)

// umur saya adalah 81
```
