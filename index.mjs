import inquirer from "inquirer";
import colors from 'colors'
import { welcomeScreen } from "./menu/menu.mjs";
import { listOptions } from "./menu/menu.mjs";
import { convertirGr } from "./menu/menu.mjs";
import { convertirCm } from "./menu/menu.mjs";
import { convertirCelsius } from "./menu/menu.mjs";


welcomeScreen();

const mainMenu = async() =>{
    let aux_options;
    do{
        const {opciones} = await listOptions();
        aux_options = opciones;
        switch(opciones){
            case 1: await convertirGr();break;
            case 2: await convertirCm();break;
            case 3: await convertirCelsius();break;   
        }
    }while(aux_options != 4)
}

mainMenu();