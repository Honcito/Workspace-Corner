const db = require("../models");
const Employee = db.employees;
const bcrypt = require('bcrypt');

// Create and Save a new employee.
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty! 'name', 'email' and 'password' are required."
        });
        return;
    }

    // Cypher password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // Create an employee
    const employee = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword, // Guardar la contraseña cifrada
        role: req.body.role || "employee"
    };

    // Save Employee in the database
    Employee.create(employee)
        .then(() => {
            return Employee.findAll(); // Recuperar todos los empleados después de la creación
        })
        .then(allEmployees => {
            res.status(201).json(allEmployees); // Devuelve la lista de empleados
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the employee."
            });
        });
}; // Cierre de la función create

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    Employee.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occurred while retrieving employees."
            });
        });
};

// Find a single employee with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Employee with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Employee with id=" + id
            });
        });
};

// Update an Employee by the id in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Employee was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Employee with id=" + id
            });
        });
};

// Delete a Employee with the specified id in the request.
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Employee was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Employee with id=" + id
            });
        });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
    Employee.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Employees were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete all Employees."
            });
        });
};
