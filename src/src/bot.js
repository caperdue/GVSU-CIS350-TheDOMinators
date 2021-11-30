import { AppRouter } from './router';
import axios from "axios";
class Bot {

    constructor() {
    }

    async getBotResponse(msg) {
        let response = "Sorry, Cryptfo Bot is not set up yet to handle that response!";
        const message = msg.toLowerCase();
        if (message.includes("help")) {
            const responses = ["Typing any of these can help you out...", 
            "Page redirection - 'price': Redirect to price page, 'news': Redirect to news page, 'home': Redirect to home page",
            "Current information - 'price of': Get the price of a current cryptocurrency in-chat (note, please enter the TICKER only), 'news about': Get news about something in-chat",
        ]
            response = this.sendMessage(responses);
        }

        else if (message.includes("price of")) {
            const separatedMsg = msg.split(' ');
            const crypto = separatedMsg[separatedMsg.indexOf('of') + 1];
            const price = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${crypto}&tsyms=USD`).then(price => {
            
            price.data.Response != "Error" ? response = [this.sendMessage("The current price of " + crypto + " is $" + Object.values(price.data)[0].USD)] : [this.sendMessage("Sorry, your ticket was invalid! Please enter a valid ticker.")];
            })
            
            
            AppRouter.replace('/prices')
        }

        else if (message.includes("price")) {
            response = [this.sendMessage("For any information about prices, Cryptfo displays prices of cryptocurrencies that are updated every 5 minutes. I just redirected you to there!")];
            AppRouter.replace('/prices')
        }

        else if (message.includes("news")) {
            response = [this.sendMessage("To find out the latest news, Cryptfo has a news panel that can direct you to find the latest information about cryptocurrencies. I've just directed you to there.")];
            AppRouter.replace('/news');
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

