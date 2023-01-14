
import './toDoList.css'

const ToDoList = () => {
    const todoItems = [
        "Get Car from service",
        "Fill Fuel",
        "Prep on JavaScript", 
        "Have lunch and work"
    ];
    const tableRows = todoItems.map((toDoItem) => {
        return <tr key={toDoItem}>
            <td><input type="checkbox" name="color" id="red" value="#F00" /></td>
             <td> {toDoItem} </td>
             
        </tr>
    })
    console.log("The table rows are :: "+tableRows);

  return <div>
    <table class="todo-table">
        <thead>
        <tr>
            <th> Status </th>
            <th> Task Name</th>
        </tr>
        </thead>
       <tbody>
       {
            tableRows
        }
       </tbody>
        
        
      
    </table>

</div>
}

export default ToDoList;