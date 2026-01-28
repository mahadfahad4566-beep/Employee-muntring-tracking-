// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCy-QdoFON0qBqcbmjKxBHYulBUeQUdqsM",
  authDomain: "employee-muntring-system.firebaseapp.com",
  databaseURL: "https://employee-muntring-system-default-rtdb.firebaseio.com",
  projectId: "employee-muntring-system",
  storageBucket: "employee-muntring-system.appspot.com",
  messagingSenderId: "398039323834",
  appId: "1:398039323834:web:c9a0a2f2714478a44cde83"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Save Data
window.saveData = function () {
  const name = document.getElementById("name").value;
  const designation = document.getElementById("designation").value;

  push(ref(db, "employees"), {
    name: name,
    designation: designation
  });

  document.getElementById("name").value = "";
  document.getElementById("designation").value = "";
};

// Read Data (Live Online)
const list = document.getElementById("list");
onValue(ref(db, "employees"), (snapshot) => {
  list.innerHTML = "";
  snapshot.forEach(child => {
    const data = child.val();
    list.innerHTML += `<li>${data.name} - ${data.designation}</li>`;
  });
});