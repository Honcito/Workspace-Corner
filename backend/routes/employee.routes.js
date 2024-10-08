module.exports = app => {
    const employees = require("../controllers/employee.controller.js");

    var router = require("express").Router();

    // Crear un nuevo Empleado.
    router.post("/", employees.create);

    // Recuperar todos los Empleados.
    router.get("/", employees.findAll);

    // Recuperar un Empleado con id.
    router.get("/:id", employees.findOne);

    // Actualizar un Empleado con id.
    router.put("/:id", employees.update);

    // Eliminar un Empleado con id.
    router.delete("/:id", employees.delete);

    // Eliminar todos los Empleados.
    router.delete("/", employees.deleteAll);

    // Prefijo para todas las rutas.
    app.use("/api/employees", router); // Asegúrate de que la ruta esté entre comillas y añade la coma
};
