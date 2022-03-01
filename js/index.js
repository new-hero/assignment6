const searchPhone = () => {
    const searchbox = document.getElementById('searchBox');
    const searchText = searchbox.value.toLowerCase();

    if (searchText == '') {
        alert('Please write something')
    }
    else if (searchText < 0) {
        alert('Write phone name')
    }
    else {
        document.getElementById('spinner').style.display = 'block';

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))

        searchbox.value = '';
    }




}
const displayPhone = phones => {

    const containerDiv = document.getElementById('productList');
    containerDiv.textContent = '';
    const noPhone = document.getElementById('noPhone');
    const seeMore = document.getElementById('seeMore');
    seeMore.classList.add('d-none');

    if (phones.length == 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
        phones?.forEach(phone => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="col">
                <div class="card h-100 rounded">
                    <img src="${phone.image}" class="card-img-top p-4" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <h5 class="card-title my-3">Brand: ${phone.brand}</h5>
                        <a href="#" class="btn btn-success rounded-pill" onclick="phoneDetailes('${phone.slug}')"> Detailes </a>
                    </div>
                </div>
            </div>
            `;
            if (containerDiv.childNodes.length >= 20) {
                seeMore.classList.remove('d-none');
                seeMore.addEventListener('click', () => {
                    containerDiv.appendChild(div);
                })
            }
            else {
                containerDiv.appendChild(div);
            }
        });

    }

    document.getElementById('spinner').style.display = 'none';

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
    <div class="row  row-cols-1 row-cols-lg-2 p-3">
        <div class="col">
            <img src="${phoneId.image}" alt="" class="img-fluid my-5" width="400px">
        </div>
        <div class="col">
            <div class="text-start my-5 p-2">
                <h3> ${phoneId.name}</h3>
                <h4>Brand: ${phoneId.brand ? phoneId.brand : 'Brand No Found'}</h4>
                <h5>Release Date: ${phoneId.releaseDate ? phoneId.releaseDate : 'Release Date Not Found'}</h5>
                <h5>Storage: ${phoneId?.mainFeatures?.storage ? phoneId.mainFeatures.storage : 'Storage Not Found'}</h5>
                <h5>DisplaySize: ${phoneId?.mainFeatures.displaySize} </h5>
                <h5>ChipSet: ${phoneId?.mainFeatures.chipSet} </h5>
                <h5>Memory: ${phoneId?.mainFeatures.memory} </h5>
                <h3>Sensors</h3>
                <h6>${phoneId?.mainFeatures?.sensors ? phoneId.mainFeatures.sensors : 'Not supported'} .</h6>
                <h3>Others </h3>
                <h5>WLAN: ${phoneId.others ? phoneId.others.WLAN : 'Not Support'} </h5>
                <h5>Bluetooth: ${phoneId.others ? phoneId.others.Bluetooth : 'Not Support'} </h5>
                <h5>GPS: ${phoneId.others ? phoneId.others.GPS : 'Not Support'} </h5>
                <h5>NFC: ${phoneId.others ? phoneId.others.NFC : 'Not Support'} </h5>
                <h5>Radio: ${phoneId.other ? phoneId.others.Radio : 'Not Support '} </h5>
                <h5>USB: ${phoneId.others ? phoneId.others.USB : 'Not Support'} </h5>
            </div>
        </div>
    </div>
    <hr class="border border-dark pb-2"> 
    `;
    DetailesDiv.appendChild(div);
}
