const xiso = document.getElementById("xiso")
const vedzisxevi = document.getElementById("vedzisxevi")
const chigo = document.getElementById("chigo")
const omalo = document.getElementById("omalo")
const shenaqo = document.getElementById("shenaqo")
const dartlo = document.getElementById("dartlo")
const tushetibtn = document.getElementById("headers")
const shtrolta = document.getElementById("shtrolta")



const tusheti = document.getElementById("tusheti")
const xisoinfo = document.getElementById("xisoinfo")
const chigoinfo = document.getElementById("chigoinfo")
const omaloinfo = document.getElementById("omaloinfo")
const dartloinfo = document.getElementById("dartloinfo")
const shenaqoinfo = document.getElementById("shenaqoinfo")
const shtroltainfo = document.getElementById("shtroltainfo")
const menubutton = document.getElementById("menubutton")
const mobilesoflebi = document.getElementById("mobilesoflebi")
const satauri = document.getElementById("satauri")

const soflebisgilakebi = [xiso, chigo, tushetibtn, omalo, shenaqo, dartlo, shtrolta]
const soflebi = [xisoinfo, chigoinfo, tusheti, omaloinfo, shenaqoinfo, dartloinfo, shtroltainfo]

soflebisgilakebi.map((item, index) => {
    item.onclick = function(){
        showVillageInfo(index)
        
    }
})

function showVillageInfo(daklikulisofelisnomeri) {
    soflebi.map((item, i) => {
        if(i === daklikulisofelisnomeri){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
   
}

menubutton.onclick = function(){
    if(mobilesoflebi.style.display==="none"){
        mobilesoflebi.style.display="block"
        satauri.style.display = "none" 
        
    }else{
        mobilesoflebi.style.display="none"
        satauri.style.display = "block" 

    }
}



