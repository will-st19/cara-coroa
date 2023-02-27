const btnJogar = document.getElementById('btnJogar');
const resultado = document.getElementById('resultado');

btnJogar.addEventListener('click', function () {
    const numero = Math.floor(Math.random() * 2);
    if (numero === 0) {
        resultado.innerHTML = '<h2>Cara!</h2><img src="heads.png">';
    } else {
        resultado.innerHTML = '<h2>Coroa!</h2><img src="tails.png">';
    }
});
