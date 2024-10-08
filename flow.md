#flow
npm install -g @ionic/cli
ionic start frontend blank --capacitor --type=angular
cd frontend
ionic serve

#Conectar al móvil fisícamente
ionic build
ionic cap add android
ionic cap open android

#Si se realizan cambios en la app
ionic build
ionic cap copy
ionic cap sync

----------------------------------------

Crear directorio backend
abrir otro terminal en cd.. backend

npm init
npm install express

----------------------------------------

Crear index.js y modificar su contenido
node index.js

----------------------------------------

Instalar sequelize y mysql2
npm install sequelize mysql2

crear config->db.config.js

crear models->index.js

añadir al index.js principal la implementación de Sequelize

crear el modelo de employee


crear .env en la raiz de backend



----------------------------------------------------
FRONTEND

crear la página de empleados
ionic generate page employees

crear servicios
ionic generate service services/employee

----------------------------------------------------
BACKEND
instalar cors
npm install cors

----------------------------------------------------
FRONTEND
crear el formulario de creación de empleados
ionic generate page create-employees

BACKEND
instalar bcrypt
npm install bcrypt