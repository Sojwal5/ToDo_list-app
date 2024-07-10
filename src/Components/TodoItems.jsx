function TodoItems({TodoName,TodoDate}){
    return(
      <div class="container ">
            <div class="row kg-row">
              <div class="col-6">{TodoName}</div>
              <div class="col-4">{TodoDate}</div>
              <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
           </div>
       </div>
    );
}

export default TodoItems;