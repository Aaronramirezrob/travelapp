# PREGUNTAS DE ENTREVISTA DE ANGULAR
.
.
.
**¿QUÉ SON LAS SPA**
    Single page aplication o por sus acrónimo SPA, es una apliación web dinámica que se actualiza sin tener que refrescar el navegador. Eso al usuario le da una sensación de rapidez. En una SPA tanto JS, HTML Y CSS SE CARGAN UNA SOLA VEZ.

    Ej: GMAIL.

**QUE ES EL ANGULAR CLI?**
    El CLI de Angular es una herramienta de línea de comandos que se utiliza para inicializar, desarrollar, estructurar y mantener aplicaciones de Angular directamente desde la terminal.

**QUE ES UN DECORADOR?** 
    Son funciones que se utilizan para agregar metadatos a una clase, propiedad o método.

**¿QUÉ ES DATA BINDING?**
    Es la comunicación entre nuestro DOM y la lógica del componente.

**QUE ES UN COMPONENTE**
    Son pequeñas partes lógicas de la app que van a representar a una parte de la interfaz que van a estar soportadas por una clase

**QUE ES UNA DIRECTIVA/PIPE/MODULO**
##    ## Directiva
        Son las funciones que se ejecutarán cada vez que el compilador las encuentre. Mejoran los elementos html al adjuntar comportamientos personalizados al DOM. Se clasifican en tres categorías:
            -Directivas de atributo: Responsables de manipular la apariencia y el comportamiento de los elementos DOM (NgStyle, NgClass, etc).

            -Directivas estructurales: encargadas de cambiar la estructura del DOM, agregan o eliminan elementos del DOM. (NgIf, NgFor, NgSwitch)

            -Componentes: Tiene plantillas y es una versión más limpia de la directiva.
##    ## Pipe
        Herramienta que nos permite modificar o transformar la información presentada en pantalla.

##    ## Modulo
        Angular tiene su propio sistema de modularidad llamado NgModules. Son basicamente bloques de codigo dedicado a un dominio de aplicación, flujo de trabajo o conjunto de capacidades estrechamente relacionadas. Los modulos puede contener componentes, proveedores de servicios entre otros. 

**¿CÓMO CREAR UNA RUTA EN ANGULAR?**
    Utiliando el angular CLI. inicializamos un proyecto o agregamos componentes a un proyecto ya creado en nuestro app.modules importamos RouterModule from "@angular/router" agregamos al NgModules dentro de los imports nuestro Routermodule.forRoot([]) creamos los objetos con el contenido de path y component.
**¿QUE SON LOS SERVICIOS Y PARA QUE SIRVEN?**
    Según la documentación los servicios son una categoría amplia que abarca cualquier valor, función o característica que necesite un aplicación. Tipicamente es una clase con un propósito limitado y bien definido. Sirven para aumentar la modularidad y la reutilización.
**¿QUE SON LOS INTERCEPTORES?**
    Es una clase que se utiliza para interceptar solicitudes HTTP y respuestas HTTP
**¿COMO CONSUMES SERVICIOS EN ANGULAR?**
    con un modulo @injectable = injector, Puede ser inyectado al constructor del componente y se agrega el selector, template y style
**¿CUALES SON LOS CICLOS DE VIDA DE UN COMPONENTE?**
    -Lifecycle hook event:
            -Constructor
                -Ng(OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OndDestroy)
**PRINCIPIOS SOLID**
    ¿Qué es SOLID? 
    Es un acrónimo donde cada letra representa un principio para diseñar en POO. Aunque también se ha adaptado para llevarlo a otros tipos de software como por ejemplo componetización con frameworks o librerías. 

        •	SINGLE RESPONSIBILITY PRINCIPLE: cada clase debe tener una sola responsabilidad. Pensar también en componentes, funciones, etc. 

        •	OPEN-CLOSED PRINCIPLE: Abierto para extensiones cerrado para modificaciones (agregar nuevas funcionalidades sin cambiar el código existente)

        •	LISKOV SUBSTITUTION PRINCIPLE: Nos comenta que si en alguna parte del código estamos usando una clase y esta es extendida tendríamos que poder utilizar cualquiera de las clases hijas y que el programa siga siendo válido sin alterar el comportamiento del padre

        •	INTERFACE SEGREGATION PRINCIPLE: Los clientes(componentes) no deberían depender de interfaces que no necesitan.

        •	DEPENDENCY INVERSION PRINCIPLE: nuestros componentes, clases, funciones deberían depender de abstracciones y no de implementaciones concretas.