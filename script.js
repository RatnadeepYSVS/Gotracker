document.body.style.margin='0'
let check = false
const mapty= document.querySelector('#map')
mapty.style.width='98.6vw'
mapty.style.height='92vh'
mapty.style.border='0'
mapboxgl.accessToken = 'pk.eyJ1IjoicmF0bmFkZWVweXN2cyIsImEiOiJja2FodHh6YXEwanJ3Mnl0OXlncDd6NXpuIn0.Ud5z97NZ7P46IcrGerL4LQ';
navigator.geolocation.getCurrentPosition((pos)=>setPos([pos.coords.longitude,pos.coords.latitude]),()=>alert("Please Allow Location Access."),{enableHighAccuracy:true})
const setPos=(cen)=>{
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: cen,
        zoom: 10
    });
    map.addControl(new mapboxgl.NavigationControl());
    let marker=new mapboxgl.Marker().setLngLat(cen).addTo(map)
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
    map.addControl(directions, "top-left")
    var btn= document.querySelector('button')
    let key=document.querySelector('#menu')
    let para = key.querySelector('p')
    btn.addEventListener('click',()=>{
        check=!check
        let style
        if(!check){
            para.innerHTML='Change Layout to Light Mode.'
            style='dark-v10'
            key.style.background='#06090F'
            key.style.color='#fff'
        }
        else{
            para.innerHTML='Change Layout to Dark Mode.'
            style='streets-v10'
            key.style.color='#06090F'
            key.style.background='#fff'
        }
        map.setStyle(`mapbox://styles/mapbox/${style}`)
    })
}