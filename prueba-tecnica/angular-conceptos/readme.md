<!-- ANGULAR  - FRAMEWORK RESPALDADO POR GOOGLE-->
PRIMEROS PASOS:
1.- CLI - CLIENTE DE COMANDOS ANGULAR
2.- Codigos para inicializar proyecto en Angular: 

    -> Install angular npm -g @amgular/cli
    -> Workspace and initial app: ng new my-app
    -> Run app: cd my-app -> ng serve --open

3.-¿como funcionan los componentes?
    -> Comando para generar componentes, te crea un boilerPlate y un archivo para incluir pruebas por defecto.
        -> ng g c components/product 

    ¿Como enviamos datos al componente y como empiezo a comunicarme de padre a hijo?
        nuestro componente recibe un producto y empezamos a utilzar typing
            -creamos carpeta de models
            -hoja -> product.models.ts 
            -creamos interface Product {
                id: number;
                title: string;
                price: number;
                images: string[];
            }


4.- Framework que desde sus inicios en AngularJS nos dió a conocer sobre el MCV - MODELO-VISTA-CONTROLADOR

5.-Versión 2, lenguaje predominante TypeScript. Tipado de datos más estrictos y aprendizaje sobre el MVVM - MODELO - VISTA - VISTA - MODELO. Sobresale el concepto del 2-way-binding y la idea era el desacoplamiento de la interfaz y lógica del negocio.

----->two way binding : El enlace bidireccional brinda a los componentes de la aplicación una forma de compartir datos. Escucha eventos y actualiza valores simultáneamente entre componentes principales y secundarios.

6.-Una aplicación Angular es un conjunto de legos, que tiene diferentes técnicas que nos permiten usar la arquitectura. Esos legos son los bloques de construcción de la aplicación.

7.-Arquitectura de Aplicación - Conceptos fundamentales:
    Los bloques de construcción básicos del marco angular son componentes angulares que están organizados en NgModules.

    ----> NgModules recopila código relacionado en conjuntos funcionales. 

    ----> Una App angular esta definida por un conjunto de NgModules.

    ----> Una App siempre tiene al menos un módulo raíz que permita inicializar y por lo general, mucho más modulos de funciones.

    Conocimiento básico: 
        -> Modulos
        -> Componentes
        -> Servicios

    Otros conceptos:
        -> Routing
        -> Schematic
        -> Directivas  
        -> Formularios
        -> Patrones de diseño  

8.- CONCEPTOS CLAVE: 
    --La estructura de Módulos. *bOrganización de los Componentes.

    --Librerías personalizadas (Rehusar algún componente o servicio a través de toda la aplicación o    entre aplicaciones).
    
    --Técnicas de comunicación entre componentes.

    --RxJS(librería para componer programas asincrónos basados en eventos) (Observables).

    --State Management o Administración del estado.

    --Decoradores personalizados, Pipes, entre otros.‌

