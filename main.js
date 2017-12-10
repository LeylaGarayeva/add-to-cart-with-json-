var itemCount = 0;
function allowDrop(event)
{
  event.preventDefault();
}

function drag(event)
{   event.dataTransfer.setData("Item",event.target.id);
}

function drop(event)
{
  itemCount = itemCount + 1;
  event.preventDefault();
  var data=event.dataTransfer.getData("Item");
  $targetElement = document.getElementById('target-grid');
 $selectedElement = document.getElementById(data).cloneNode(true);
  $selectedElement.className += " append";
 $targetElement.appendChild($selectedElement);
  $('#itemCount').html(itemCount)
 $selectedElement.innerHTML += "<i class='fa fa-times' data-item="+data+"></i>"; 
}
