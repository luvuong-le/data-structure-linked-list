import { SLL } from "./s-linked-list";
import { DLL } from "./d-linked-list";

const chalk = require('chalk');
const  { prompt } = require('inquirer');
const art = require('ascii-art');
const readline = require('readline');


/* Set up readline module interface 
   Creates a new readline.Interface instance
*/
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.on("close", () => {
  console.log("Exiting Program...");
});

const sll = new SLL();
const dll = new DLL();

function start() {
    // Render ASCII Art title
    art.font('Linked lists', 'Doom', 'red+bold', function (rendered) {
        console.log(rendered);
        init();
    });
}

function action(time, callback) {
    setTimeout(() => {
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
    console.log(`1: Singly Linked List \n2: Doubly Linked List \n3: Exit Program`);

    readlineInterface.question(chalk.blue('\nPick an option > '), (answer) => {
        // Switch Statement Here
        switch (answer.trim()) {
            case '1': 
                action(1000, () => {
                    showSLLMenu();
                });
                break;
            case '2': 
                action(1000, () => { showDLLMenu() });
                break;
            case '3':
                action(1000, () => { readlineInterface.close(); process.exit(); });
                break;
            default: 
                console.log(chalk.red('\n[ERROR] Please pick a valid option!'));
                action(1000, start);
                break;
        };
    });
}

function showSLLMenu() {
    // art.font('Singly', 'Doom', 'red+bold', (rendered) => {
    //   console.log(rendered);
    // });
    console.log(chalk.red("\nData Structures: Singly Linked Lists"));
    console.log("------------------------");
    console.log(`1: Get List Size \n2: Prepend \n3: Append \n4: Remove First \n5: Remove Last \n6: Remove By Number \n7: Remove at Position \n8: Get At Specific Position \n9: Print List \n10: Back to Main Menu`);

    readlineInterface.question(chalk.blue('\nPick an option > '), (answer) => {
        switch (answer.trim()) {
          case "1":
            action(1000, () => {
              console.log(`List length: ${sll.length}`);
              showSLLMenu();
            });
            break;
          case "2":
            action(1000, () => {
              readlineInterface.question(
                chalk.blue("\nEnter an number to prepend > "),
                answer => {
                  sll.prepend(parseInt(answer));
                  showSLLMenu();
                }
              );
            });
            break;
          case "3":
            action(1000, () => {
              readlineInterface.question(
                chalk.blue("\nEnter an number to append > "),
                answer => {
                  sll.append(parseInt(answer));
                  showSLLMenu();
                }
              );
            });
            break;
          case "4":
            action(1000, () => {
              sll.removeFirst();
              showSLLMenu();
            });
            break;
          case "5":
            action(1000, () => {
              sll.removeLast();
              showSLLMenu();
            });
            break;
          case "6":
            action(1000, () => {
              readlineInterface.question(
                chalk.blue("\nEnter an number > "),
                answer => {
                  sll.remove(parseInt(answer));
                  showSLLMenu();
                }
              );
            });
            break;
          case "7":
            action(1000, () => {
              readlineInterface.question(
                chalk.blue("\nEnter an position > "),
                answer => {
                  sll.removeAtPosition(parseInt(answer));
                  showSLLMenu();
                }
              );
            });
            break;
          case "8":
            action(1000, () => {
              readlineInterface.question(
                chalk.blue("\nEnter an position > "),
                answer => {
                  sll.getAtPosition(parseInt(answer));
                  showSLLMenu();
                }
              );
            });
            break;
          case "9":
            action(1000, () => {
              sll.print();
              showSLLMenu();
            });
            break;
          case "10":
            action(1000, () => {
                start();
            });
            break;
          default:
            console.log(chalk.red("\n[ERROR] Please enter a valid option"));
            action(1000, () => showSLLMenu());
            break;
        };
    });
}

function showDLLMenu() {
    // art.font('Doubly', 'Doom', 'red+bold', (rendered) => {
    //   console.log(rendered);
    // });
    console.log(chalk.red("\nData Structures: Doubly Linked Lists"));
    console.log("------------------------");
    console.log(`1: Get List Size \n2: Prepend \n3: Append \n4: Remove First \n5: Remove Last \n6: Remove By Number \n7: Remove at Position \n8: Get At Specific Position \n9: Print List Forwards \n10: Print List Backwards \n11: Back to Main Menu`);

    readlineInterface.question(chalk.blue('\nPick an option > '), (answer) => {
      switch (answer.trim()) {
        case "1":
          action(1000, () => {
            console.log(`List length: ${dll.length}`);
            showDLLMenu();
          });
          break;
        case "2":
          action(1000, () => {
            readlineInterface.question(
              chalk.blue("\nEnter an number to prepend > "),
              answer => {
                dll.prepend(parseInt(answer));
                showDLLMenu();
              }
            );
          });
          break;
        case "3":
          action(1000, () => {
            readlineInterface.question(
              chalk.blue("\nEnter an number to append > "),
              answer => {
                dll.append(parseInt(answer));
                showDLLMenu();
              }
            );
          });
          break;
        case "4":
          action(1000, () => {
            dll.removeFirst();
            showDLLMenu();
          });
          break;
        case "5":
          action(1000, () => {
            dll.removeLast();
            showDLLMenu();
          });
          break;
        case "6":
          action(1000, () => {
            readlineInterface.question(
              chalk.blue("\nEnter an number > "),
              answer => {
                dll.remove(parseInt(answer));
                showDLLMenu();
              }
            );
          });
          break;
        case "7":
          action(1000, () => {
            readlineInterface.question(
              chalk.blue("\nEnter an position > "),
              answer => {
                dll.removeAtPosition(parseInt(answer));
                showDLLMenu();
              }
            );
          });
          break;
        case "8":
          action(1000, () => {
            readlineInterface.question(
              chalk.blue("\nEnter an position > "),
              answer => {
                dll.getAtPosition(parseInt(answer));
                showDLLMenu();
              }
            );
          });
          break;
        case "9":
          action(1000, () => {
            dll.print();
            showDLLMenu();
          });
          break;
        case "10":
          action(1000, () => {
            dll.printReverse();
            showDLLMenu();
          });
          break;
        case "11":
          action(1000, () => {
            start();
          });
          break;
        default:
          console.log(chalk.red("\n[ERROR] Please enter a valid option"));
          action(1000, () => showDLLMenu());
          break;
      };
    });
}

function init() {
    showMain();
}

// Start the app by showing the title
start();