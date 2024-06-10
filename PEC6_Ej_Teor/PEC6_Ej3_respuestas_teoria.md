


# a) ¿Qué son los interceptores?

    Los interceptores son herramientas que actúan como filtros para las solicitudes que reciben y las respuestas HTTP. Estos actúan como intermediarios, los cuales pueden añadir, eliminar o editar la información antes de que las solicitudes se envíen al servidor y también pueden hacerlo con las respuestas, antes de que lleguen a la aplicación. Se configuran en el módulo de la aplicación y pueden ejecutarse múltiples veces antes de que la solicitud o la respuesta llegue al destino final.

# b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:

    - `this.searchSubject`: Se emitirán eventos cada vez que se realice una nueva búsqueda.
    - `.startWith(this.searchTerm)`: Emitirá el valor inicial `this.searchTerm` antes del inicio de la emisión de valores del sujeto.
    - `.debounceTime(300)`: Retrasará la emisión de los valores que han sido emitidos por el sujeto durante 300 milisegundos.
    - `.distinctUntilChanged()`: Garantiza que solo se emita un valor si no es igual al valor anterior, evitando duplicados.
    - `.merge(this.reloadProductsList)`: Realiza dos acciones simultáneamente: las búsquedas que realiza el usuario y recarga la lista completa de los resultados de esa búsqueda.
    - `.switchMap((query) => this.wineService.getWine(this.searchTerm))`: Procesa las solicitudes de búsqueda del usuario (la búsqueda más reciente), garantizando que se muestren los resultados en función de la última búsqueda realizada por el usuario.

Este código sería útil principalmente en aplicaciones que requieran una búsqueda en tiempo real, con el objetivo de optimizar las solicitudes al servidor y mejorar la experiencia del usuario.



