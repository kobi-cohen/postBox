const list = document.querySelector('#location')


const body = document.querySelector('body')
const div = document.createElement('div')


body.appendChild(div)
const drawbtns = (boxList) =>{
    div.innerHTML=''
    console.log('starting to drawing')
    boxList.forEach(element => {
        const btn = document.createElement('button')
        btn.addEventListener('click',()=>sendBoxesList({name:element.boxNumber}))
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

const sendBoxesList  = async (data)=>{
        try{
          const req =   await fetch('http://127.0.0.1:2000/updateBox', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
              });
             const res = await req.json() // parses JSON response into native JavaScript objects
              console.log(res.res)
            }

        

        catch(e){
            console.log(e)
        }
    }
    list.addEventListener('change',getBoxesList)
    