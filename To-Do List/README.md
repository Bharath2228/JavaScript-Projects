# To-Do List using JavaScript

.item-completed:checked + .item-description - when the checkbox of class item-completed is checked then this will target the siblings of item-completed class i.e item-description

- created a template element for div item to use it in javascript for adding a item 

-local storgae is used to store the items of the list and dispay it again even if we click on refresh.



function used:

- getItems() - is used to get all the values stored in the local storgae

- setItems() - is used to set all the new items that user want to store in local storage

-refreshList() - this function is used to clone the template div and insert it when the new items are added