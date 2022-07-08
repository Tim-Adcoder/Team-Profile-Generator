const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John', '003', 'John@email.com', 'Jogn');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('003');
    expect(engineer.email).toBe('John@gmail.com');
    expect(engineer.githubUsername).toBe('Jogn');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('John');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('003');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('john@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Jogn');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});