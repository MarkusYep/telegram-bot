process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const token = '804204970:AAHc9jwFoIPFHwmgipRo4WMli7w-jHxT-Gs';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(message){

  if (message.from.is_bot == false) {

    let chatID = message.chat.id;
    let unaletra = message.text.substring(message.text.length - 1);
    let dosletras =  message.text.substring(message.text.length - 2);
    let tresletras = message.text.substring(message.text.length - 3);
    let cuatroletras = message.text.substring(message.text.length - 4);
    let seisletras = message.text.substring(message.text.length - 6);
    let sieteletras = message.text.substring(message.text.length - 7);

    if (message.text.includes('un lol')) {
      bot.sendMessage(chatID, 'pa que eres un puto friki de mierda retrasado de los cojones hijo de puta subnormal');
    } else if (cuatroletras == 'inco' || unaletra == '5') {
      bot.sendMessage(chatID, 'por el culo te la hinco');
    } else if (cuatroletras == 'ocho' || unaletra == '8'){
      bot.sendMessage(chatID, 'por el culo te la esmocho');
    } else if (tresletras == 'ese' || tresletras == 'ece' || tresletras == 'eze') {
      bot.sendMessage(chatID, 'cuanto mas me la mamas mas me crese');
    } else if (tresletras == 'oca') {
      bot.sendMessage(chatID, 'mi polla en tu boca');
    } else if (cuatroletras == 'esta') {
      bot.sendMessage(chatID, 'la que te va a dar esta');
    } else if (cuatroletras == 'ente') {
      bot.sendMessage(chatID, 'mi polla en tu frente');
    } else if (tresletras == 'aso' || tresletras == 'azo') {
      bot.sendMessage(chatID, 'te rompo el culo y el braso');
    } else if (message.text == 'chacho pibe machango tu no eres el de pearl harbor') {
      bot.sendMessage(chatID, 'chacho lo que faltaba ahora un fan en mita de la guerra ahi');
    } else if (message.text == 'uste conose al soldado armiche') {
      bot.sendMessage(chatID, 'que si fumo boliche');
    } else if (message.text == 'me la quito') {
      bot.sendMessage(chatID, 'me la pongo');
    } else if (message.text == 'un dos') {
      bot.sendMessage(chatID, 'me cago en dios');
    } else if (message.text == 'dos tres') {
      bot.sendMessage(chatID, 'te huelen los pies');
    } else if (message.text == 'tres cuatro') {
      bot.sendMessage(chatID, 'la polla tu gato');
    } else if (message.text == 'ay') {
      bot.sendMessage(chatID, 'lo que digo yo siempre');
    } else if (tresletras == 'ola') {
      bot.sendMessage(chatID, 'pa ti mi cola');
    } else if (sieteletras == 'marselo' || sieteletras == 'marcelo') {
      bot.sendMessage(chatID, 'agachate y conoselo');
    } else if (message.text == 'quien fuma') {
      bot.sendMessage(chatID, 'el puma');
    } else if (message.text == 'hazte un porro') {
      bot.sendMessage(chatID, 'un que');
    } else if (message.text == 'ç') {
      bot.sendMessage(chatID, 'ç');
    } else if (dosletras == '69' || tresletras == '420') {
      bot.sendMessage(chatID, 'nice');
    } else if (tresletras == 'lsd') {
      bot.sendMessage(chatID, 'vamosviendo');
    } else if (seisletras == 'papope') {
      bot.sendMessage(chatID, 'paparapa pa pa pa');
    } else if (message.text == 'eyo fiolo') {
      bot.sendMessage(chatID, 'resa fiolo');
    } else if (tresletras == 'ano') {
      bot.sendMessage(chatID, 'me la agarras con la mano');
    } else if (tresletras == 'ado') {
      bot.sendMessage(chatID, 'el que tengo aqui colgado');
    }
  }
})

