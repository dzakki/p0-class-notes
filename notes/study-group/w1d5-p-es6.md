[**Back to Home**](./../../README.md)

# ES6

- saya ingin mengakses `let num = 90` angka `0` dari variable num tersebut, bagaimakah caranya ?
- apa perbedaan let dan const ?
- kapan kita menggunakan const ?

```js
let name = 'no name'
if (true) {
	// apakah kita bisa mengakses variable name di dalam scope if ?
}
```

```js
let name = 'no name'
if (true) {
	let name = 'dzakki'
	console.log(name) // apa yank muncul di dalam terminal ?
}
```

```js
let name = 'no name'
if (true) {
	let name = 'dzakki'
}
console.log(name) // apa yank muncul di dalam terminal ?
```

```js
// apa yang terjadi jika kode ini di jalankan ?
if (true) {
	let name = 'dzakki'
}
console.log(name)
```

```js
// apa yang di tampilkan dalam terminal jika kode ini di jalankan ?
console.log(`umur saya adalah ${9 * 9}`)
```
