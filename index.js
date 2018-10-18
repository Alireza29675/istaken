const inquirer = require('inquirer');
const chalk = require('chalk');

const messages = {
    AVAILABLE: chalk`{green ● available}`,
    RESERVED: chalk`{red ● reserved}`
}

const { instaCheck } = require('./src/InstaChecker');

class App {

    async ask () {
        const answers = await inquirer.prompt([{
            name: 'id',
            message: 'What is the ID you want to check?'
        }]);
        const result = await this.checkID(answers.id);
        this.printResult(result);
        await this.ask();
    }

    async checkID (id) {
        const result = {};
        result.instagram = await instaCheck(id);
        return result;
    }

    printResult (result) {
        console.log(chalk`Instagram: ${result.instagram ? messages.RESERVED : messages.AVAILABLE}`)
    }

}

const app = new App();

app.ask();