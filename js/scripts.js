$(document).ready(function () {
    console.log('document is ready!');
    // let checkboxes = document.querySelectorAll('#weekday-list .day');

    let checkboxes = $('#weekday-list .day');

    // console.log(checkboxes)

    let workdays = document.querySelector('#workdays');

    function listCheckboxes() {
        let daysWantToWork = checkboxes
            .filter(':checked')
            .map(function () {
                return this.value;
            })
            .get();

        workdays.innerHTML = ('You want to work on '+daysWantToWork.join(',') +'!');
    }

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', listCheckboxes);
    }

    listCheckboxes();
});
