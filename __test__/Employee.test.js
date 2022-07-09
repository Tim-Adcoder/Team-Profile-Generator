const Employee = require('../lib/Employee');
const employee = new Employee('Tim',001,'Tim-Adcoder@email.com');

test('test if we can get constructor values for the employee object', () => {
    expect(employee.name).toBe('Tim');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('Tim-Adcoder@email.com');
});

test('test if we can get the id from the getName() method', () => {
    expect(employee.getName()).toBe('joelle');
});

test('test if we can get id from the getId() method', () =>{
    expect(employee.getId()).toBe('001');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Tim-Adcoder@email.com')});

test('test if we can get the role from the getRole() method', () => {
        expect(employee.getRole()).toBe('Employee');
});
