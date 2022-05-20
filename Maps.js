function getAdmins(map) {
    let Admins = []
    for([key, value] of map) {
        if(value === 'Admin') {
            Admins.push(key);

        }
    }

    return Admins

}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Marcos', 'User');
usuarios.set('Paulo', 'Admin');
usuarios.set('Lumena', 'User');
usuarios.set('Lucas', 'Admin');

console.log(getAdmins(usuarios));