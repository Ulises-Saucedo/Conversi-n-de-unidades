import { welcomeScreen, listOptions, convertGr, convertCm, convertCelsius } from "./menu/menu.mjs";

welcomeScreen();

const mainMenu = async() =>{
    let opt;
    do{
        const { opciones } = await listOptions();
        opt = opciones;
        switch(opciones){
            case 1: await convertGr();break;
            case 2: await convertCm();break;
            case 3: await convertCelsius();break;   
        }
    }while(opt != 4)
}

mainMenu();