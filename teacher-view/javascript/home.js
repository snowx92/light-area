//mains
const home = document.querySelector("#home");
const home_right = document.querySelector("#home-right");

const courses = document.querySelector("#course");

const wallet = document.querySelector("#wallet");
const report = document.querySelector("#report");
const setting = document.querySelector("#setting");
const container = document.querySelector("#conta");


//navbar btns
const course_btn = document.querySelector("#course-btn");
const home_btn = document.querySelector("#home_btn");
const wallet_btn = document.querySelector("#wallet-btn");
const report_btn = document.querySelector("#report-btn");
const setting_btn = document.querySelector("#setting-btn");
const course_lec_btn = document.querySelector("#course_lec_btn");




home_btn.addEventListener('click', () => {
  courses.style.display = 'none';
  wallet.style.display = 'none';
  report.style.display = 'none';
  setting.style.display = 'none';

  course_btn.className = "";
  wallet_btn.className = "";
  report_btn.className = "";
  setting_btn.className = "";




  home_btn.className = "active";
  home.style.display = 'block';
  home_right.style.display = 'block';
  container.style.gridTemplateColumns = "14rem auto 23rem";
})
course_btn.addEventListener('click', () => {
  document.getElementsByClassName("lec_id2")[0].setAttribute("id", "lec_id");
  home.style.display = 'none';
  home_right.style.display = 'none';
  wallet.style.display = 'none';
  report.style.display = 'none';
  setting.style.display = 'none';
  document.getElementById("lectures").style.display = "none";

  home_btn.className = "";
  wallet_btn.className = "";
  report_btn.className = "";
  setting_btn.className = "";


  courses.style.display = 'block';
  course_btn.className = "active";
  container.style.gridTemplateColumns = "14rem auto";
})
wallet_btn.addEventListener('click', () => {
  home.style.display = 'none';
  home_right.style.display = 'none';
  courses.style.display = 'none';
  report.style.display = 'none';
  setting.style.display = 'none';


  course_btn.className = "";
  report_btn.className = "";
  home_btn.className = "";
  setting_btn.className = "";


  wallet_btn.className = "active";
  wallet.style.display = 'block';
})
report_btn.addEventListener('click', () => {
  home.style.display = 'none';
  home_right.style.display = 'none';
  courses.style.display = 'none';
  report.style.display = 'none';
  setting.style.display = 'none';


  course_btn.className = "";
  wallet_btn.className = "";
  home_btn.className = "";
  setting_btn.className = "";


  report_btn.className = "active";
  report.style.display = 'block';
})
setting_btn.addEventListener('click', () => {
  home.style.display = 'none';
  home_right.style.display = 'none';
  courses.style.display = 'none';
  report.style.display = 'none';
  report.style.display = 'none';


  course_btn.className = "";
  report_btn.className = "";
  home_btn.className = "";
  report_btn.className = "";


  setting_btn.className = "active";
  setting.style.display = 'block';
})


//chart
document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'areaspline',

    },
    title: {
      text: 'Total subscrptions'
    },

    xAxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],

    },
    yAxis: {
      title: {
        text: 'count'
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' Date'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0
      }
    },
    series: [{
      name: 'Subscrptions',
      data: [3, 4, 3, 5, 4, 10, 12],
    }]
  });
});



// add     course js css 
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("pop_up");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closee")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//add lecture pop up
var myModal_lec = document.getElementById("myModal_lec");
// Get the button that opens the modal
var btn2 = document.getElementById("add_video");

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  myModal_lec.style.display = "block";
}
// When the user clicks on <span> (x), close the modal

var modal_edit_lec = document.getElementById("myModal_lec_edit");
// Get the button that opens the modal
// Get the <span> element that closes the modal
var span_edit = document.getElementsByClassName("close_lec_edit")[0];
// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span_edit.onclick = function () {
  modal_edit_lec.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_edit_lec) {
    modal_edit_lec.style.display = "none";
  }
}

var span2 = document.getElementsByClassName("close_video")[0];
var myModal_video = document.getElementById("myModal_video");
window.onclick = function (event) {
  if (event.target == myModal_video) {
    $("iframe").each(function () {
      var src = $(this).attr('src');
      $(this).attr('src', src);
    });
    myModal_video.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  var myModal_video = document.getElementById("myModal_video");
  $("iframe").each(function () {
    var src = $(this).attr('src');
    $(this).attr('src', src);
  });
  myModal_video.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it

// Get the button that opens the modal
var lecture_main = document.getElementById("lectures");
function gotolect(lect_id) {
  sessionStorage.setItem("lec_id", lect_id);
  console.log(lect_id);
  document.getElementById("course").style.display = "none";
  lecture_main.style.display = "block";
  document.getElementById("lec_id").setAttribute("id", lect_id);

}
function gottovideo(id) {
  sessionStorage.setItem("vid_id", id);
  console.log(id);
  var myModal_video = document.getElementById("myModal_video");
  myModal_video.style.display = "block";
}

course_lec_btn.addEventListener('click', () => {
  document.getElementsByClassName("lec_id2")[0].setAttribute("id", "lec_id");
  lecture_main.style.display = "none";
  document.getElementById("course").style.display = "block";


})

// STEP 1: select element and register change event
const imagePreview = document.querySelector('[data-target="image-preview"]');
const spinner = document.querySelector('[data-target="spinner"]');
const fileUploader = document.getElementById("file-uploader");
fileUploader.addEventListener("change", handleFileUpload);

async function handleFileUpload(e) {
  try {
    const file = e.target.files[0];
    setUploading(true);
    if (!file) return;

    const beforeUploadCheck = await beforeUpload(file);
    if (!beforeUploadCheck.isValid) throw beforeUploadCheck.errorMessages;

    const arrayBuffer = await getArrayBuffer(file);
    const response = await uploadFileAJAX(arrayBuffer);

    alert("File Uploaded Success");
    showPreviewImage(file);
  } catch (error) {
    alert(error);
    console.log("Catch Error: ", error);
  } finally {
    // reset input file
    setUploading(false);
  }
}

// STEP 2: showPreviewImage with createObjectURL
// If you prefer Base64 image, use "FileReader.readAsDataURL"
function showPreviewImage(fileObj) {
  const image = URL.createObjectURL(fileObj);
  imagePreview.src = image;
}

// STEP 3: change file object into ArrayBuffer
function getArrayBuffer(fileObj) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // Get ArrayBuffer when FileReader on load
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    // Get Error when FileReader on error
    reader.addEventListener("error", () => {
      reject("error occurred in getArrayBuffer");
    });

    // read the blob object as ArrayBuffer
    // if you nedd Base64, use reader.readAsDataURL
    reader.readAsArrayBuffer(fileObj);
  });
}

// STEP 4: upload file throguth AJAX
// - use "new Uint8Array()"" to change ArrayBuffer into TypedArray
// - TypedArray is not a truely Array,
//   use "Array.from()" to change it into Array
function uploadFileAJAX(arrayBuffer) {
  // correct it to your own API endpoint
  return fetch("https://jsonplaceholder.typicode.com/posts/", {
    headers: {
      version: 1,
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      imageId: 1,
      icon: Array.from(new Uint8Array(arrayBuffer))
    })
  })
    .then(res => {
      if (!res.ok) {
        throw res.statusText;
      }
      return res.json();
    })
    .then(data => data)
    .catch(err => console.log("err", err));
}

// STEP 5: Create before upload checker if needed
function beforeUpload(fileObject) {
  return new Promise(resolve => {
    const validFileTypes = ["image/jpeg", "image/png"];
    const isValidFileType = validFileTypes.includes(fileObject.type);
    let errorMessages = [];

    if (!isValidFileType) {
      errorMessages.push("You can only upload JPG or PNG file!");
    }

    const isValidFileSize = fileObject.size / 1024 / 1024 < 2;
    if (!isValidFileSize) {
      errorMessages.push("Image must smaller than 2MB!");
    }

    resolve({
      isValid: isValidFileType && isValidFileSize,
      errorMessages: errorMessages.join("\n")
    });
  });
}

function setUploading(isUploading) {
  if (isUploading === true) {
    spinner.classList.add("opacity-1");
  } else {
    spinner.classList.remove("opacity-1");
  }
}

//lec
function openPage(pageName, element) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tablink[i].style.borderBottomWidth = "0px";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  element.style.borderBottomWidth = "10px";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function editvideo(id) {
  sessionStorage.setItem("video_id", id);

}
var modal_Delete = document.getElementById('myModal_lec_delete');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_Delete) {
    modal_Delete.style.display = "none";
  }
}
document.getElementById("cancel").onclick = function () {
  modal_Delete.style.display = "none";
}
var span_Delete = document.getElementsByClassName("close_lec_delete")[0];
span_Delete.onclick = function () {
  modal_Delete.style.display = "none";
}
function deletevideo(id) {
  sessionStorage.setItem("video_id", id);

  modal_Delete.style.display = "block";
}



var modal_pdf = document.getElementById("myModal_pdf");
// Get the button that opens the modal
var btn_pdf = document.getElementById("add_pdf");
// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn_pdf.onclick = function () {

  modal_pdf.style.display = "block";
}
// When the user clicks on <span> (x), close the modal


var modal_pdf_edit = document.getElementById("myModal_pdf_edit");
// Get the button that opens the modal

// Get the <span> element that closes the modal
var span_pdf_edit = document.getElementsByClassName("close_pdf_edit")[0];
// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span_pdf_edit.onclick = function () {
  modal_pdf_edit.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_pdf_edit) {
    modal_pdf_edit.style.display = "none";
  }
}
function editPdf(id) {
  sessionStorage.setItem("pdf_id", id);

}

var modal_Delete_pdf = document.getElementById('myModal_pdf_delete');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_Delete_pdf) {
    modal_Delete_pdf.style.display = "none";
  }
}
var span_Delete_pdf = document.getElementsByClassName("close_pdf_delete")[0];
span_Delete_pdf.onclick = function () {
  modal_Delete_pdf.style.display = "none";
}
function deletepdf(id) {
  sessionStorage.setItem("pdf_id", id);

  modal_Delete_pdf.style.display = "block";
}
document.getElementById("cancel_pdf").onclick = function () {
  modal_Delete.style.display = "none";
}


var modal_quiz_add = document.getElementById("myModal_quizzz");
// Get the button that opens the modal
var btn_quiz_add = document.getElementById("quiz_add");
// Get the <span> element that closes the modal
var span_quiz_add = document.getElementsByClassName("close_quizzz")[0];
// When the user clicks on the button, open the modal
btn_quiz_add.onclick = function () {
  modal_quiz_add.style.display = "block";
}
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it

function gottoquiz(id) {
  sessionStorage.setItem("quiz_id", id);
  console.log(id);
  const info_box = document.querySelector(".preview_quiz_info");
  info_box.style.display="block";
}



function editquiz(id) {
  sessionStorage.setItem("quiz_id", id);

}