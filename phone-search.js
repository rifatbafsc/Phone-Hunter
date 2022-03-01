const loadPhone= () =>{
    const inputValue = document.getElementById('inputValue').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
    

}

const displayPhone = (phones)=>{
    for (const phone of phones){
        const phoneListContainer = document.getElementById('phone-list-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row  mt-5">
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${phone.image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">Name: ${phone.phone_name}</h5>
                <p class="card-title"> Brand: ${phone.brand}<p>
                <p class="card-title"> Model: ${phone.slug}<p>
                <button onclick="detailsShow('${phone.slug}')" class="btn btn-success" >Specification</button>

                </div>
              </div>
        </div>
        
        `
        phoneListContainer.appendChild(div);     
    }
}

 const detailsShow = (slugId) =>{
     console.log (slugId)
    // const url = `
    // https://openapi.programming-hero.com/api/phone/${id}
    // `;
    // fetch(url)
    // .then(res => res.json())
    // .then( data => console.log(data))
 }