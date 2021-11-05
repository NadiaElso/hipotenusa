let a, catetob, catetoc: number;
a = 0;
catetoc = 0;

for (let contador = 0; contador < 1; contador++) {
  catetob = prompt("ingrese cateto b");
  catetoc = prompt("ingrese cateto c");
  catetob = catetob * catetob;
  catetoc = catetoc * catetoc;
  a = (catetob + catetoc) * 0.25;
  console.log(a);
}
