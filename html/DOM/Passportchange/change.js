function find_edit(){
    const secondName_node = document.getElementById('secondName')
    console.log(secondName_node.innerText)
    secondName_node.innerHTML="<b>Borisanova</b>"

const firstName_node = document.getElementById('firstName')
    console.log(firstName_node.innerText)
    firstName_node.innerHTML="<b>Arina</b>"
}
const node_for_click = document.getElementById("click")
node_for_click.addEventListener("click",find_edit)
