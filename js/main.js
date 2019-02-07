// Get a reference to the database service
var database = firebase.database();


mounted() {

    var query = database.ref('produse/'+ numeProdus +'/'); // shortened

    query.once('value').then((snapshot) => {

            this.productName = snapshot.child('productName').val();
    });
};

function showStock(){
    document.getElementById('stockForm').style.display ='block';
    document.getElementById('personalForm').style.display = 'none';
}

function showPersonal(){
    document.getElementById('personalForm').style.display = 'block';
    document.getElementById('stockForm').style.display ='none';
}
