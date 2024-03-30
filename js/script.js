var g_array;
function handleFile(files, array) {
  // console.log(array[0], array[1], array[2])
  const file = files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const searchData = [array[0], array[1], array[2]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      const filteredRows = jsonData.filter(row => {
          return searchData.every(value => Object.values(row).includes(value));
      });
      const extractedData = filteredRows.map(row => {
          return {
              price: row.Price,
              cc: row.Displacement,
              torque: row.Torque,
              power: row.Power,
              front: row.Front_Suspension,
              rear: row.Rear_Suspension
          };
      });
      try{
        var price = extractedData[0]["price"]
        var torque = extractedData[0]["torque"]
        var cc = extractedData[0]["cc"]
        var power = extractedData[0]["power"]
        var front = extractedData[0]["front"]
        var rear = extractedData[0]["rear"]
      }catch(err){
        alert("The selected model brand or variant combination donot exist......")
      }
      // console.log(price,power,torque,cc,front,rear)
      // window.location.href = "main.html";
      var name1 = array[0] + array[1]
      var arr = [price, torque, cc, power, front, rear, name1]
      h = document.getElementById("head")
      e = document.getElementById("engine")
      p = document.getElementById("power")
      t = document.getElementById("torque")
      f = document.getElementById("front")
      r = document.getElementById("rear")
      c = document.getElementById("price")
      h.innerHTML = name1
      e.innerHTML = cc
      p.innerHTML = power
      f.innerHTML = front
      r.innerHTML = rear
      c.innerHTML = price
      t.innerHTML = torque
      console.log("Success")
  };
  reader.readAsBinaryString(file);
}

function fun(){
  var company = document.getElementById("abc").value
  var model = document.getElementById("abc1").value
  var variant = document.getElementById("abc2").value
  if(company == '' || model == '' || variant == ''){
    alert("Empty Field or Inappropiate Selection")
  }
  var array = [company, model, variant]
  return array
}