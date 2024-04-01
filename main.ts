#! /usr/bin/env node
import inquirer from "inquirer";
//inquirer  done
//arrays    done
//functions
//operators

let todos :string[] = ["asjid","bilal"];
async function createTodo(todos:string[]){
    do{
          let answer=await inquirer.prompt({
                type:"list",
                name:"select",
                message:"selet an operation",
                choices:["Add","update","view","delete"],
});
if(answer.select == "Add"){
    let addTodo = await inquirer.prompt({
        type:"input",
        name:"todo",
        message:"Add items in the list",

    });
    todos.push(addTodo.todo);
    //console.log(todos);
    todos.forEach(todo => console.log(todo));
}
if(answer.select == "update"){
    let updateTodo = await inquirer.prompt({
        type:"list",
        name:"todo",
        message:"Update items in the list",
        choices:todos.map(item => item)

    });

        let addTodo = await inquirer.prompt({
            type:"input",
            name:"todo",
            message:"Add items in the list",
    
        });
        let newTodo = todos.filter(val => val !==updateTodo.todo);
        todos=[...newTodo,addTodo.todo];
        console.log(todos);
        
    }



if(answer.select == "view"){

    console.log("*****TO DO LIST *****");
 console.log("*********************");
    
}
if(answer.select == "delete"){
    let deleteTodo = await inquirer.prompt({
        type:"list",
        name:"todo",
        message:"Update items in the list",
        choices:todos.map(item => item)

    });
    let newTodo = todos.filter(val => val !==deleteTodo.todo);
    todos=[...newTodo];
    console.log(todos);
        
}
    } while(true);
          
}
console.log(todos);

createTodo(todos);

// if(answer.select == "delete"){}
