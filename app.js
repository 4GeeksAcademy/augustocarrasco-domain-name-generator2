

const list = document.getElementById("domains");
const button = document.getElementById("subm");
const clear = document.getElementById("clear");


let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".es"];
 

// button.addEventListener("click",getabcd,false);
button.addEventListener("click",Getdomains,false);
clear.addEventListener("click",ClearInputs,false);

function Getdomains(){
  list.innerHTML = '<ul>'+DomainGenerator(pronoun,adj,noun,dom)+'</ul>'
}

function getabcd(){
  const a = document.getElementById("pronouns").value.split(',');
  const b = document.getElementById("adjectives").value.split(',');
  const c = document.getElementById("nouns").value.split(',');
  const d = document.getElementById("doms").value.split(',');
  console.log(a,b,c,d)
}

function DomainGenerator(arr1, arr2, arr3, arr4) {
  const a = document.getElementById("pronouns").value.split(',');
  const b = document.getElementById("adjectives").value.split(',');
  const c = document.getElementById("nouns").value.split(',');
  const d = document.getElementById("doms").value.split(',');

  if(a.length > 1) arr1 = a;
  if(b.length > 1) arr2 = b;
  if(c.length > 1) arr3 = c;
  if(d.length > 1) arr4 = d;
  let result = '';
  let aux = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          aux.push([arr1[i] + arr2[j] + arr3[k] + arr4[l]]);
        }
      }
    }
  }
  for (let i = 0; i < aux.length; i++) {
    result += '<li>' + aux[i] + '</li>'
  }
  console.log(result)
  return result;
}

function ClearInputs() {
  var a = document.getElementById("pronouns");
  var b = document.getElementById("adjectives");
  var c = document.getElementById("nouns");
  var d = document.getElementById("doms");

  if (a.value != '') a.value = '';
  if (b.value != '') b.value = '';
  if (c.value != '') c.value = '';
  if (d.value != '') d.value = '';
}
