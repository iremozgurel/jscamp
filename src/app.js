console.log("Merhaba Kodlama.io")


// js type safe degildir.
let dolarBugun = 9.60
let dolarDun = 9.20
//dolarDun = "Ankara"

{
    let dolarDun = 9.10 //görmez.
}
console.log(dolarDun)

const euroDun = 11.2 //sabit değerdir
//euroDun = 11 değeri verilemez.

console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"<li>")    
}
console.log("</ul>")

console.log(konutKredileri)
