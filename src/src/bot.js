import { AppRouter } from './router';
import axios from "axios";
class Bot {

    constructor() {
    }

    async getBotResponse(msg) {
        let response = ["Sorry, Cryptfo Bot is not set up yet to handle that response!"];
        const message = msg.toLowerCase();
        if (message.includes("help")) {
            const responses = [`Cryptfo Help Bot can currently assist you with
            getting a cryptocurrency price or redirect you to a page that you are interested in. For example, you can say, 'What's the price of BTC?' or 'Redirect me to the news page please.'`]
        
            response = this.sendMessage(responses);
        }

        else if (message.includes("price of")) {
            const noQuestions = msg.replace("?", "");
            console.log(noQuestions);
            const separatedMsg = noQuestions.split(' ');
            const crypto = separatedMsg[separatedMsg.indexOf('of') + 1];
            const price = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${crypto}&tsyms=USD`).then(price => {
            
            price.data.Response != "Error" ? response = [this.sendMessage("The current price of " + crypto + " is $" + Object.values(price.data)[0].USD)] : [this.sendMessage("Sorry, your ticket was invalid! Please enter a valid ticker.")];
            })
            
            
        }

        else if (message.includes("price")) {
            response = [this.sendMessage("For any information about prices, Cryptfo displays prices of cryptocurrencies that are updated every 5 minutes. I just redirected you to there!")];
            AppRouter.replace('/prices')
        }

        else if (message.includes("news")) {
            response = [this.sendMessage("To find out the latest news, Cryptfo has a news panel that can direct you to find the latest information about cryptocurrencies. I've just directed you to there.")];
            AppRouter.replace('/news');
        }
        
        else if (message.includes("home")) {
            response = [this.sendMessage("Just redirected you to the home page!")];
            AppRouter.replace('/');
        }

        else if(message.includes("thank")) {
            response = [this.sendMessage("No problem! Helping is my job! Glad to help. :)")];
        }

        return response;

    }

    sendMessage(message) {
        return message;
    }
}

export default Bot;

