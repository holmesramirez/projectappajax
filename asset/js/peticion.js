$(document).ready(function(){
    consultarCar()
})


const consultarCar=()=>{
    $.ajax({
        url:'https://g366763e53b3822-sh5rmvnxpcjy1tkh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car',
        type:'GET',
        dataType:'json',
        success:function(response,status,xhr){
           let numreg = response.count
           let data = response.items
           data.forEach(item => {
              console.log(renderizarRegistroCar(item))
           });
        },
        error:function(xhr,status){
            console.log(xhr)
            console.log(status)
        }
    })
}


const mostrarCarConsola=(item)=>{
    return `id:${item.id}
            brand:${item.brand}
            model:${item.model}
            categoria:${item.category_id}
           `
}

const mostrarConsolaClasico=(data,numreg)=>{
    for(let i=0;i<numreg;i++){
        console.log("Carro \n"+
                    data[i].id+"\n"+
                    data[i].model+"\n"+
                    data[i].brand+"\n"+
                    data[i].category_id+"\n"          
        )
   }
}

const renderizarRegistroCar=(item)=>{
    return `<tr>
             <td>${item.id}</td>
             <td>${item.brand}</td>
             <td>${item.model}</td>
             <td>${item.category_id}</td>
             </tr>
           `
}