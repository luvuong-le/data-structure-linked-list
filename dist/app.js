"use strict";
exports.__esModule = true;
var s_linked_list_1 = require("./s-linked-list");
var d_linked_list_1 = require("./d-linked-list");
var chalk = require('chalk');
var prompt = require('inquirer').prompt;
var art = require('ascii-art');
var readline = require('readline');
/* Set up readline module interface
   Creates a new readline.Interface instance
*/
var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
readlineInterface.on("close", function () {
    console.log("Exiting Program...");
});
var sll = new s_linked_list_1.SLL();
var dll = new d_linked_list_1.DLL();
function start() {
    // Render ASCII Art title
    art.font('Linked lists', 'Doom', 'red+bold', function (rendered) {
        console.log(rendered);
        init();
    });
}
function action(time, callback) {
    setTimeout(function () {
        clearScreen();
        callback();
    }, time);
}
function clearScreen() {
    process.stdout.write("\x1B[2J\x1B[0f");
}
function showMain() {
    console.log(chalk.red("\nData Structures: Linked Lists"));
    console.log("------------------------");
    console.log("1: Singly Linked List \n2: Doubly Linked List \n3: Exit Program");
    readlineInterface.question(chalk.blue('\nPick an option > '), function (answer) {
        // Switch Statement Here
        switch (answer.trim()) {
            case '1':
                action(1000, function () {
                    showSLLMenu();
                });
                break;
            case '2':
                action(1000, function () { showDLLMenu(); });
                break;
            case '3':
                action(1000, function () { readlineInterface.close(); process.exit(); });
                break;
            default:
                console.log(chalk.red('\n[ERROR] Please pick a valid option!'));
                action(1000, start);
                break;
        }
        ;
    });
}
function showSLLMenu() {
    console.log(chalk.red("\nData Structures: Singly Linked Lists"));
    console.log("------------------------");
    console.log("1: Get List Size \n2: Prepend \n3: Append \n4: Remove First \n5: Remove Last \n6: Remove By Number \n7: Remove at Position \n8: Get At Specific Position \n9: Print List \n10: Reverse List \n11: Back to Main Menu");
    readlineInterface.question(chalk.blue('\nPick an option > '), function (answer) {
        switch (answer.trim()) {
            case "1":
                action(1000, function () {
                    console.log("List length: " + sll.length);
                    showSLLMenu();
                });
                break;
            case "2":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number to prepend > "), function (answer) {
                        sll.prepend(parseInt(answer));
                        showSLLMenu();
                    });
                });
                break;
            case "3":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number to append > "), function (answer) {
                        sll.append(parseInt(answer));
                        showSLLMenu();
                    });
                });
                break;
            case "4":
                action(1000, function () {
                    sll.removeFirst();
                    showSLLMenu();
                });
                break;
            case "5":
                action(1000, function () {
                    sll.removeLast();
                    showSLLMenu();
                });
                break;
            case "6":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number > "), function (answer) {
                        sll.remove(parseInt(answer));
                        showSLLMenu();
                    });
                });
                break;
            case "7":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an position > "), function (answer) {
                        sll.removeAtPosition(parseInt(answer));
                        showSLLMenu();
                    });
                });
                break;
            case "8":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an position > "), function (answer) {
                        sll.getAtPosition(parseInt(answer));
                        showSLLMenu();
                    });
                });
                break;
            case "9":
                action(1000, function () {
                    sll.print();
                    showSLLMenu();
                });
                break;
            case "10":
                action(1000, function () {
                    sll.reverse();
                    showSLLMenu();
                });
                break;
            case "11":
                action(1000, function () {
                    start();
                });
                break;
            default:
                console.log(chalk.red("\n[ERROR] Please enter a valid option"));
                action(1000, function () { return showSLLMenu(); });
                break;
        }
        ;
    });
}
function showDLLMenu() {
    console.log(chalk.red("\nData Structures: Doubly Linked Lists"));
    console.log("------------------------");
    console.log("1: Get List Size \n2: Prepend \n3: Append \n4: Remove First \n5: Remove Last \n6: Remove By Number \n7: Remove at Position \n8: Get At Specific Position \n9: Print List Forwards \n10: Print List Backwards \n11: Reverse List \n12: Back to Main Menu");
    readlineInterface.question(chalk.blue('\nPick an option > '), function (answer) {
        switch (answer.trim()) {
            case "1":
                action(1000, function () {
                    console.log("List length: " + dll.length);
                    showDLLMenu();
                });
                break;
            case "2":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number to prepend > "), function (answer) {
                        dll.prepend(parseInt(answer));
                        showDLLMenu();
                    });
                });
                break;
            case "3":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number to append > "), function (answer) {
                        dll.append(parseInt(answer));
                        showDLLMenu();
                    });
                });
                break;
            case "4":
                action(1000, function () {
                    dll.removeFirst();
                    showDLLMenu();
                });
                break;
            case "5":
                action(1000, function () {
                    dll.removeLast();
                    showDLLMenu();
                });
                break;
            case "6":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an number > "), function (answer) {
                        dll.remove(parseInt(answer));
                        showDLLMenu();
                    });
                });
                break;
            case "7":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an position > "), function (answer) {
                        dll.removeAtPosition(parseInt(answer));
                        showDLLMenu();
                    });
                });
                break;
            case "8":
                action(1000, function () {
                    readlineInterface.question(chalk.blue("\nEnter an position > "), function (answer) {
                        dll.getAtPosition(parseInt(answer));
                        showDLLMenu();
                    });
                });
                break;
            case "9":
                action(1000, function () {
                    dll.print();
                    showDLLMenu();
                });
                break;
            case "10":
                action(1000, function () {
                    dll.printReverse();
                    showDLLMenu();
                });
                break;
            case "11":
                action(1000, function () {
                    dll.reverse();
                    showDLLMenu();
                });
                break;
            case "12":
                action(1000, function () {
                    start();
                });
                break;
            default:
                console.log(chalk.red("\n[ERROR] Please enter a valid option"));
                action(1000, function () { return showDLLMenu(); });
                break;
        }
        ;
    });
}
function init() {
    showMain();
}
// Start the app by showing the title
start();
