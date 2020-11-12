
const dbConn = require('../config/db.config');

// Employee object create
const Employee = function(employee) {
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.email          = employee.email;
    this.phone          = employee.phone;
    this.organization   = employee.organization;
    this.designation    = employee.designation;
    this.salary         = employee.salary;
    this.status         = employee.status ? employee.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
}

Employee.findAll = function(result) {
    dbConn.query('SELECT * FROM employees', function(err, res) {
        if(err) {
            console.log('error: ', err);
            result(null, err);
        }
        else {
            console.log('employees: ', res);
            result(null, res);
        }
    });
}

Employee.findById = function(id, result) {

    dbConn.query('SELECT * FROM employees WHERE id = ? ', id, function(err, res) {
        if(err) {
            result(null, err);
        }
        result(null, res);
    });
}

Employee.create = function(newEmployee, result) {
    dbConn.query('INSERT INTO employees set ?', newEmployee, function(err, res) {
        if(err) {
            // console.log("error: ", err);
            result(err, null);
        }
        else {
            // console.log(res.insertId);
            result(null, newEmployee);
        }
    });
}

Employee.update = function(id, employee, result) {
    dbConn.query('UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id=?', 
    [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id],
    function(err, res) {
        if(err) {
            console.log('error: ', err);
            result(null, err);
        }
        else {
            result(null, employee);
        }
    });
}

Employee.delete = function(id, result) {
    dbConn.query('DELETE FROM employees WHERE id=?', [id], function(err, res) {
        if(err) {
            console.log('Error: ', err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Employee;

