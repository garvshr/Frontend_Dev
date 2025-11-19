const workoutData = [
    { user: 'A', steps: 8000, calories: 300 },
    { user: 'B', steps: 12000, calories: 500 },
    { user: 'C', steps: 4000, calories: 200 }
];
class FitnessAnalytics {
    constructor(dataset) {
        if (dataset.length === 0) throw new Error('Dataset is empty');
        this.dataset = dataset;
    }
    getActiveUsers() {
        return this.dataset.filter(user => user.steps > 7000).map(user => user.user);
    }
    getAverageCalories() {
        return this.dataset.reduce((sum, user) => sum + user.calories, 0) / this.dataset.length;
    }
    getUserSummary() {
        return this.dataset.map(user => `${user.user}: ${user.steps} steps, ${user.calories} calories`);
    }
}
const analytics = new FitnessAnalytics(workoutData);
console.log('Active Users:', analytics.getActiveUsers()); // ['A', 'B']
console.log('Average Calories:', analytics.getAverageCalories()); // 333.33
console.log('Summaries:', analytics.getUserSummary());