export const navbar = ` <div>
<div>
  <!-- <i class="fa-solid fa-bars fa-xl"> </i> -->
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    <i class="fa-solid fa-bars fa-xl"> </i>
  </button>

  <div
    class="offcanvas offcanvas-start"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5
        class="offcanvas-title"
        id="staticBackdropLabel"
        style="margin-left: 10%"
      >
        <img
          id="home"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
          alt="Image
        />
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body" id="collapse">
      <div id="men1">Men Sportwear</div>
      <div>Women Sportwear</div>
      <div>Outdoor Cycles</div>
      <div>Accessories</div>
      <div>Nutrition</div>
      <div>Wellness & Care</div>
      <div>Smart Equipment</div>
    </div>
  </div>
</div>

<img
id="home1"
  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
  alt="Image"
/>
</div>
<div>
<div id="men">Men Sportwear</div>
<div>Women Sportwear</div>
<div>Outdoor Cycles</div>
<div>Accessories</div>
<div>Nutrition</div>
<div>Wellness & Care</div>
<div>Smart Equipment</div>
</div>
<div>
<i style="margin-top:5px;" class="fa-regular fa-user"></i>

<button
      class="btn btn-primary position-relative"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      
      id="cart"
    >
      

      <i class="fa-solid fa-cart-shopping fa-lg"> </i>
        <span id="cartno" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
          <span class="visually-hidden">unread messages</span>
        </span>
      

    </button>

    <div
      
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      aria-labelledby="offcanvasRightLabel"
    >
      
      <div id="CartSlide">Cart Page</div>
    </div>



 
</div>`;

export const crousel = `
<div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="slide1" src="" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img id="slide2" src="" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img id="slide3" src="" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img id="slide4" src="" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
export const getdata = async (name) => {
  const data = await fetch(`http://localhost:8004/${name}`);
  const data2 = await data.json();
  return data2;
};
let flag = true;
// *******************Arrow Fuction********************
const changedata = async (category, line, appendin) => {
  console.log(name);
  if (flag) {
    flag = false;
  } else {
    flag = true;
  }
  console.log(flag);
  const bestseller = await getdata(appendin);
  b = true;
  showdata(bestseller, category, line, appendin);
  // console.log(data);
  // showdata(data, category, line);
};

// ******************BEfore show data the arrows appw**********************
export const beforeshowdata = (category, line, appendin) => {
  const h2 = document.createElement("h2");
  h2.innerText = category;
  const h4 = document.createElement("h4");
  const span = document.createElement("span");
  span.innerText = line;
  const h4div = document.createElement("div");
  const i1 = document.createElement("i");
  i1.setAttribute("class", "fa-solid fa-arrow-left fa-xl");
  i1.addEventListener("click", () => {
    changedata(category, line, appendin);
  });

  const i2 = document.createElement("i");
  i2.setAttribute("class", "fa-solid fa-arrow-right fa-xl");
  i2.addEventListener("click", () => {
    changedata(category, line, appendin);
  });
  h4div.append(i1, i2);
  h4.append(span, h4div);

  document.getElementById("container").append(h2, h4);
};

// *******************************
let b = false;

// **********************DIsplay Data main Page***************
export const showdata = (data, category, line, appendin) => {
  try {
    document.getElementById(appendin).innerHTML = "";
    b = true;
  } catch (err) {
    console.log("first");
  }
  console.log(data);
  if (flag) {
    data.splice(4, 7);
  } else {
    data.splice(0, 4);
  }
  const div = document.createElement("div");
  div.setAttribute("id", `${appendin}`);
  data.map((elem, id) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", `${elem.thumbnail}`);
    const h5 = document.createElement("h5");
    h5.innerText = elem.cname;
    const p = document.createElement("p");
    p.innerText = elem.title;
    const div1 = document.createElement("div");
    div1.setAttribute("class", "price");
    const p1 = document.createElement("p");
    p1.innerHTML = "₹" + elem.price;

    const p2 = document.createElement("p");
    p2.innerHTML = "₹" + elem.strikePrice;
    const p3 = document.createElement("p");
    p3.innerHTML = elem.discount + "%" + " off";
    div1.append(p1, p2, p3);
    card.append(img, h5, p, div1);

    card.addEventListener("click", function () {
      console.log(elem.id);
      console.log(category);
      DisplayProduct(elem);
    });
    // console.log(appendin);
    if (b) {
      document.getElementById(appendin).append(card);
    } else {
      div.append(card);
    }
  });
  if (!b) {
    document.getElementById("container").append(div);
  }
};
// ************************Display data other pages**********************
export const showdataformen = (data) => {
  console.log(data);

  const div = document.createElement("div");
  data.map((elem) => {
    const card = document.createElement("div");
    card.innerHTML = `<div>
    <img src="${elem.images}" alt="" />
    <h5>${elem.Title}</h5>
    <p>${elem.Para}</p>
    <div class="price">
      <p>₹${elem.price}</p>
      <p>₹${elem.strikePrice}</p>
      <p>${elem.discount}% off</p>
    </div>
  </div>`;
    card.addEventListener("click", () => {
      console.log(elem);
    });

    div.append(card);
  });

  document.getElementById("container").append(div);
};
function additem(elem) {
  console.log(elem);
}

const DisplayProduct = (elem) => {
  window.location = "productdisplay.html";
  console.log(elem);
  localStorage.setItem("Product", JSON.stringify(elem));
};
