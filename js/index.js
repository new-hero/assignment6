const searchPhone = () => {
    const searchText = document.getElementById('searchBox').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = phones => {
    const containerDiv = document.getElementById('productList');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div class="card h-100 rounded">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">Brand: ${phone.brand}</h5>
                    <a href="#" class="btn btn-primary" onclick="phoneDetailes('${phone.slug}')"> Detailes </a>
                </div>
            </div>
        </div>
        `;
        containerDiv.appendChild(div);
        //console.log(phone)
    });
}

const phoneDetailes = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetailesData(data.data))
}

const phoneDetailesData = phoneId => {
    const DetailesDiv = document.getElementById('phoneDetailes');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row mb-5">
    <div class="col">
        <img src="${phoneId.image}" alt="" class="img-fluid" width="400px">
    </div>
    <div class="col">
        <div class="text-start">
            <h6>Name: ${phoneId.name}</h6>
            <h6>Release Date: ${phoneId.releaseDate}</h6>
        </div>
    </div>
    </div>


    `;
    DetailesDiv.appendChild(div);
    // console.log(phoneId)
}

{/* <div class="col">
        <div class="card h-100" style="width:200px">
            <img src="${phoneId.image}" " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phoneId.name}</h5>
                <h5 class="card-title">Brand: ${phoneId.releaseDate}</h5>
                
            </div>
        </div>
    </div> */}