const { DataTypes } = require('sequelize'); // Importar DataTypes

module.exports = (sequelize) => { // Eliminar Sequelize, solo usar sequelize
    const Employee = sequelize.define("Employee", {
        name: {
            type: DataTypes.STRING, // Usar DataTypes
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true // Validar el formato del email
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false // Asegúrate de que el campo de contraseña no sea nulo
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "employee" // Rol por defecto "empleado"
        }
    }, {
        timestamps: true, // Agrega las columnas createdAt y updatedAt automáticamente
        tableName: "employees" // Nombre de la tabla
    });

    return Employee; // Retornar el modelo
}

// Exportar el modelo
//module.exports = Employee; // Esta línea debe estar al final
