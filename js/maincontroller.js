app.controller('MainController', function($scope){
//angular változó létrehozása
$scope.szoveg = "Így működnek az Angularban a változók!";

$scope.emberek = [
    {nev: 'Wick', eletkor: 20, csajok: ['Bridget', 'Agnes']},
    {nev: 'Lucifer', eletkor: 10000, csajok: ['Detective', 'Milliók']},
    {nev: 'Ragnar', eletkor: 40, csajok: ['lagherta', 'Aslaug hercegnő']},
    {nev: 'Bulgasal', eletkor: 2000, csajok: ['Min Si-ho']}
];

$scope.cars = [
    {brand: 'Toyota', year: 2022, petrol: true, models: ['Camry', 'Corolla']},
    {brand: 'Tesla', year: 2023, petrol: false, models: ['Model S', 'Model 3']},
    {brand: 'Ford', year: 2021, petrol: true, models: ['Mustang', 'Fusion']},
    {brand: 'Chevrolet', year: 2022, petrol: false, models: ['Bolt', 'Malibu']}
]

});