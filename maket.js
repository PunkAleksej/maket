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
let x = document.div

console.log(x)
// прятать блок при нажатии кнопки
//document.getElementById('id').onclick = function() {
//      document.getElementById('target').hidden = true;
//}

//<input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать">
querySelector   
querySelectorAll   
getElementById  
getElementsByName   
getElementsByTagName   
getElementsByClassName

closest

Element – это базовый класс для DOM-элементов. 
Он обеспечивает навигацию на уровне элементов: 
nextElementSibling, children и методы поиска: getElementsByTagName, querySelector.


innerHTML  Внутреннее HTML-содержимое узла-элемента. Можно изменять

hidden Когда значение установлено в true, делает то же самое, что и CSS display:none.

elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.
elem.attributes – это коллекция всех атрибутов.


document.createElement(tag) – создаёт элемент с заданным тегом,
elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth


let x = getComputedStyle(element) // свойства css
console.log(x.marginTop)  // 5px
console.log(x.color)  // rgb(255, 0, 0)