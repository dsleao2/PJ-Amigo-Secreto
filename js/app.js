let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = ' ';
}

function sortear() {
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    //Então, criaremos um for() onde, dentro dos parâmetros, vamos declarar uma variável i, por exemplo, que começa com zero: let i = 0. Precisamos percorrer até a última posição do nosso array, que será representado por amigos.length.
    //No entanto, como o array começa com o índice 0, o último índice, que representamos por i será um número menor que a quantidade de elementos. Por exemplo, uma lista de 10 itens tem índices de 0 a 9. Representamos isso com i < amigos.length. Por fim, aumentamos o i em 1 enquanto ele for menor que o tamanho da lista, usando i++.
    for (let i = 0; i < amigos.length; i++) {
        //para inserirmos um valor nessa lista, temos que definir, dentro do for()
        //Agora, para inserirmos um valor nessa lista, temos que definir, dentro do for(), o que sortieo.innerHTML vai receber. No caso, ele receberá o nome do primeiro nome da lista e uma associação de quem ele sorteou, que é o nome seguinte, ou seja, o elemento na posição i + 1.
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }

    }
}
// funçao pega do "algoritimo fisher-yates" (ver no notion), para que ele embaralhe as listas, quando clicado no botão sortear.
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {

    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}