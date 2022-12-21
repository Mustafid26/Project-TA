const form = document.querySelector("form");
const inputUser = document.getElementById("floatingTextarea2");
const listGroup = document.querySelector(".list");
form.addEventListener("submit", function (event) {
  listGroup.innerHTML += `
  <table class="table table-striped table-hover"">
                <tbody class="list">
                  <tr>
                    <td><i class="bi bi-caret-right-fill"></i> ${inputUser.value}</td>
                    <td>
                      <button type="button" class="btn btn-danger" id="delete-btn">Hapus</button>
                      <button type="button" class="btn btn-info ms-1" i><a href="#" style="text-decoration: none; color:white">Jawaban</a></button>
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
