let grade = prompt("اكتب درجتك بالأرقام")

console.log(grade)

if (grade>=90) {
    alert("لقد حصلت على امتياز 🥳")
    console.log("%c لقد حصلت على امتياز 🥳","background: #FF0000")
}
else if (grade>=80) {
    alert("لقد حصلت على جيد جداً🤩")
    console.log("%c لقد حصلت على جيد جداً🤩","background: #FF0000")
}
else if (grade>=70) {
    alert("لقد حصلت على جيد🙂")
    console.log("%c لقد حصلت على جيد🙂","background: #FF0000")
}
else if (grade>=60) {
    alert("لقد حصلت على مقبول😕")
    console.log("%c لقد حصلت على مقبول😕","background: #FF0000")
}
else if (grade>=50) {
    alert("لقد حصلت على ضعيف☹️")
    console.log("%c لقد حصلت على ضعيف☹️","background: #FF0000")
}
else if (grade<50) {
    alert("راسب💔")
    console.log("%c راسب💔","background: #FF0000")
}

//جافاسكربت ليست جافا