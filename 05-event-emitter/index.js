// trabalhando com o Event-Emitter.
const EventEmitter = require('events'); // 'events' => classe no Node.JS
//EventEmitter => vai buscar todos os eventos, para classe MeuEmissor.
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
// simulando um click do usuario.
const nomeEvento = 'usuario:click';
// escutando o evento com o 'on.meuEmissro' na função click.
meuEmissor.on(nomeEvento, function (click){
    console.log('um usuario clicou', click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// contador.
// let count = 0; 
// setando um intervalo.
// setInterval(function(){
// meuEmissor.emit(nomeEvento, 'na barra de rolagem' + (count ++)); // incrementa o evento.
// }, 1000);

const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}`);
}); // fica escutando um evento.