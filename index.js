//Toy problem-1
let studentGrades =(marks)=>{
    if (marks>79){
        return 'A'
    }
    else if(marks=>60 && marks<=79){
        return 'B'
    }
    else if(marks=>49 && marks<=59){
        return 'D'
    }
    else if(marks<40){
        return 'E'
    }
}
console.log(studentGrades(90))
