function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

function meFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("meTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function youFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("youTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//for world



function fun(){
    fetch('/covidata').then((response)=>{
        response.json().then((data)=>{
        
          
        var myTable=document.getElementById("myTable");

        for(var i=1;i<=226;i++)
        {
          var x=myTable.insertRow(i);
          
          x.insertCell(0);
          myTable.rows[i].cells[0].innerHTML=data.response[i-1].country;
          
          x.insertCell(1);
          myTable.rows[i].cells[1].innerHTML=data.response[i-1].cases.total;
    
          x.insertCell(2);
          myTable.rows[i].cells[2].innerHTML=data.response[i-1].cases.recovered;
          
          x.insertCell(3);
          myTable.rows[i].cells[3].innerHTML=data.response[i-1].cases.active;
        
          x.insertCell(4);
          myTable.rows[i].cells[4].innerHTML=data.response[i-1].deaths.total;
    
        }



        })
    })
    

};


//for india

function joke(){
  fetch('/indiadata').then((response)=>{
      response.json().then((data)=>{
      
        
      var myTable=document.getElementById("meTable");

      for(var i=1;i<=36;i++)
      {
        var x=myTable.insertRow(i);
        
        x.insertCell(0);
        myTable.rows[i].cells[0].innerHTML=data.statewise[i].state;
        
        x.insertCell(1);
        myTable.rows[i].cells[1].innerHTML=data.statewise[i].confirmed;
  
        x.insertCell(2);
        myTable.rows[i].cells[2].innerHTML=data.statewise[i].recovered;
        
        x.insertCell(3);
        myTable.rows[i].cells[3].innerHTML=data.statewise[i].active;
      
        x.insertCell(4);
        myTable.rows[i].cells[4].innerHTML=data.statewise[i].deaths;
        
      }



      })
  })
  

}


//for rajasthan


function funny(){
  fetch('/rajasthandata').then((response)=>{
      response.json().then((data)=>{
      
        
      var myTable=document.getElementById("youTable");

      for(var i=1;i<=65;i++)
      {
        var x=myTable.insertRow(i);
        
        x.insertCell(0);
        myTable.rows[i].cells[0].innerHTML=data[30].districtData[i+2].district;
        
        x.insertCell(1);
        myTable.rows[i].cells[1].innerHTML=data[30].districtData[i+2].confirmed;
  
        x.insertCell(2);
        myTable.rows[i].cells[2].innerHTML=data[30].districtData[i+2].recovered;
        
        x.insertCell(3);
        myTable.rows[i].cells[3].innerHTML=data[30].districtData[i+2].active;
      
        x.insertCell(4);
        myTable.rows[i].cells[4].innerHTML=data[30].districtData[i+2].deceased;
        
      }



      })
  })
  

}