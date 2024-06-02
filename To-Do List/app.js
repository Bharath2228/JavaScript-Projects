document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.getElementById("items");
    const itemTemplate = document.getElementById("itemTemplate");
    const addItemBtn = document.getElementById("add");

    let items = getItems();

    function getItems() {
        const value = localStorage.getItem("todo-test") || "[]";
        return JSON.parse(value);
    }

    function setItems(items) {
        const itemJson = JSON.stringify(items);
        localStorage.setItem("todo-test", itemJson);
    }

    function addItem() {
        items.unshift({
            description: "", 
            completed: false
        });
        setItems(items);
        refreshList();
    }

    function refreshList() {
        items.sort((a, b) => {
            if (a.completed) {
                return 1;
            }
            if (b.completed) {
                return -1;
            }
            return a.description < b.description ? -1 : 1;
        });

        itemsContainer.innerHTML = "";

        for (const item of items) {
            const itemElement = itemTemplate.content.cloneNode(true);
            const descriptionInput = itemElement.querySelector(".item-description");
            const completedInput = itemElement.querySelector(".item-completed");

            descriptionInput.value = item.description;
            completedInput.checked = item.completed;

            descriptionInput.addEventListener("change", () => {
                updateItem(item, "description", descriptionInput.value);
            });

            completedInput.addEventListener("change", () => {
                updateItem(item, "completed", completedInput.checked);
            });

            itemsContainer.append(itemElement);
        }
    }

    addItemBtn.addEventListener("click", () => {
        addItem();
    });

    function updateItem(item, key, value) {
        item[key] = value;
        setItems(items);
        refreshList();
    }

});
