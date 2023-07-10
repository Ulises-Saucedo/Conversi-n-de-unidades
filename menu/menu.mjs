import inquirer from "inquirer";
import colors from 'colors';
export { welcomeScreen, convertCelsius, convertGr, convertCm, listOptions }

const welcomeScreen = () =>{
    console.log('--------------------------------'.blue);
    console.log('     Conversión de unidades     '.blue);
    console.log('--------------------------------'.blue);
};

const listOptions = async () =>{
    const response = await inquirer 
        .prompt({
            type: 'list',
            name: 'opciones',
            message: 'Select the option you want'.blue,
            choices: [
                {
                    value: 1,
                    name: 'Weight'.yellow
                },
                {
                    value: 2,
                    name: 'Length'.yellow
                },
                {
                    value: 3,
                    name: 'Temperature'.yellow
                },
                {
                    value: 4,
                    name: 'Leave'.red
                }
            ]
        })
        return response;
};



//Function to convert Gr
const convertGr = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Enter (in grams) the unit you want to convert'
        })
        .then(answersgr =>{
            const gr = parseFloat(answersgr.unitConverter);
            console.log('Mg: ', gr * 1000);
            console.log('Gr: ', gr);
            console.log('Kg: ', gr * 0.001);
        })
    return unidad
}


// Function to convert Centimeters
const convertCm = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Enter (in centimeters) the unit you want to convert'
        })
        .then(answerscm =>{
            const cm = parseFloat(answerscm.unitConverter);
            console.log('Mm: ',cm * 10);
            console.log('Cm: ', cm);
            console.log('M: ', cm * 0.01);
        })
    return unidad
};


//Function to convert Temperature
const convertCelsius = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Enter (in celsius) the unit you want to convert'
        })
        .then(answerscel =>{
            const cel = parseFloat(answerscel.unitConverter);
            console.log('Kelvin: ', (cel + 273.15));
            console.log('Celsius: ', cel);
            console.log('Fahrenheit: ', ((cel * 9/5) + 32));
        })
    return unidad
};