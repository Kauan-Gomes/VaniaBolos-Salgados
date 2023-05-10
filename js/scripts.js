const temas = document.querySelectorAll("[data-temas]")

    temas.forEach((elemento) => {
        elemento.addEventListener('click', (event)=>{
            const tema = event.target.dataset.temas;
            
            const temaExibido = `#${tema}`;
        
            exibirTemas($(`${temaExibido}`))   
        })
    })

    function exibirTemas(tema) {
        $(".carrosel__trabalho").hide();
        tema.toggle()
        if(tema.is(':visible')){
            $("#fixo").hide();
        }else{
            $("#fixo").show();
        }
        
    }
