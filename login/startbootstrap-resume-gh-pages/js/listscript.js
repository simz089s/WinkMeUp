// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("shoplist");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.setAttribute("id", i); // JZ TEST ADDED
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
	  
	 //alert(this.id); //test
	 
	 // -------------- SENDING DATA (item added) from js to php (get_shopitem.php) --------------
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 var urltmp = window.location.href; // getting current url
	 var index = this.id; // getting index from id of clicked item
	 var httpc = new XMLHttpRequest();
	 if (urltmp == "http://localhost/jztesting/pages/shoplists.php?user=" + tmp[1]){
		var url = "delete_shopitem.php";
	 }else if (urltmp == "http://localhost/jztesting/pages/expense.php?user=" + tmp[1]){
		var url = "delete_expitem.php";
	 }else if (urltmp == "http://localhost/jztesting/pages/healthy.php?user=" + tmp[1]){
		 var url = "delete_healthitem.php";
	 }else if (urltmp == "http://localhost/jztesting/pages/planner.php?user=" + tmp[1]){
		 var url = "delete_planitem.php";
	 }
	 
	 
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 //tmp = window.location.search.substr(1).split("="); // commented out
	 if (urltmp == "http://localhost/jztesting/pages/shoplists.php?user=" + tmp[1]){
		 httpc.send("shopindex=".concat(index).concat("&username=").concat(tmp[1]));
	 }else if (urltmp == "http://localhost/jztesting/pages/expense.php?user=" + tmp[1]){
		 httpc.send("expindex=".concat(index).concat("&username=").concat(tmp[1]));
	 }else if (urltmp == "http://localhost/jztesting/pages/healthy.php?user=" + tmp[1]){
		 httpc.send("healthindex=".concat(index).concat("&username=").concat(tmp[1]));
	 }else if (urltmp == "http://localhost/jztesting/pages/planner.php?user=" + tmp[1]){
		 httpc.send("planindex=".concat(index).concat("&username=").concat(tmp[1]));
	 }
	 // -------------------------------------------------------------
	 var div = this.parentElement;
    div.style.display = "none";
	 window.setTimeout(reload, 300);// jz tested: reload page to refresh index
	 //location.reload(); // jz tested: reload page to refresh index (too fast for data process)
  }
}

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle("shoplist", "checked");
  }
}, false);*/

// Create a new list item when clicking on the "ADD" button
function newElement() {
  var li = document.createElement("li");
  li.className = "shoplist";
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
	 
	 // -------------- SENDING DATA (item added) from js to php (get_shopitem.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_shopitem.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("=");
	 httpc.send("item=".concat(inputValue).concat("&username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  window.setTimeout(reload, 300);// jz tested: reload page to refresh index
  //location.reload(); // jz tested: reload page to refresh index
}

function reload(){// jz tested: reload page to refresh index
	location.reload();
}

//
//
// EXPENSE LIST PAGE MANAGEMENT
//
//

// Create a new list bill when clicking on the "ADD" button

function newExpense() {
  var li = document.createElement("li");
  li.className = "shoplist";
  var inputValue = document.getElementById("myExpenseBill").value;
  var inputValue2 = document.getElementById("myExpenseAmt").value;
  var t = document.createTextNode(inputValue.concat(" (", inputValue2, "$)"));
  li.appendChild(t);
  if (inputValue === '' || inputValue2 === '' || isNaN(inputValue2)) {
    alert("Missing or invalid input!");
  } else {
    document.getElementById("myUL").appendChild(li);
	 
	 
	 // -------------- SENDING DATA (item added) from js to php (get_expitem.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_expitem.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("bill=").concat(inputValue).concat("&amt=").concat(inputValue2).concat("&username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
  }
  
  document.getElementById("myExpenseBill").value = "";
  document.getElementById("myExpenseAmt").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  window.setTimeout(reload, 300);// jz tested: reload page to refresh index
  //location.reload(); // jz tested: reload page to refresh index
}


//
//
// HEALTH LIST PAGE MANAGEMENT
//
//

// Create a new health obj for the list when clicking on the "ADD" button

function newHealthyObj() {
  var li = document.createElement("li");
  li.className = "shoplist";
  var inputValue = document.getElementById("myHealthInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
	 
	 
	 // -------------- SENDING DATA (item added) from js to php (get_healthitem.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_healthitem.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("item=").concat(inputValue).concat("&username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
  }
  
  document.getElementById("myHealthInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  window.setTimeout(reload, 300);// jz tested: reload page to refresh index
  //location.reload(); // jz tested: reload page to refresh index
}



function minusScore(myIndex){
	
	 // -------------- SENDING DATA (add or minus) from js to php (get_plusminus.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_plusminus.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("index=").concat(myIndex).concat("&status=minus&username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
	 window.setTimeout(reload, 300);
}

function plusScore(myIndex){
	
	 // -------------- SENDING DATA (add or minus) from js to php (get_plusminus.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_plusminus.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("index=").concat(myIndex).concat("&status=plus&username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
	 window.setTimeout(reload, 300);
}

function weekScore(){
	
	 // -------------- SENDING username from js to php (get_weekscore.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_weekscore.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
	 window.setTimeout(reload, 300);
}

function resetBtn(){
	
	 // -------------- SENDING username from js to php (get_weekscore.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "reset_healthitem.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("username=").concat(tmp[1]));
	 // -------------------------------------------------------------
	 
	 window.setTimeout(reload, 300);
}


//
//
// PLAN LIST PAGE MANAGEMENT
//
//

// Create a new plan obj for the list when clicking on the "ADD" button

function planElement() {
  var li = document.createElement("li");
  li.className = "shoplist";
  var inputValue = document.getElementById("myPlanInput").value;
  var inputValue2 = document.getElementById("myPlanDate").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '' || inputValue2 === '') {
    alert("Invalid input!");
  } else {
    document.getElementById("myUL").appendChild(li);

	 // -------------- SENDING DATA (item added) from js to php (get_healthitem.php) --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_planitem.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("item=").concat(inputValue).concat("&date=").concat(inputValue2).concat("&username=").concat(tmp[1]));
	 // -------------------------------------------------------------

  }

  
  document.getElementById("myPlanInput").value = "";
  document.getElementById("myPlanDate").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  window.setTimeout(reload, 300);
}


//
//
// MONTH SELECTION FOR PLANNER LIST
//
//
function monthSelect() {
  var e = document.getElementById("monthSelection");
  var strMonth = e.options[e.selectedIndex].value;
  


	 // -------------- SENDING DATA (month selected) from js to php  --------------
	 var httpc = new XMLHttpRequest(); 
    var url = "get_calmonth.php";
    httpc.open("POST", url, true); // sending as POST

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", 100); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
        // alert("Something went wrong. Sorry about that!"); // some processing here, or whatever you want to do with the response
      }
    }
	 
	 tmp = window.location.search.substr(1).split("="); // getting username
	 httpc.send(("month=").concat(strMonth).concat("&username=").concat(tmp[1]));
	 // --------------------------------------------------------------------------
  
  window.setTimeout(reload, 300);
}
