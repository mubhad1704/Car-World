// Store record
function storeRecord() {
  let carBrand = document.getElementById('carBrand').value;
  let price = document.getElementById('price').value;
  let key = document.getElementById('key').value;

  if (carBrand && price && key) {
    let record = { carBrand, price };
    localStorage.setItem(key, JSON.stringify(record));
    alert("Record Stored Successfully!");
  } else {
    alert("Please fill all fields!");
  }

  document.getElementById('carBrand').value = '';
  document.getElementById('price').value = '';
  document.getElementById('key').value = '';
}

// Retrieve record
function retrieveRecord() {
  let key = document.getElementById('retrieveKey').value;
  let result = document.getElementById('result');
  let record = localStorage.getItem(key);

  if (record) {
    let parsed = JSON.parse(record);
    result.innerHTML = `<span class="text-white text-lg" style="font-family: 'Red Hat Display', sans-serif;"><b>Brand:</b> ${parsed.carBrand}, <b>Price:</b> ${parsed.price}</span>`;
  } else {
    result.innerHTML = `<span class="text-white text-lg">No record found!</span>`;
  }

  
}

// Delete record
function deleteRecord() {
  let key = document.getElementById('deleteKey').value;
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    alert("Record deleted successfully!");
  } else {
    alert("No record found with this key!");
  }

  document.getElementById('deleteKey').value = '';
  document.getElementById('retrieveKey').value = '';
  result.innerHTML = '';
}

// Clear all records
function clearAll() {
  localStorage.clear();
  alert("All records cleared!");
}
