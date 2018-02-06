import store from 'store';
export default async function() {
  // need to enable by flag
  // Open chrome://flags/#enable-experimental-web-platform-features in Chrome

  try {
    const budgets = navigator.budget.getBudget();
    budgets.forEach(element => {
      console.log(`At '${new Date(element.time).toString()}' your budget will be '${element.budgetAt}'.`);
    });
    store.put('feature', 1, 'navigator.budget.getBudget');
  } catch (error) {
    store.put('feature', 0, 'navigator.budget.getBudget');
    console.error(error);
  }

  try {
    const cost = navigator.budget.getCost('silent-push');
    console.log('Cost of silent push is:', cost);
    store.put('feature', 1, 'navigator.budget.getCost');
  } catch (error) {
    store.put('feature', 0, 'navigator.budget.getCost');
    console.error(error);
  }
}
