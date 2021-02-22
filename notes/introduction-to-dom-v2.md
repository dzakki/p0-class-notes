# DOM

Document object modal (DOM) akan di muat oleh browser, ketika website kita selesai di load. semua element html kita akan menjadi object. artinya dari setiap object / element HTML kita, kita akan punya full control. kita bisa mengubah nya, menambahkan element, menghapus element bahkan kita bisa memainkan css dari masing masing element html. dan g cukup sampai disitu kita bahkan bisa dengerin event event dari user. misalkan jika user malakukan hal A maka kita akan melakukan sesuatu, jika user melakukan B maka kita melakukan sesuatu dengan menggunakan DOM ini.

Ref:

```
https://www.youtube.com/watch?v=X3nmuxZVpP4&list=PLCZlgfAG0GXCYyHqv8llpZpnTpnCRs94G&index=1
https://www.w3schools.com/js/js_htmldom.asp
```

## Objektif yang mau di pelejari

- getElementById
- innerHTML
- attribute event Listener ( onclick dll )
- parent children
- alert , prompt

## Kerangka HTML yang akan kita gunakan

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>DOM</title>
	</head>
	<body>
		<h1>Belajar DOM bersama <em>Hacktiv8</em></h1>

		<div id="card">
			<div id="box-title"></div>
			<hr />

			<!-- 0 -->
			<div class="box-desc"></div>
			<!-- 1 -->
			<div class="box-desc"></div>
			<!-- 2 -->
			<div class="box-desc"></div>
		</div>
		<!-- script js -->
		<script>
			// Selector
		</script>
	</body>
</html>
```

### DOM Selectors

Untuk memilih element element tertentu pada HTML kita, kita bisa menggunakan:

1. `getElementById()` mendapatkan element berdasarkan ID
2. `getElementsByClassName()` mendapatkan element berdasar kan nama class
3. silahkan explore

Mendapatkan element yang memiliki id `box-title` atau `<div id="box-title"></div>` maka kita bisa menggunakan `getElementById()` dengan cara:

```js
// letakkan cuplikan kode ini di dalam tag <script>
document.getElementById('box-title')
```

Perlu di perhatikan, bahwasan nya ketika kita menulis `getElementById` itu di awali dengan `document`. document itu adalah object root pada html kita, sehingga ketika kita ingin mengakses element tertentu, maka kita harus mengakses object root pada html kita terlebih dahulu.

untuk membuktikan apakah kita berhasil mendapatkan element tersebut, kita bisa tampilkan hasil mendapatkan element-nya kedalam console / inspect element

```js
console.log(document.getElementById('box-title'))
```

atau kita bisa langsung memanipulasi element tersebut dengan cara menambahkan konten di dalam nya

```js
document.getElementById('box-title').innerHTML = 'Phase 0'
```

**InnerHTML** adalah property untuk mengatur content pada sebuah element.

Mendapatkan element yang memiliki class `box-desc` atau `<div class="box-desc"></div>` maka kita bisa menggunakan method `getElementsByClassName()` dengan cara:

```js
document.getElementsByClassName('box-desc')
```

perlu di perhatikan, bahwasan nya penulisanya menggunakan `s` pada getElement-**s**-ByClassName. artinya sifat class bisa lebih dari satu. kita bisa buktikan dengan menampilkan ke dalam console hasil dari get elements tersebut, maka bentukan nya berupa array.

jika kita ingin memanipulasi elements tersebut, maka kita harus mengakses setiap element tersebut secara spesifik. contoh:

```js
// menambahkan content kedalam element urutan pertama yang memiliki class box-desc
document.getElementsByClassName('box-desc')][0].innerHTML = "Javascript"
```

### Parent And Children Element tl;dr

mengetahui/memilih anak element pada element tertentu kita bisa menggunakan property `children` dan mengetahui/memilih bapak element pada element tertentu kita bisa menggunakan property `parentNode`

```js
// mengetahui anak element pada element yang memiliki id card
document.getElementById('card').children
// mengetahui bapak element pada pelement yang memiliki id box-title
document.getElementById('box-title').parentNode
```

Untuk menampikan result nya, kita bisa menggunakan `console.log`

### Event Listener

Metode untuk mendengar peristiwa apa yang terjadi pada website kita. misalkan user melakukan klik terhadap sebuah button, maka kita akan mendengar lalu melakukan sesuatu.

Metode event listener ada banyak, namun yang akan kita bahas hanya 1, yaitu peristiwa/event click.
ada 2 opsi pada event listener:

#### Opsi 1

event listener dengan menambahkan script `addEventListener`

```html
<div id="card">
	...
	<!-- 2 -->
	<div class="box-desc"></div>

	<!-- tambahkan cuplikan kode ini di bawah div class="box-desc" -->
	<button id="my-button">Click me</button>
</div>
```

```js
// letakkan cuplikan kode ini di dalam <script>

// ambil dulu element yang mau kita dengar.
let getButton = document.getElementById('my-button')
// mendenger peristiwa, jika element nya di klik
getButton.addEventListener('click', function () {
    // block kode dibawah ini akan di jalankan, jika button di klik oleh user
    console.log('aku sudah di click, dan aku akan merubah sebuah element')
    document.getElementsByClassName('box-desc')][2].innerHTML = "CSS"
})
```

Pada method `addEventListener` menerima 2 parameter yaitu: `addEventListener(namaEvent<String>, <Function>)`. `namaEvent<String>` adalah peristwa yang mau kita denger, dan `<Function>` adalah fungsi yang mau kita jalankan setelah peristiwa terjadi.

#### Opsi 2

event listener dengan menambahkan attribute pada html

```html
<div id="card">
	...
	<button id="my-button">Click me</button>
	<!-- tambahkan cuplikan kode ini di bawah button id="my-button" -->
	<button onClick="console.log('aku sudah di click')">Click me 2</button>
</div>
```

Pada opsi 2 ini cukup mudah, kita cukup menambahkan attribute dan value attribute tersebut. pada value attribute kita bisa menaruh script simple seperti `console.log` dll, namun kita juga bisa memanggil function yang sudah kita buat di dalam script. contoh:

```html
<div id="card">
	...
	<button id="my-button">Click me</button>
	<!-- ubah cuplikan kode ini di bawah button id="my-button" -->
	<button onClick="myFunction()">Click me 2</button>
</div>
```

```js
function myFunction() {
	console.log('aku terpanggil, gara gara button click me 2 di klick')
	// kita tetap bisa manipulasi element di dalam fungsi ini. contoh:
    document.getElementsByClassName('box-desc')][2].innerHTML = "DOM"
}
```

### Alert dan Prompt

**Alert** adalah metode untuk menampilkan semacam notifikasi dengan pesan yang kita tentukan dan memiliki button OK.

```js
// masukkan cuplikan kode ini ke dalam script
alert('Hello! I am an alert box!!')
```

jika kita load browser kita, maka yang akan muncul paling pertama adalah alert. kita bisa menjalkan alert ini pada peristiwa tertentu, misalkan ketika sebuah button di klik maka alert akan muncul.

```html
<div id="card">
	...
	<button onClick="showAlert()">Munculkan alert?</button>
</div>
```

```js
function showAlert() {
	alert('Hello! I am an alert box!!')
}
```

**Prompt** hampir sama seperti alert, namun Prompt lebih ke arah dialog box yang bisa menyediakan input dan memiliki 2 button OK dan Cancel.

```js
prompt('How are you today?')
```

Kita juga bisa memunculkan prompt ini ketika peristiwa tertentu terjadi seperti yang sebelum nya.

Jika kita ingin menampilkan value yang di input-kan user, maka kita bisa tampung dulu prompt nya kedalam variable.

```js
let inputMe = prompt('How are you today?')
console.log(inputMe)
```

### Nice to try

1. event onchange ketika user masukkan sesuatu ke dalam input, lalu value input nya di tampilkan ke dalam content pada sebuah element
2. ubah style pada sebuah element
