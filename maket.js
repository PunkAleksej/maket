//Напишите функцию, которая принимает объект пользователя (пример: { id: 1, email: some@email.com, firstName: 'John', lastName: 'Doe' }). 
//Поля firstName и lastName - опциональные (может быть null вместо строки), id и email соответсвенно обязательные и их не может не быть.
//Функция должна вернуть полное имя пользователя. Если его создать нельзя (отсутствуют поля firstName и lastName), то вернуть email пользователя.


let user1= { 
    id: 1, 
    email: 'some@email.com', 

}

let user2= { 
    id: 2, 
    email: 'some@email.com', 
    lastName: 'Doe',
    firstName: 'joni' 
}

let user3= { 

    email: 'some@email.com', 
 
    lastName: 'Doe' 
}



function showUserInfo (user) {
    
    if (user.firstName && user.lastName ) {
        return (`${user.firstName} ${user.lastName}`)
    }

    if (user.firstName) {
        return (user.firstName)
    }

    if (user.lastName) {
        return (user.lastName)
    }

    return user.email
    
}


console.log(showUserInfo(user1))
console.log(showUserInfo(user2))
console.log(showUserInfo(user3))
