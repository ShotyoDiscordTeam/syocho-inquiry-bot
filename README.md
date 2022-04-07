# syocho-inquiry-bot
discordサーバー内の他のチャンネルにメッセージを転送するbot
## Overview
AからBへのメッセージ転送
BからAへのメッセージ転送

AからBへメッセージを送るときは匿名化がされない  
BからAへメッセージを送るときは匿名化される   

Bからメッセージが送られてきたA視点  
  ![Test Image 2](1.png)  
Aからメッセージが送られてきたB視点  
  ![Test Image 2](2.png)
## Usage
1:`git clone https://github.com/mono0218/syocho-inquiry-bot.git`  
2:`cd syocho-inquiry-bot`  
3:config.jsonにtokenとチャンネルid二つを記入する  
4:`npm install`  
5:`node index.js ` or `node .`  

## Licence

[MIT](https://github.com/mono0218/syocho-inquiry-bot/blob/master/LICENSE)