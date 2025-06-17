let participantCount = 1;

document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add");
  addBtn.addEventListener("click", addParticipant);

  const form = document.querySelector("form");
  form.addEventListener("submit", submitForm);
});

function addParticipant() {
  participantCount++;
  const addBtn = document.getElementById("add");
  addBtn.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
}

function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`;
}
 
function totalFees() {
  let feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((total, input) => total + Number(input.value || 0), 0);
}

function submitForm(event) {
  event.preventDefault();

  const total = totalFees();
  const name = document.getElementById("adult_name").value;
  const summary = document.getElementById("summary");
  const form = document.querySelector("form");

  form.style.display = "none";
  summary.innerHTML = successTemplate({
    name,
    participants: participantCount,
    total
  });
}

function successTemplate(info) {
  return `<h2>Thank you ${info.name} for registering.</h2>
          <p>You have registered ${info.participants} participant(s) and owe $${info.total} in fees.</p>`;
}
