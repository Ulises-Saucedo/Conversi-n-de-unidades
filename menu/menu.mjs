import inquirer from "inquirer";
import colors from 'colors';

const welcomeScreen = () =>{
    console.log('--------------------------------'.blue);
    console.log('     Conversión de unidades     '.blue);
    console.log('--------------------------------'.blue);
};

export {welcomeScreen};

const listOptions = async () =>{
    const respuesta = await inquirer 
        .prompt({
            type: 'list',
            name: 'opciones',
            message: 'Seleccione la opción que desee'.blue,
            choices: [
                {
                    value: 1,
                    name: 'Peso'.yellow
                },
                {
                    value: 2,
                    name: 'Longitud'.yellow
                },
                {
                    value: 3,
                    name: 'Temperatura'.yellow
                },
                {
                    value: 4,
                    name: 'Salir'.red
                }
            ]
        })
        return respuesta;
};



//Función para convertir Gr
const convertirGr = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Ingrese los Gramos que desea convertir'
        })
        .then(answersgr =>{
            const gr = parseFloat(answersgr.unitConverter);
            console.log('Mg: ', gr * 1000);
            console.log('Gr: ', gr);
            console.log('Kg: ', gr * 0.001);
        })
}
export {convertirGr}



// Función para convertir Centímetros 
const convertirCm = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Ingrese los Centímetros que desea convertir'
        })
        .then(answerscm =>{
            const cm = parseFloat(answerscm.unitConverter);
            console.log('Mm: ',cm * 10);
            console.log('Cm: ', cm);
            console.log('M: ', cm * 0.01);
        })
};
export {convertirCm}


//Función para convertir Temperatura
const convertirCelsius = async () =>{
    const unidad = await inquirer
        .prompt({
            type: 'number',
            name: 'unitConverter',
            message: 'Ingrese la cantidad de Celsius que desea convertir'
        })
        .then(answerscel =>{
            const cel = parseFloat(answerscel.unitConverter);
            console.log('Kelvin: ', (cel + 273.15));
            console.log('Celsius: ', cel);
            console.log('Fahrenheit: ', ((cel * 9/5) + 32));
        })
};
export {convertirCelsius}


export {listOptions};
