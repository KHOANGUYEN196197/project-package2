var listProduct = [
  {
    name: "Iphone 14",
    price: "30.990.000₫",
    info: "6.9 inches",
    detail: "ProductDetail1",
    ratingStar: "5",
    imageName:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
    manufacturerName: "2",
    categoryName: "2",
    id: "1",
  },
  {
    name: "Iphone 14",
    price: "30.990.000₫",
    info: "6.9 inches",
    detail: "ProductDetail1",
    ratingStar: "5",
    imageName:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
    manufacturerName: "2",
    categoryName: "2",
    id: "2",
  },
  {
    name: "Iphone 14",
    price: "30.990.000₫",
    info: "6.9 inches",
    detail: "ProductDetail1",
    ratingStar: "5",
    imageName:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
    manufacturerName: "2",
    categoryName: "2",
    id: "3",
  }
];
var listManufacturer = [
  {
    id: 1,
    name: "SAMSUNG"
  }, {
    id: 2,
    name: 'APPLE'
  },
  {
    id: 3,
    mane: 'XiAOMI'
  },
  {
    id: 4,
    name: "OPPO"
  }
];
var listCategory = [

  {

    id: 1,
    name: 'Điện Thoại'
  },
  {

    id: 2,
    name: 'Tablet'
  },
  {

    id: 3,
    name: 'Laptop'
  }
];




$(function () {
  $("#menu-admin").load("./menuAdmin.html");
  $("#sidebar-admin").load("./sideBarAdmin.html");
  $("#filter-manufacturers").load("./filterManufacturers.html");
  $("#filter-categorys").load("./filterCategorys.html");
  handleShowProduct();
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
  $("#tbProductAdmin").empty();
  listProduct.forEach(product => {
    $("#tbProductAdmin").append(`
    <tr style="vertical-align: middle">
              <td>${product.id}</td>
              <td>S22 Ultra 5G</td>
              <td>30.990.000₫</td>
              <td>6.9 inches</td>
              <td>ProductDetail1</td>
              <td>5</td>
              <td>
                <img
                  style="width: 50px; height: 50px"
                  src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png"
                />
              </td>
              <td>SAMSUNG</td>
              <td>Điện thoại</td>
              <td>
                <button
                  onclick="handleEditProduct()"
                  type="button"
                  class="btn btn-warning"
                >
                  Edit
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
    `)
  });
}



function handleEditProduct() {
  $("#ModalUpdateProduct").modal("show");
}

function handleCreateProduct() {
  $("#ModalCreateProduct").modal("show");
}