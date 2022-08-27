import axios from "axios";

const depart = document.getElementById("datum1").value;

//get single trip data
async function saveTrip() {
  try {
    let allData = await axios.get('/all')
    pushIntoArray(allData);
    showSavedTrip();
  } catch (error) {
    console.log("saveTrip error", error)
  }
}

//push single trip into trip array in local storage
function pushIntoArray(allData) {
  const data = localStorage.getItem('savedTrip');
  let myTrips;
  if (data === null) {
    //when the storage is null, build an array and put the first object in
    //build the object with subtracted date property, for later 'trip sorting by date' to use.
   
    const json = {
      "depart": depart,
      "data": allData.data
    }
    if (allData.data != null) {
      myTrips = new Array();
      myTrips[0] = json;
    }
  } else {
    console.log("storage exits");
    myTrips = JSON.parse(data);
    const content = allData.data;
    if (content != null) {
 
      const json = {
        "depart": depart,
        "data": content
      }
      //push the trip to the already existing array
      myTrips.push(json);
    }
  }
  //save the object to the localstorage
  localStorage.setItem('savedTrip', JSON.stringify(myTrips));
}

//show saved trip
function showSavedTrip() {
  const data = localStorage.getItem('savedTrip');
  if (data != null) {
    const dataJson = JSON.parse(data);
    if (dataJson.length > 0) {
      sortDataArray(dataJson);
      let html = "";
      //loop the array
      for (var i = 0; i < dataJson.length; i++) {
        let  tempDataJson = dataJson[i].data;
        if (tempDataJson != null) {
          //the class has to be added here but not in index.HTML, because the div is dynamical
          html += `<div class="savedEntry" style="display: block;"><div class="tripImage2" alt="Location"><img src="${tempDataJson.image.image_url} alt="${tempDataJson.image.image_alt}"></div>`;
          html += `<div class=tripText2><p>${tempDataJson.weather.datetime}</p>
               <h3>${tempDataJson.geo.cityName}, ${tempDataJson.geo.countryName} </h3> 
               <p>${tempDataJson.weather.min}°C to ${tempDataJson.weather.max}°C</p>
               <p>${tempDataJson.weather.description} <img src="https://www.weatherbit.io/static/img/icons/${tempDataJson.weather.icon}.png"></p>
               <div>Memo:<p>${tempDataJson.memo}<p></div></div>
               <button id="delBtn${i}" class="xx btn" type="submit" hideid="${i}"> delete trip </button>
               </div>`;
              }
          }
          document.getElementById("storageShow").innerHTML = html;
          document.getElementById("storageDiv").style.display = `block`;
          //Dynamically add button events,button's id is delBtn0,delBtn1.. and so on
          for (var i = 0; i < dataJson.length; i++) {
             document.getElementById("delBtn" + i).addEventListener("click", deleteTrip);
          }
        } else {
          document.getElementById("storageShow").innerHTML = ``;
          document.getElementById("storageDiv").style.display = `none`;
        }
      } else {
        //no localStorage(after deleting the last saved trip)
        document.getElementById("storageShow").innerHTML = ``;
        document.getElementById("storageDiv").style.display = `none`;
      }
    }   

//sort the array by depart date
function sortDataArray(dataArray) {
  return dataArray.sort(function (a, b) {
    return Date.parse(a.depart.replace(/-/g, "/")) - Date.parse(b.depart.replace(/-/g, "/"));
  });
}

function deleteTrip(e) {
  let btnObject = e.target;
  //'hideid' is so to say a self-created attribute, in order to locate the dynamical id from each delete button.
  let _index = btnObject.getAttribute("hideid");
  const data = localStorage.getItem('savedTrip');
  if (data != null) {
    const dataJson = JSON.parse(data);
    if (dataJson.length > 1) {
      //remove the trip from array
      dataJson.splice(_index, 1);
      //save the new storage
      localStorage.setItem('savedTrip', JSON.stringify(dataJson));
      //reload the page
      showSavedTrip();
    } else {
      //delete the storage
      localStorage.removeItem("savedTrip");
      //reload the page
      showSavedTrip();
    }
  }
}

export {
  saveTrip,
  showSavedTrip
}