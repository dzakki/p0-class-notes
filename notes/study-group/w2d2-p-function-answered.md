[**Back to Home**](./../../README.md)

# Function

## RMT 010 Jersey Fox [Irvan, Rara(PIC), Aufa]

- apa itu function ?

```
  function adalah kumpulan block code yang memiliki tugas spesifik yang sama

aufa :
function adalah kumpulan block code yang memiliki tugas spesifik yang sama dan memiliki parameter yang fleksibel

```

- apa manfaat dari function ?

```
  menyederhanakan tugas yang harus dilakukan berulang kali
  menjadikan kode menjadi lebih dry (dont repat your self)
```

- Function terdiri dari apa saja?

```
  nama function, parameter, return


irvan :
kata function, nama function, parameter, body, return

kak zaki :
keyword "function", nama function, parameter, block code "{}", invoke "()", return
```

- apa itu parameter ?

```
  parameter adalah nilai yang diterima oleh function dan bisa diubah-ubah / input
```

- apa itu return ?

```
  return adalah keyword untuk mengembalikan hasil yang dihasilkan di oleh function

return adalah keyword yang mengembalikan hasil dari hasil proses pada function
```

- apa yang muncul di terminal jika kode ini di jalankan?

```js
function displayAddition() {
	console.log(10 + 2)
}
//tidak ada output, karena function belum di invoke/ dipanggil
```

- apa yang muncul di terminal jika kode ini di jalankan?

```js
function displayAddition() {
	console.log(10 + 2)
}
displayAddition()
//12
```

- apa yang muncul di terminal jika kode ini di jalankan?

```js
function displayAddition() {
	return 10 + 2
}
displayAddition()
//tidak ada output, karena hasil pengembaliannya tidak di tampilkan
```

- apa yang muncul di terminal jika kode ini di jalankan?

```js
function displayAddition() {
	return 10 + 2
}
console.log(displayAddition())
//12
```

- apa yang muncul di terminal jika kode ini di jalankan?

```js
function displayAddition(num) {
	let total = num + 2
	return total + 2
}
console.log(displayAddition(5)) //9
console.log(displayAddition(8)) //12
```
