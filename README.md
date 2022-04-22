## Resumo Semana 04:

### Array

- Com um array pode-se armazenar vários dados em um só lugar.

- Inicia-se uma declaração de array com um colchete de abertura e se com um colchete de fechamento. Entre cada entrada têm-se uma vírgula.

```javascript
const sandwich = ["peanut butter", "jelly", "bread"];
```

#### Acessar dados de um array:

- Pode-se acessar dados de um array usando indexes.

- Os arrays usam indexação baseada em zero, então o primeiro elemento de um array tem o index 0.

~~~javascript
const array = [50, 60, 70];
    console.log(array[0]);     // O console.log(array[0]) imprime 50
    const data = array[1];    //  e data tem o valor de 60
~~~

#### Modificar array:

- Os arrays podem ser modificados livremente, mesmo que tenham sido declarados com const.

~~~javascript
const ourArray = [50, 40, 30];
    ourArray[0] = 15;           // ourArray agora tem o valor [15, 40, 30]
~~~

#### Métodos de iteração:

##### .push()

- É uma maneira de anexar dados ao **final** de um array.

- Utiliza um ou mais parâmetros e os "empurra" para o final do array.

~~~javascript
const arr2 = ["Stimpson", "J", "cat"];
    arr2.push(["happy", "joy"]); 

// arr2 agora tem o valor de ["Stimpson", "J", "cat", ["happy", "joy"]].
~~~

##### .pop()

- Retira um valor do **final** de um array.

- Esse valor pode ser armazenado atribuindo-o a uma variável. Permitindo, assim, que se retorne o valor removido.

~~~javascript
const threeArr = [1, 4, 6];
    const oneDown = threeArr.pop();
    console.log(oneDown);             // vai mostrar o valor 6;
    console.log(threeArr);           //  vai mostrar o valor [1, 4];
~~~

##### .shift()

- Funciona do mesmo jeito que o .pop(), mas remove o **primeiro** elemento do array, ao invés do último.

~~~javascript 
const ourArray = ["Stimpson", "J", ["cat"]];
    const removedFromOurArray = ourArray.shift();

// removedFromOurArray tem o valor "Stimpson" e ourArray tem o valor ["J", ["cat"]];
~~~

##### .unshift()

- Adiciona um elemento no **início** de um array.

~~~javascript
const ourArray = ["Stimpson", "J", "cat"];
    ourArray.shift();                      // ourArray teria o valor ["J", "cat"];
    ourArray.unshift("Happy");            //  ourArray teria o valor ["Happy", "J", "cat"];
~~~

##### .map()

- Mapeia a lista e retorna um novo array com as informações passadas na função, sem alterar a array original.

~~~javascript
const listOfBooks = [
  {
    title: "The Water Dancer",
    autor: "Ta-Nehisi Coates",
    year: 2019,
    pages: 416,
    read: true,
  },
  {
    title: "The Third Life of Grange Copeland",
    autor: "Alice Walker",
    year: 2004,
    pages: 288,
    read: true,
  },
  {
    title: "South of the Border, West of the Sun",
    autor: "Haruki Murakami",
    year: 1992,
    pages: 192,
    read: true,
  },
];

listOfBooks.map((book) => console.log(book.title))  // mapeia os títulos dos livros
listOfBooks.map((book) => console.log(book.autor)) //  mapeia os autores dos livros
~~~

##### .filter()

- Retorna um novo array com os itens (elementos) filtrados.

- Quando identifica uma informação verdadeira, retorna a array com as informações verdadeiras.

- O filter espera uma função callback com o que se espera retornar.

~~~javascript
const bookFilter = function (book) {
  if (book.read === true) {            
  console.log(book.title);            //  
  }
};

listOfBooks.filter(bookFilter);  // so irá retornar os livros que têm a propriedade 
                                //  "read" recebendo o valor true
~~~

##### .find()

- Retorna o valor do **primeiro** elemento do array que satisfizer a função provida.

~~~javascript
const bookFinder = listOfBooks.find(books => books.year === 2004);
console.log(bookFinder)

//retorna o elemento: 
{
    title: "The Third Life of Grange Copeland",
    autor: "Alice Walker",
    year: 2004,
    pages: 288,
    read: true,
 }
~~~

##### .sort()

- Ordena o array (de acordo com a tabela Unicode) e o retorna.

- A função recebe dois argumentos (a, b), realiza uma comparação entre eles e o retorno dessa comparação vai ser um número.

| Número | Retorno |
| ------ | ------ |
| 1 | **a** toma precedência sobre **b** (ordem decrescente) |
| 0 | **a** e **b** mantém as posições entre si |
| -1 | **b** toma precedência sobre **a** (ordem crescente) |

~~~javascript
listOfBooks.sort(function(a, b) {
  if (a.title < b.title) {
    return -1;    // crescente
  } else {
    return true
  }
})

console.log(listOfBooks)   // retornará o array ordenando os títulos em ordem alfabética
~~~

##### .reduce()

- Permite realizar operações matemáticas com os itens de um array e retorna o resultado dessa operação.

### Objetos

- São dados que contém uma coleção de propriedades organizadas em chaves de maneira estruturada.

- As propriedades podem ser armazenadas como strings e números.

#### Acessar propriedades de um objeto:

- Pode-se acessar as propriedades de um objeto de duas maneira. Através do dot notation (.) e do bracket notation ([]).

##### Dot notation

- É usado quando se sabe o nome da propriedade que se quer acessar;

~~~javascript
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;    // "ballcap"
~~~

##### Bracket notation

- É usado quando a propriedade do objeto possui um espaço no nome, mas também pode ser utilizado nas propriedades sem espaços.

~~~javascript
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];  -->  seria a string "Kirk"
myObj['More Space'];  -->  seria a string "Spock"
myObj["NoSpace"];     -->  seria a string "USS Enterprise"
~~~

#### Atualizar propriedades do objeto

- Depois de criar um objeto, pode-se atualizar suas propriedades a qualquer momento, assim como se atualizaria qualquer outra variável.

- Utiliza-se o dot ou bracket notation para isso.

~~~javascript
const myDog = {
  "name": "James",
  "legs": 4,
  "tails": 1,
  "friends": ["cats"]
};

myDog.name = "Pluto";  
OR                           // mudou-se o "name" para Pluto;
myDog["name"] = "Pluto";
~~~

#### Adicionar novas propriedades ao objeto

- Pode-se adicionar novas propriedades a objetos do mesmo jeito que o modifica.

~~~javascript
const myDog = {
  "name": "Pluto",
  "legs": 4,
  "tails": 1,
  "friends": ["cats"]
};

myDog.bark = "woof";
OR                        // adiciona a propriedade "bark" ao objeto;
myDog["bark"] = "woof";
~~~

#### Deletar propriedades de um objeto

- Também utilizando dot ou bracket notation.

~~~javascript
const ourDog = {
  "name": "Pluto",
  "legs": 4,
  "tails": 1,
  "friends": ["cats"],
  "bark": "bow-wow"
};

delete ourDog.bark;
OR                          //  irá deletar a propriedade "bark";
delete ourDog["bark"];
~~~

### Loop

- Pode-se executar um código várias vezes utilizando um loop.

#### For

- É o tipo mais comum de loop no JavaScript.

- São declaradas com três expressões opcionais separadas por ponto e vírgula.

for (a; b; c)  

| Expressão | Retorno |
| ------ | ------ |
| a | declaração de inicialização |
| b | condição |
| c | incremento ou decremento |

- A instrução de inicialização é executada apenas uma vez antes do início do loop.

- A condição é avaliada no início de cada iteração do loop e ele continuará enquanto a condição for verdadeira, ou se não for interrompido por alguma palavra reservada (break, return). Se a condição for falsa, o loop para de ser executado.

- O incremento ou o decremento é executado no final de cada iteração de loop, antes da próxima verificação de condição.

~~~javascript
const ourArray = [];
for (let i = 0; i < 5; i++) {
   ourArray.push(i);
 }
~~~

#### While

- O loop é executado enquanto uma condição especifica é verdadera e ele para quando essa condição não é mais verdadeira.

~~~javascript
const ourArray = [];
let i = 0;
  
  while (i < 5) {
    ourArray.push(i);                 // o código será executado 5 vezes e anexará
    i++;                             // os números de 0 a 4 no array.
  }
~~~

##### Do... while

- Nesse caso, primeiro ele faz uma passagem do código dentro do loop, não importa o que aconteça e, então, continuará a executar o loop enquanto a condição especificada for avaliada como verdadeira

~~~javascript
const ourArray = [];
let i = 0;
   
do {
    ourArray.push(i);
    i++;
} while (i < 5);
~~~

- O do... while se comporta diferente quando a condição falha na primeira verificação. Ele garante que o código dentro do loop será executado pelo menos uma vez.
