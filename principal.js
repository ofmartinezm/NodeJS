let Curso = [{
    id:1,
    nombre: 'Node JS Básico',
    duracion: 40,
    valor: 1800000
    },
    {
    id:2,
    nombre: 'Node JS Avanzado',
    duracion: 30,
    valor: 2000000
    },
    {
    id:3,
    nombre: 'Excel Financiero',
    duracion: 36,
    valor: 2800000
    },
    {
    id:4,
    nombre: 'Rubby',
    duracion: 60,
    valor: 3200000
    },
    ];


   
let cursos=(curso, callback)=>{

    
              
    curso.forEach((elemento)=> {
        setTimeout(()=>{ 
         let    respuesta = ('** Código del curso:'+ elemento.id +
            ' -- Nombre del  curso:'+ elemento.nombre+
            ' -- Duración del curso:'+ elemento.duracion+
            ' -- Valor del  curso:$'+ elemento.valor);
            //callback(respuesta);
               
                //callback(respuesta)
                console.log(respuesta);
        },2000);
            });


        
        };


    //cursos(Curso
    cursos(Curso, function(respuesta){
        console.log(respuesta);
    });
   
    




    
        