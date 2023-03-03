
export const INFORMATION = [
    { //0
        title: "¿Qué quieres hacer?",
        buttons: [
            {
                optionTitle: "Sesión de estudio o trabajo",
                nextInterface: 1
            },
            {
                optionTitle: "Sesión de lectura",
                nextInterface: 0
            },
            {
                optionTitle: "Ver estadísticas",
                nextInterface: 0
            },
        ],
        goBackButton: false,
        lastInteface: 0
    }, 
    { //1
        title: "Seleccione el tipo de sesión",
        buttons: [
            {
                optionTitle: "Estudio o investigación",
                nextInterface: 2
            },
            {
                optionTitle: "Trabajo o tarea",
                nextInterface: 3
            },
            {
                optionTitle: "Estudio inglés",
                nextInterface: 1
            },
            {
                optionTitle: "Proyectos personales",
                nextInterface: 4
            },
        ],
        goBackButton: true,
        lastInteface: 0
    }, 
    { //2
        title: "¿Qué tanto interés tienes en el tema?",
        buttons: [
            {
                optionTitle: "Alto",
                nextInterface: 2
            },
            {
                optionTitle: "Intermedio o bajo",
                nextInterface: 2
            },
        ],
        goBackButton: true,
        lastInteface: 1
    }, 
    { //3
        title: "Seleccione la dificultad de la tarea",
        buttons: [
            {
                optionTitle: "Alto o intermedio",
                nextInterface: 3
            },
            {
                optionTitle: "Bajo",
                nextInterface: 3
            },
        ],
        goBackButton: true,
        lastInteface: 1
    },
    { //4
        title: "Seleccione área de estudio",
        buttons: [
            {
                optionTitle: "Desarrollo Web",
                nextInterface: 5
            },
            {
                optionTitle: "Desarrollo de Videojuegos",
                nextInterface: 5
            },
            
        ],
        goBackButton: true,
        lastInteface: 1
    },
    { //5
        title: "Seleccione tipo sesión",
        buttons: [
            {
                optionTitle: "Estudio o investigación",
                nextInterface: 5
            },
            {
                optionTitle: "Práctica",
                nextInterface: 5
            },
            
        ],
        goBackButton: true,
        lastInteface: 4
    },
]
    

    
