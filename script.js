//Menu Responsivo

let menuVisible = false;

function mostrarOcultarMenu()
{
    if(menuVisible)
    {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else
    {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar()
{
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//Porcentajes Conocimientos

function efectoConocimientos()
{
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().width;
    if(distancia_skills >= 300)
    {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("csharp");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("php"); 
        habilidades[6].classList.add("comunicacion"); 
        habilidades[7].classList.add("trabajoEnEquipo"); 
        habilidades[8].classList.add("creatividad"); 
        habilidades[9].classList.add("dedicacion"); 
        habilidades[10].classList.add("manejoProyectos");        
    }
}


window.onscroll = function()
{
    efectoConocimientos();
}