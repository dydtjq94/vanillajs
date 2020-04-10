// const noticeForm = document.querySelector(".js-notice");
// const noticeInput = noticeForm.querySelector("input");
// const noticeUl = document.querySelector(".js-noticeli");

// const NOTICE_LS = "notice";
// let Notices = [];

// function saveNotices() {
//   localStorage.setItem(NOTICE_LS, JSON.stringify(Notices));
// }

// function delNotice(event) {
//   const NBtn = event.target;
//   const BtnLi = NBtn.parentNode;
//   noticeUl.removeChild(BtnLi);
//   const cleanNotice = Notices.filter(function (notice) {
//     return notice.id !== parseInt(BtnLi.id);
//   });
//   console.log(cleanNotice);
//   console.log(BtnLi.id);
//   console.log(Notices.id);
//   Notices = cleanNotice;
//   saveNotices();
// }

// function paintNotice(text) {
//   const noticeLi = document.createElement("li");
//   const noticeBtn = document.createElement("button");
//   const noticeSpan = document.createElement("span");
//   const NoticeID = Notices.length + 1;

//   noticeBtn.innerText = "X";
//   noticeSpan.innerText = text;
//   noticeBtn.addEventListener("click", delNotice);

//   noticeLi.appendChild(noticeSpan);
//   noticeLi.appendChild(noticeBtn);
//   noticeLi.id = NoticeID;

//   noticeUl.appendChild(noticeLi);

//   const NoticeObj = {
//     text: text,
//     id: NoticeID,
//   };

//   Notices.push(NoticeObj);
//   saveNotices();
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const noticeValue = noticeInput.value;
//   paintNotice(noticeValue);
//   noticeInput.value = "";
// }

// function loadNotice() {
//   const loadedNotice = localStorage.getItem(NOTICE_LS);

//   const parsedNotices = JSON.parse(loadedNotice);
//   parsedNotices.forEach(function (notice) {
//     paintNotice(notice.text);
//   });
// }

// function init() {
//   loadNotice();
//   noticeForm.addEventListener("submit", handleSubmit);
// }

// init();
