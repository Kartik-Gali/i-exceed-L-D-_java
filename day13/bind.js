let trainee={name:"mateen"};
 
let trainer={
    name:"harsh",
    displayName:function()
    {
        return this.name;
    },
    calculateMyAge:function(dob)
    {
        this.dob=dob;
        return new Date().getFullYear()-this.dob
 
    }
 
};
console.log(trainer.displayName());
console.log(trainer.displayName.bind(trainee)());
console.log(trainer.calculateMyAge(2003));
let trainee_age=trainer.calculateMyAge.bind(trainee);
console.log(trainee_age(2002));
