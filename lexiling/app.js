document.addEventListener("DOMContentLoaded", function () {
  var count = 0;
  var maxCount = 2;
  var h1 = document.getElementById("ueberschrift");
  h1.addEventListener("animationiteration", function () {
    count++;
    if (count >= maxCount) {
      h1.style.animationIterationCount = "1";
    }
  });
});

function sortWords() {  // JavaScript-Code
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  
  scrollToTopButton.addEventListener("click", () => {
    // Nach oben scrollen
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Scrollen mit sanfter Animation
    });
  });
  
  // Funktion zum Sortieren der Wörter
}

// Selektiere die geordnete Liste und extrahiere die Listenelemente
const myList = document.querySelector("#myList");
const items = myList.querySelectorAll("li");

// Konvertiere die Listenelemente in ein Array, um sie sortieren zu können
const itemsArray = Array.from(items);

// Sortiere die Array-Elemente alphabetisch basierend auf dem Text im <li>-Tag
itemsArray.sort(function (a, b) {
  const aText = a.textContent.toLowerCase();
  const bText = b.textContent.toLowerCase();
  return aText.localeCompare(bText);
});

// Entferne alle Listenelemente aus der geordneten Liste
items.forEach(function (item) {
  item.remove();
});

// Füge die sortierten Listenelemente wieder zur geordneten Liste hinzu
itemsArray.forEach(function (item) {
  myList.appendChild(item);
});

// Aktuelle Uhrzeit, Datum und Woche
function displayDateTime() {
  // Uhrzeit
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Führende Nullen hinzufügen
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Uhrzeit anzeigen
  const time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").textContent = time;

  // Datum
  const date = now.toLocaleDateString();
  document.getElementById("date").textContent = date;

  // Kalenderwoche
  const week = getCalendarWeek(now);
  document.getElementById("week").textContent = "KW " + week;
}

function getCalendarWeek(date) {
  const target = new Date(date.valueOf());
  const dayNumber = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumber + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
}

// Aktualisieren der Anzeige alle Sekunde
setInterval(displayDateTime, 1000);

// Suchfeld
function searchList() {
  let input, filter, ol, li, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ol = document.getElementById('myList');
  li = ol.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// BOTTON WITH VIBRATION
if ('vibrate' in navigator) {
  let buttons = document.querySelectorAll('.vibrate-button');

  buttons.forEach(function(button) {
    button.addEventListener('touchstart', function() {
      navigator.vibrate(100);
      button.classList.add('vibrate-effect');
      setTimeout(function() {
        button.classList.remove('vibrate-effect');
      }, 200);
    });
  });
}
