const list = document.querySelector('#location')


const body = document.querySelector('body')
const div = document.createElement('div')


body.appendChild(div)
const drawbtns = (boxList) =>{
    div.innerHTML=''
    console.log('starting to drawing')
    boxList.forEach(element => {
        const btn = document.createElement('button')
        btn.textContent=element.boxNumber
        div.appendChild(btn)
        
    });
    
}


const getBoxesList = async () =>{
    console.log('starting req - getBoxesList')
    try{    
        const getReq = await fetch('http://127.0.0.1:2000/')
        const res = await getReq.json()
        await drawbtns(res)
    }
    catch(e){
    console.log(e)
}
}

// const sendBoxesList  = await ()=>{
    
    // }
    list.addEventListener('change',getBoxesList)
    