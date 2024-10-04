
const loadAllPhones = async (status, bName) => {
    document.getElementById("loader").classList.add('d-none');

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${bName ? bName : 'iphone'}`);
        const data = await res.json();
        status ? displayAllPhones(data.data) : displayAllPhones(data.data.slice(0,6));
        
    }
    catch(error){
        console.log(error)
    }

    console.log(status)
}

const displayAllPhones = (phones)=>{
    console.log(phones)
}


const handleShowAll = ()=>{
    loadAllPhones(true);
}



const handleSearch = () => {
    document.getElementById("loader").classList.remove('d-none');
    const searchTxt =  document.getElementById('search-field').value;
    setTimeout(() => {
        loadAllPhones(false, searchTxt);

    }, 2500)
}
