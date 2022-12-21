const form = document.querySelector("form");
const inputUser = document.getElementById("inputUser");
const tanggal = document.getElementById("tanggal");
const listGroup = document.querySelector(".list");
form.addEventListener("submit", function (event) {
  listGroup.innerHTML += `
  <table class="table table-striped table-hover"">
                <tbody class="list">
                  <tr>
                    <td><b>Tugasku</b> : <br/>${inputUser.value}</td>
                    <td><b>Deadline</b>: <br/>${tanggal.value}</td>
                    <td>
                      <button type="button" class="btn btn-danger" id="delete-btn">Hapus</button>
                      <input style="margin-top:10px"class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="Selesai">
                      <label class="form-check-label" for="reverseCheck1">
                      Selesai
                    </label>
                    </td>
                  </tr>
                </tbody>
              </table>`;
  inputUser.value = "";
  event.preventDefault();
});
listGroup.addEventListener("click", function (event) {
  if (event.target.id == "delete-btn") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
});
