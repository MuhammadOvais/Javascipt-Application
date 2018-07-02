var name = document.getElementById('name');
var personList = document.getElementById('personList');
var counter=0;

function add() {
    var inputname = document.getElementById('name').value;
    
    var html= '<div class="row" id="name'+counter+'">'+
                        '<div class="col-md-6">'+
                        '<input type="text" class="form-control" value="'+inputname+'" disabled>'+
                        '</div>'+
                        '<div class="col-md-2">'+
                        '<button type="button" class="btn btn-success" onclick="save(this.id)" id="save'+counter+'">Save</button>'+
                        '</div>'+
                        '<div class="col-md-2">'+
                        '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
                        '</div>'+
                        '<div class="col-md-2">'+
                         '<button type="button" class="btn btn-danger" onclick="deleted(this.id)" id="deleted'+counter+'">Delete</button>'+
                        '</div>'+
                    '</div>'+
                    '<br>';
    
   document.getElementById('personList').insertAdjacentHTML('beforeend', html);
   counter++;
}

function update(updateId){
    var parent = document.getElementById(updateId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.removeAttribute('disabled');
}

function save(saveId){
    var parent = document.getElementById(saveId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.setAttribute("disabled",'disabled');
} 

function deleted(deleteId){
    var parent = document.getElementById(deleteId).parentNode.parentNode;
    parent.remove();
} 
