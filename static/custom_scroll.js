document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.querySelector(".todo");
    if (todoList) {
        const scrollbar = new SimpleBar(todoList, {
            scrollbarMinSize: 20,
            scrollbarMaxSize: 2000,
        });

        // Добавляем отступ справа между задачами и кастомной полосой прокрутки
        scrollbar.getScrollElement().style.paddingRight = '30px';
    }
});


    document.addEventListener("DOMContentLoaded", function () {
        var checkboxes = document.querySelectorAll('.task-container input[type="checkbox"]');

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var index = this.getAttribute("data-index");
                var task = document.getElementById('task' + index);
                var container = document.querySelector('.todo-list');
                if (this.checked) {
                    container.appendChild(task);
                } else {
                    container.insertBefore(task, container.firstChild);
                }
            });
        });
    });

