document.getElementById("li-home").style.color = "#e94848";
document.getElementById("li-about").style.color = "#459b37";
document.getElementById("li-contact").style.color = "#964cb0";
document.getElementById("li-portfolio").style.color = "#efbc45";
document.getElementById("li-blog").style.color = "#3b48db";

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onClick = navigation.classList.toggle('open');

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(
    item => {
        item.onClick = () => {
            listItems.forEach( 
                item => item.classList.remove('active')
            );
            item.classList.add('active');
        }
    }
)