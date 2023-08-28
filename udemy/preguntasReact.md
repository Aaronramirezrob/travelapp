# PRINCIPIOS DEL FRONTEND DEVELOPER
Encargado de crear la experiencia e interfaz con la que interactúa el cliente. Además de llevar el diseño de una aplicación a código que puede ser usada mediante una interfaz por los usuarios.

**  **Conocimientos técnicos**
    HTML (lenguaje de etiquetas de hipertexto) => lenguaje de marcado & CSS (Hoja de estilo en cascada) => lenguaje de estilos

    JavaScript: Lenguaje de programación ligero que puede ser interpretado por el navegador

    Manipulación del DOM (representación de los elementos que vemos en pantalla)

**  **ASINCRONISMO**
    Estas son tareas que al ser ejecutadas pueden ser completadas en el momento o en el futuro y que su comportamiento es no bloqueante.

**  **SINCRONO**
     UN SOLO PROCESO DE MANERA SIMULTANEA 

**  **ESTANDAR ECMASCRIPT**
    ACTUALIZACIONES ANUALES PARA NUEVAS FUNCIONALIDADES.

**  **LIBRERÍAS O FRAMEWORKS**
    REACT, ANGULAR, VUE, SVELTE.

**  **PREPROCESADORES**
     FACILITAR DESARROLLO DE ESTILOS (SASS, LESS, STYLUS)


**  **EMPAQUETADORES Y TRANSPILADORES**
    WEBPACK, VITE, ROLLUP, PARSER. CONSISTEN EN UN SET DE CONFIGURACIONES QUE HACEN QUE EL CÓDIGO PUEDA SER EMPAQUETADO Y LISTO PARA QUE PUEDA SER LEÍDO POR EL NAVEGADOR.

**  **TRANSPILADOR (BABEL)**
     PUEDE HACER QUE EL CODIGO Y FUNCIONALIDADES DE JAVASCRIPT MODERNO LO PUEDAN ENTENDER TODOS LOS NAVEGADORES.

**  **FRAMEWORK O LIBRERÍA DE CSS**
    LOS UTILIZAMOS EN NUESTROS PROYECTOS CUANDO QUEREMOS HACER USO DE ESTILOS A TRAVÉS DE CLASES REUSABLES. (TAILWIND)

**  **TESTING**
    UNIT TEST: se puede definir, como principalmente trozos de código diseñados para comprobar que el código principal está funcionando como esperábamos. Estas pruebas forman parte de los diferentes procedimientos que podemos llevar a cabo en una metodología ágil.

**  **PRINCIPIOS SOLID**
    ¿Qué es SOLID? 
    Es un acrónimo donde cada letra representa un principio para diseñar en POO. Aunque también se ha adaptado para llevarlo a otros tipos de software como por ejemplo componetización con frameworks o librerías. 

        •	SINGLE RESPONSIBILITY PRINCIPLE: cada clase debe tener una sola responsabilidad. Pensar también en componentes, funciones, etc. 

        •	OPEN-CLOSED PRINCIPLE: Abierto para extensiones cerrado para modificaciones (agregar nuevas funcionalidades sin cambiar el código existente)

        •	LISKOV SUBSTITUTION PRINCIPLE: Nos comenta que si en alguna parte del código estamos usando una clase y esta es extendida tendríamos que poder utilizar cualquiera de las clases hijas y que el programa siga siendo válido sin alterar el comportamiento del padre

        •	INTERFACE SEGREGATION PRINCIPLE: Los clientes(componentes) no deberían depender de interfaces que no necesitan.

        •	DEPENDENCY INVERSION PRINCIPLE: nuestros componentes, clases, funciones deberían depender de abstracciones y no de implementaciones concretas.

**   **SCOPES**
     el alcance que una variable tendrá en el código.

        •	Scope global: Se dice que una variable esta en el scope global cuando está declarada fuera de una función o de un bloque. Conocidas también como variables globales. Se puede acceder a este tipo de variables desde cualquier parte del código.

        •	Scope local: Cuando puedes acceder a una variable únicamente en cierta parte del código. Variables locales. Solo puedes acceder a ellas llamando a la función en la cual está la variable.
        

**   **RECURSIVIDAD**
     Proceso que se define en términos de si mismo. Función que se llama a si misma de manera directa o indirecta.


**   **CLOUSURES**
     un clousure es una funcion que encapsula una serie de variables y definiciones locales que unicamente serán accesibles con el operador return.

**   **HOISTING**
     CUANDO SE ALZAN LAS DECLARACIONES A LA PARTE SUPERIOR DEL SCOPE ANTES DE LA EJECUCIÓN.

**   **DIFERENCIA ENTRE FUNCIÓN (VALOR DE RETORNO) Y METODO (EJECUCIÓN)**

        •	FUNCIÓN: Tiene un valor de retorno por si solo. 

        •	METODO: un método es una función que está asignada a la propiedad de un objeto o de una clase. Desde el método se puede hacer referencia a las propiedades de los objetos en los que están definidas.

**  **POO**
    paradigma de programación, se basa en el concepto de clases y objetos. Se utiliza para estructurar un programa de software en piezas simples y reutilizables de clases para crear instancias individuales de objetos. Permite que el código sea reutilizable, organizado y fácil de mantener.

**  **POLIMORFISMO**
    método que entrega los datos según quien lo invoque. Resultados diferentes dependiendo quien lo llama.

    • HERENCIA: hereda métodos de la clase padre

    • ABSTRACCIÓN: Aislar un elemento de su contexto. Para poder enfocarnos en los detalles mas importantes

    • ENCAPSULACIÓN: nos permite conservar declaraciones publicas o privadas en un mismo objeto


**  **CONCEPTO DE CLEAN ARCHITECTURE**
    conjunto de principios cuya finalidad principal es ocultar los detalles de implementación a la lógica de dominio de la aplicación. Conseguimos tener una lógica mantenible y escalable en el tiempo.

    Regla de dependencia: nos dice que un circulo interior nunca debe conocer nada sobre un circulo exterior. Sin embargo, los círculos exteriores si pueden conocer círculos interiores.
        Se divide en las siguientes capas: 

        •	Entidades
        •	Casos de uso
        •	Adaptadores
        •	Frameworks y drivers

    
**   **Ciclo de vida**
     métodos que se ejecutan automáticamente en un Componente de clase, ocurre en tres fases: 
        1.	Montaje
        2.	Actualización
        3.	Desmontaje

**DIFERENCIA ENTRE PROPS Y STATE**

PROPS: COMPONENTES QUE SE UTILIZAN EN LA APLICACIÓN. SE PUEDEN DEFINIR COMO LOS ATRIBUTOS DE CONFIGURACION PARA DICHOS COMPONENTES. SON RECIBIDOS DESDE UN NIVEL SUPERIOR Y POR DEFINICIÓN SON INMUTABLES, ES DECIR, UN COMPONENTE NO PUEDE CAMBIAR SUS PROPIAS PROPS.

STATE: UNA REPRESENTACIÓN DEL COMPONENTE EN UN PUNTO DEL TIEMPO. SE PUEDE INICIAR CON UN VALOR POR DEFECTO PERO SI PUEDE MUTAR DURANTE LA VIDA DEL COMPONENTE.