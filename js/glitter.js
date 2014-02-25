/*
 *
 *   Glitter - glitter.js v0.1
 *
 */

 var glitter = function(element_id, sm){

    if (element_id && sm)
    {

        var nodes = document.getElementById(element_id).getElementsByTagName("div");
        var margin = sm !== "" && sm !== undefined ? sm : "100";

        var i = 1;

        var spanator = document.getElementById("spanator");
        
        while(i <= nodes.length)
        {
            var spannes = document.createElement("SPAN");
            spannes.innerHTML = i;
            spanator.appendChild(spannes);
            i++;
        }

        var spannil = spanator.getElementsByTagName("span");
        spannil[0].className="current";

        var inicio = nodes[0];
        inicio.style.opacity = "1";
        inicio.style.filter = 'alpha(opacity="100")';

        i = 1;
        document.onkeyup = function(e) 
        {
            switch(e.keyCode)
            {
                case 32 :
                case 39 :
                if(i < nodes.length)
                {
                    if(i > 0)
                    {
                        nodes[i].style.opacity = "1";
                        nodes[i].style.filter = 'alpha(opacity="100")';
                        nodes[i-1].style.marginTop = sm + "px";
                        nodes[i-1].style.opacity = "0";
                        spannil[i-1].className="";
                        spannil[i].className="current";
                    }
                    else
                    {
                        nodes[i].style.opacity = "1";
                        nodes[i].style.filter = 'alpha(opacity="100")';
                        spannil[i].className="current";
                    }
                    
                    i++;
                }
                else 
                {
                    return;
                }
                break;
                
                case 37 :
                if(i <= nodes.length)
                {
                    if(i > 1)
                    {
                        i--;
                        nodes[i].style.opacity="0";
                        nodes[i].style.filter = 'alpha(opacity="0")';
                        nodes[i-1].style.opacity = "1";
                        nodes[i-1].style.filter = 'alpha(opacity="100")';
                        nodes[i-1].style.marginTop="0px";
                        spannil[i].className="";
                        spannil[i-1].className="current";
                    }
                    else
                    {
                        nodes[i-1].style.opacity = "1";
                        nodes[i-1].style.filter = 'alpha(opacity="100")';
                    }
                }
                else 
                {
                    return;
                }
                break;
            }
        }

        document.querySelector("a#glitter-next").onclick = function()
        {

            if(i < nodes.length)
            {
                if(i > 0)
                {
                    nodes[i].style.opacity = "1";
                    nodes[i].style.filter = 'alpha(opacity="100")';
                    nodes[i-1].style.marginTop = sm + "px";
                    nodes[i-1].style.opacity = "0";
                    spannil[i-1].className="";
                    spannil[i].className="current";
                }
                else
                {
                    nodes[i].style.opacity = "1";
                    nodes[i].style.filter = 'alpha(opacity="100")';
                }
                
                i++;
            }
            else 
            {
                return;
            }
        }

        document.querySelector("a#glitter-back").onclick = function()
        {
            if(i <= nodes.length)
            {
                if(i > 1)
                {
                    i--;
                    nodes[i].style.opacity="0";
                    nodes[i].style.filter = 'alpha(opacity="0")';
                    nodes[i-1].style.opacity = "1";
                    nodes[i-1].style.filter = 'alpha(opacity="100")';
                    nodes[i-1].style.marginTop="0px";
                    spannil[i].className="";
                    spannil[i-1].className="current";
                }
                else
                {
                    nodes[i-1].style.opacity = "1";
                    nodes[i-1].style.filter = 'alpha(opacity="100")';
                }
            }
            else 
            {
                return;
            }
        }
    }
}
