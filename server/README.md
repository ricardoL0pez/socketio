Instalar paquete localmente:

En lugar de instalar nodemon globalmente, instalarla localmente en el proyecto específico. Esto no requerirá permisos de administrador y es generalmente la mejor práctica.

Instalacion de npm install nodemon --save-dev

npm install sass --save-dev


const http = require('http');
File is a CommonJS module; it may be converted to an ES module.ts(80001)
var require: NodeRequire
(id: string) => any (+3 overloads)

Este mensaje indica que estás utilizando TypeScript y estás importando un archivo que TypeScript considera como un módulo CommonJS en lugar de un módulo ES (ECMAScript) estándar.

En TypeScript, hay dos sistemas de módulos principales: CommonJS y ES modules (ESM). CommonJS es el sistema de módulos utilizado en Node.js, mientras que los módulos ES son el estándar oficial de JavaScript. Aunque ambos sistemas de módulos tienen funcionalidades similares, hay algunas diferencias importantes entre ellos.

El mensaje que has recibido es una advertencia que sugiere que el archivo que estás importando utiliza la sintaxis de CommonJS. Esto puede causar problemas si estás intentando utilizar el código en un contexto donde se esperan módulos ES, como en un entorno de frontend moderno o cuando estás trabajando con herramientas de construcción que esperan módulos ES.

La sugerencia es que consideres convertir el archivo a un módulo ES si es posible. Para hacer esto, puedes utilizar la palabra clave `export` en lugar de `module.exports` o `exports` al exportar funciones, variables o clases. También puedes utilizar la extensión `.mjs` en lugar de `.js` para indicar que el archivo es un módulo ES.

Por ejemplo, si tienes un archivo `example.js` que se ve así en CommonJS:

```javascript
// example.js
module.exports = {
  foo: 'bar'
};
```

Puedes convertirlo a un módulo ES de la siguiente manera:

```javascript
// example.mjs
export const foo = 'bar';
```

Sin embargo, ten en cuenta que la compatibilidad con módulos ES en Node.js todavía está en desarrollo en algunos aspectos, y puede haber casos en los que necesites utilizar módulos CommonJS por razones de compatibilidad o funcionalidad específica. En esos casos, puedes ignorar esta advertencia o desactivarla si lo deseas.