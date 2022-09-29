class Utils {
  static generateDOMFromList(list, elemento) {
    for (let i of list) {
      let col = document.createElement("div");
      col.className = "col-sm-4 mb-4";

      let item = `
        <div class="card">
            <div class="card-body pb-0">
              <h5 class="card-title">${i.name}</h5>
              <p class="card-text mb-0 f-85">${i.address.street}, ${i.address.suite}</p>
              <p class="card-text f-85">${i.address.city} - Zipcode: ${i.address.zipcode}</p>
              <p class="card-text mb-0"><strong>Company</strong>: ${i.company.name}</p>
            </div>
            <div class="card-body">
              <p class="card-text mb-0"><strong>Contacts</strong></p>
              <p class="mb-0 f-85">Email: <a href="mailto:${i.email}" class="card-link">${i.email}</a></p>
              <p class="f-85">Phone: <a href="phone:${i.phone}" class="card-link">${i.phone}</a></p>

              <h5 class="card-title mb-0">Qty Posts: (${i.posts.length})</h5>
            </div>
            
        </div>
      `;

      col.innerHTML = item;

      elemento.appendChild(col);
    }
  }

  static generateDOMError(elemento, type) {
    let col = document.createElement("div");
    col.className = "alert alert-danger";
    col.innerHTML = `Ops! Something went wrong when trying to generate <strong>${type}</strong> list!!`;

    elemento.appendChild(col);
  }
}

module.exports = Utils;
