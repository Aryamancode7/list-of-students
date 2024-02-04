 list_of_students=[]
function submit(){
    var name_one=document.getElementById("student_1").value
    var name_2=document.getElementById("student_2").value
    var name_3=document.getElementById("student_3").value
    var name_4=document.getElementById("student_4").value
    list_of_students.push(name_one)
    list_of_students.push(name_2)
    list_of_students.push(name_3)
    list_of_students.push(name_4)
    console.log(list_of_students)
    document.getElementById("display_name").innerHTML=list_of_students
    document.getElementById("submit_btn").style.display="none"
    document.getElementById("sort_btn").style.display="inline-block"
}
function sorting(){
    list_of_students.sort()
    document.getElementById("display_name").innerHTML=list_of_students
}