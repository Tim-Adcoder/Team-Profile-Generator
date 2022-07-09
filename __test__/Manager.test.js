const Manager = require('../lib/Manager');
const manager = new Manager('Tim','001','Tim-Adcoder@email.com');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Tim');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('Tim-Adcoder@gmail.com');
    expect(manager.officeNumber).toBe('1111');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Tim');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('001');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('Tim-Adcoder@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1111');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});