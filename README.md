Realizado con:        angular, solo front-end.
Desplegado en:        firebase (gratis).
Dominio comprado en:  namecheap (12€). --> https://puliservicios.com/

Al editar:
1. git pull
2. cambiar lo que quieras
3. ng build
4. firebase deploy ('npm install -g firebase-tools' y 'firebase login' antes si no lo tengo)
5. git add .
6. git commit -m "lo que sea"
7. git push

* ng serve para desplegar en local

Si es una instalación nueva hay que hacer un npm install para que descargue las dependencias sin problemas
Si al hacer el ng build da problemas hay que instalar esta dependencia manualmente:
npm install @angular-devkit/build-angular@0.901.9

La versión de angular que hay que tener instalada es la 9.0.6
npm install -g @angular/cli@9.0.6
