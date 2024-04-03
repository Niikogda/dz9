// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками
const account = {
  balance: 1000,
};

function performBankOperations(account, operation, amount) {
  operation(account, amount);
}

function deposit(account, amount) {
  account.balance += amount;
  console.log(`Deposited ${amount}. New balance is ${account.balance}.`);
}

function withdraw(account, amount) {
  if (account.balance >= amount) {
    account.balance -= amount;
    console.log(`Withdrew ${amount}. New balance is ${account.balance}.`);
  } else {
    console.log(`Cannot withdraw ${amount}. Insufficient funds.`);
  }
}

performBankOperations(account, deposit, 500);
performBankOperations(account, withdraw, 200);
performBankOperations(account, withdraw, 2000);
