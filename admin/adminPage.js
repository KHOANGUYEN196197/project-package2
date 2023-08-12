var listProduct = [];
var listManufacturer = [];
var listCategory = [];
var idUpdate = "";




$(function () {
  $("#menu-admin").load("./menuAdmin.html");
  $("#sidebar-admin").load("./sideBarAdmin.html");
  $("#filter-manufacturers").load("./filterManufacturers.html");
  $("#filter-categorys").load("./filterCategorys.html");
  handleShowProduct();
  // localStorage.setItem("listProduct", JSON.stringify(listProduct));
  // localStorage.setItem("listCategory", JSON.stringify(listCategory));
  // localStorage.setItem("listManufacturer", JSON.stringify(listManufacturer));
});

function handleShowManufacturer() {
  $("#section-admin").load("./manufacturersAdmin.html");
}
function handleShowCategory() {
  $("#section-admin").load("./categorysAdmin.html");
}
function handleShowProduct() {
  $("#section-admin").load("./productAdmin.html");
  setTimeout(() => {
    fetchListProduct();
  }, 500);
}
function handleShowAcount() {
  $("#section-admin").load("./acountAdmin.html");
}

function fetchListProduct() {
  const listProductLocal = JSON.parse(localStorage.getItem("listProduct"));
  const listManufacturerLocal = JSON.parse(localStorage.getItem("listManufacturer"));
  const listCategoryLocal = JSON.parse(localStorage.getItem("listCategory"));

  listProduct = listProductLocal ? listProductLocal : [];
  listManufacturer = listManufacturerLocal ? listManufacturerLocal : [];
  listCategory = listCategoryLocal ? listCategoryLocal : [];

  fetchListManufactureAdmin();
  fetchListCategoryAdmin();



  console.log(123, { listProductLocal, listManufacturerLocal, listCategoryLocal });


  $("#tbProductAdmin").empty();

  listProduct.forEach(product => {
    $("#tbProductAdmin").append(`
    <tr style="vertical-align: middle">
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.info}</td>
      <td>${product.detail}</td>
      <td>${product.ratingStar}</td>
      <td> <img style="width: 50px; height: 50px" src="${product.imageName}"/> </td>
      <td>${listManufacturer.filter((manufacture) => manufacture.id === +product.manufacturerID)[0].name}</td>
      <td>${listCategory.find((category) => category.id === +product.categoryID).name}</td>
      <td> <button onclick="handleEditProduct(${product.id})" type="button" class="btn btn-warning"> Edit </button> </td>
      <td> <button onClick="handleDeleteProduct(${product.id})" type="button" class="btn btn-danger">Delete</button> </td>
    </tr>
    `)
  });
}

function handleEditProduct(id) {
  idUpdate = id;
  const index = listProduct.findIndex((product) => +product.id === +id);
  $("#IdUpdate").val(listProduct[index].id);
  $("#NameUpdate").val(listProduct[index].name);
  $("#PriceUpdate").val(listProduct[index].price);
  $("#InfoUpdate").val(listProduct[index].info);
  $("#DetailUpdate").val(listProduct[index].detail);
  $("#StarUpdate").val(listProduct[index].ratingStar);
  $("#ImageUpdate").val(listProduct[index].imageName);
  $("#ManufacturerUpdate").val(listProduct[index].manufacturerID);
  $("#CategoryUpdate").val(listProduct[index].categoryID);
  $("#ModalUpdateProduct").modal("show");
}

function handleUpdateProduct() {
  const data = {
    id: idUpdate,
    name: $("#NameUpdate").val(),
    price: $("#PriceUpdate").val(),
    info: $("#InfoUpdate").val(),
    detail: $("#DetailUpdate").val(),
    ratingStar: $("#StarUpdate").val(),
    imageName: $("#ImageUpdate").val(),
    manufacturerID: $("#ManufacturerUpdate").val(),
    categoryID: $("#CategoryUpdate").val(),
  }

  const index = listProduct.findIndex((product) => +product.id === +idUpdate);
  listProduct[index] = data;
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  fetchListProduct();
  $("#ModalUpdateProduct").modal("hide");
}
function handleResetUpdate() {
  $("#NameUpdate").val("");
  $("#PriceUpdate").val("");
  $("#InfoUpdate").val("");
  $("#DetailUpdate").val("");
  $("#StarUpdate").val("");
  $("#ImageUpdate").val("");
  $("#ManufacturerUpdate").val("");
  $("#CategoryUpdate").val("");
}

function handleDeleteProduct(id) {
  console.log(id);
  swal({
    title: "Are you sure?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        const data = listProduct.filter((product) => +product.id !== +id);
        localStorage.setItem("listProduct", JSON.stringify(data));
        setTimeout(() => {
          fetchListProduct();
        }, 500);
        swal("deleted!", {
          icon: "success",
        });
      } else {
        swal.close();
      }
    });
}
function resetCreateAdmin() {
  $("#Name").val("");
  $("#Price").val("");
  $("#Info").val("");
  $("#Detail").val("");
  $("#Star").val("");
  $("#Image").val("");
  $("#Manufacturer").val("");
  $("#Category").val("");

}
function handleCreateProduct() {
  resetCreateAdmin();
  $("#ModalCreateProduct").modal("show");
}

function fetchListManufactureAdmin() {
  $("#Manufacturer").empty();
  $("#ManufacturerUpdate").empty();

  for (let index = 0; index < listManufacturer.length; index++) {
    const manufacture = listManufacturer[index];
    //create
    $("#Manufacturer").append(
      `
      <option value="${manufacture.id}">${manufacture.name}</option>
      `
    );
    //update
    $("#ManufacturerUpdate").append(
      `
      <option value="${manufacture.id}">${manufacture.name}</option>
      `
    );
  }
}

function fetchListCategoryAdmin() {
  $("#Category").empty();
  $("#CategoryUpdate").empty();

  for (let index = 0; index < listCategory.length; index++) {
    const category = listCategory[index];
    //create
    $("#Category").append(
      `
      <option value="${category.id}">${category.name}</option>
      `
    );
    //update
    $("#CategoryUpdate").append(
      `
      <option value="${category.id}">${category.name}</option>
      `
    );
  }
}
function CreateNewProduct() {
  const data = {
    id: Math.floor(Math.random() * 10000),
    name: $("#Name").val(),
    price: $("#Price").val(),
    info: $("#Info").val(),
    detail: $("#Detail").val(),
    ratingStar: $("#Star").val(),
    imageName: $("#Image").val(),
    manufacturerID: $("#Manufacturer").val(),
    categoryID: $("#Category").val(),
  }
  console.log(123, data);
  listProduct.push(data);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  fetchListProduct();
  $("#ModalCreateProduct").modal("hide");

}