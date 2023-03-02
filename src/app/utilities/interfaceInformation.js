export const INFORMATION = [
    {
        title: "¿Qué quieres hacer?",
        numberOfOptions: 3,
        buttons: [
            {
                optionTitle: "Sesión de estudio o trabajo",
                optionAction: ()=> {
                    const nextInformation = 1;
                    console.log('jeje');
                    return nextInformation;
                },
            },
            {
                optionTitle: "Sesión de lectura",
                optionAction: ()=> {
                    const nextInformation = 2;
                    console.log('jeje');
                    return nextInformation;
                },
            },
            {
                optionTitle: "Ver estadísticas",
                optionAction: ()=> {
                    const nextInformation = 3;
                    console.log('jeje');
                    return nextInformation;
                }
            },
        ],
        goBackButton: false,
        lastInteface: null
    }
]
    

    
