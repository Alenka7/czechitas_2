let jmenoUzivatele = prompt("Jak se jmenuješ?")
let vek = Number (prompt("Kolik ti je let?"))

if (vek >= 18 ){
  console.log("Vaše jméno je " + jmenoUzivatele + ", je vám " + vek + " let a tak máte právo řídit auto.")
} else {
  console.log("Vase jméno je " + jmenoUzivatele + ", je vám " + vek + " let a tak musíte počkat ještě " + (18 - vek) + " let, než budete moci řídit auto.")
}

let a = Number (prompt("Zadejte číslo a."))
let b = Number (prompt("Zadejte číslo b."))
let c = Number (prompt("Zadejte číslo c."))

//porovnání 
if (a > b) {
  if (a > c) {
    console.log("Největší číslo je A " + a)
  } else {
    console.log("Největší číslo je C " + c)
  }
} else {
  if (b > c) {
    console.log("Největší číslo je B " + b)
  } else {
    console.log("Největší číslo je C " + c)
  }
}
