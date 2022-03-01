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
            <h3>Name: ${phoneId.name}</h3>
            <h3>Brand: ${phoneId.brand ? phoneId.brand : 'Brand No Found'}</h3>
            <h5>Release Date: ${phoneId.releaseDate ? phoneId.releaseDate : 'Release Date Not Found'}</h5>
            <h5>Storage: ${phoneId?.mainFeatures?.storage ? phoneId.mainFeatures.storage : 'Storage Not Found'}  </h5>
            <h5>DisplaySize: ${phoneId?.mainFeatures.displaySize} </h5>
             <h5>ChipSet: ${phoneId?.mainFeatures.chipSet} </h5>
             <h5>Memory: ${phoneId?.mainFeatures.memory} </h5>
             <h3>Sensors</h3>
             <h3>Others </h3>
             <h5>WLAN: ${phoneId.others ? phoneId.others.WLAN : 'Not'} </h5>
             <h5>Bluetooth: ${phoneId.others ? phoneId.others.Bluetooth : 'Not Support'} </h5>
             <h5>GPS: ${phoneId.others ? phoneId.others.GPS : 'Not Support'} </h5>
             <h5>NFC: ${phoneId.others ? phoneId.others.NFC : 'Not Support'} </h5>
             <h5>Radio: ${phoneId.other ? phoneId.others.Radio : 'Not Support '} </h5>
             <h5>USB: ${phoneId.others ? phoneId.others.USB : 'Not Support'} </h5>
             
        </div>
    </div>
    </div>
    `;
    DetailesDiv.appendChild(div);



}

/* 
    
    <h6>Storage: ${phoneId.}  </h6>
            <h6>DisplaySize: ${phoneId.} </h6>
             <h6>ChipSet: ${phoneId.} </h6>
             <h6>Memory: ${phoneId.} </h6>
             <h2>Sensors </h2>
             <h2>Others </h2>
             <h6>WLAN: ${phoneId.} </h6>
             <h6>Bluetooth: ${phoneId.} </h6>
             <h6>GPS: ${phoneId.} </h6>
             <h6>NFC: ${phoneId.} </h6>
             <h6>Radio: ${phoneId.} </h6>
             <h6>USB: ${phoneId.} </h6>


               <h6>WLAN: ${phoneId.others.WLAN} </h6>
             <h6>Bluetooth: ${phoneId.others} </h6>
             <h6>GPS: ${phoneId.others} </h6>
             <h6>NFC: ${phoneId.others} </h6>
             <h6>Radio: ${phoneId.other} </h6>
             <h6>USB: ${phoneId.others} </h6>

*/