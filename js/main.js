let btnHtml = document.querySelector(".html-btn")
let btnCss = document.querySelector(".css-btn")
let btnJs = document.querySelector(".js-btn")

btnHtml.addEventListener("click", function() {
    alert("HTML")
    console.log(prompt("Agar htmlga 'h7' tegi yordamida text yozsak natijada nima kelib chiqadi?"))
    console.log(prompt("'ul' va 'ol'ning farqlarini yozing"))
    console.log(prompt("Biz 'li' ichida 'div' ishlata olamizmi?"))
    console.log(prompt("'li' tegining atribulari nechta turga bo'linadi?"))
    console.log(prompt("'class' va 'id'larni farqlari nimada?"))
})

btnCss.addEventListener("click", function() {
    alert("CSS")
    console.log(prompt("'margin' va 'padding'ni farqi nimada?"))
    console.log(prompt("'container' nima?"))
    console.log(prompt("'before' va 'after' haqida nimalar bilasiz?"))
    console.log(prompt("'a' va 'button'ning farqi nimada?"))
    console.log(prompt("display 'inline' va 'block'larning farqi nimada?"))
    })

btnJs.addEventListener("click", function() {
    alert("JS")
    console.log(prompt("'let'ni reasign qilsa bo'ladimi?"))
    console.log(prompt("JavaScript qaysi til turiga kiradi 'Interpreter' yoki 'Compiler'"))
    console.log(prompt("'CallStack'ning vazifasi nimadan iborat?"))
    console.log(prompt("'Datatype' nechta turga bo'linadi?"))
    console.log(prompt("'AcmaScript' nima?"))
    })