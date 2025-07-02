let count = 0;
const countElement  = document.getElementById('count');
const incrementButton = document.getElementById('increment');

incrementButton.addEventListener('click',function () {
        count++;
        countElement.textContent = count;
});
