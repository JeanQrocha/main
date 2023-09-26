

const studants = [
    {name: "Rodolfo" , testGrade: 7},
    {name: "Maria" , testGrade: 5},
    {name: "João" , testGrade: 8},
    {name: "Bruno" , testGrade: 9},
    {name: "Carla" , testGrade: 3},
    {name: "Ana" , testGrade: 2},
    {name: "Julio" , testGrade: 10},
]

const resultFinal = studants.map( user => {
     const testResult = {
        name: user.name,
        result: user.testGrade >= 5 ? "Você foi aprovado" : "Você foi reprovado"
        }

    return testResult

})

console.log(resultFinal)