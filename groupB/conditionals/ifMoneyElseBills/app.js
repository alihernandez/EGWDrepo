var money = 1500.00;
var bills = 2500.00;
if (money > bills || money ===bills){
    console.log('You are covered!')
}
else if (money === bills || money < 2000){
    console.log('you are good, just barely')
}
else { console.log('uh-oh!')
};

function assignGrade(score){
    if (score>90){
        return 'A';
    }else if (score > 80){
        return 'B';
    }else if (score> 70) {
        return 'C';
    }else if (score> 60) {
        return 'C';
    }else if (score> 50) {
        return 'D';
    }else if (score> 40) {
        return 'F';
    }};