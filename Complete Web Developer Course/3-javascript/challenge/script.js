            var t1= new Date;
            var t2= new Date;
            var time;
            var reacttime;
            
            var randomTop;
            var randomLeft;
            
            var shape=[];
            var shapeindex;
            
            var backcolor=[];
            var bcindex;
            
            var randsize;
            

            
            shape=["square","circle"];
            backcolor=["blue","red","yellow","pink","purple"];
                
            t1=Date.now();
            function reappear(){
                
                shapeindex=Math.floor(Math.random()*2);
                
                if (shape[shapeindex]=="circle") {
                
                    document.getElementById("content").style.borderRadius="50%";
                
                } else {
                
                    document.getElementById("content").style.borderRadius="0%";
                };

                randsize=Math.max(50,Math.floor(Math.random()*250));
                bcindex=Math.floor(Math.random()*5);
                randomTop=Math.floor(Math.random()*85);
                randomLeft=Math.floor(Math.random()*85);
                document.getElementById("content").style.height=randsize+"px";
                document.getElementById("content").style.width=randsize+"px";
                document.getElementById("content").style.backgroundColor=backcolor[bcindex];
                document.getElementById("content").style.top=randomTop+"%";
                document.getElementById("content").style.left=randomLeft+"%";
                document.getElementById("content").style.display="block";
                t1=Date.now();
            
            }
            
            document.getElementById("content").onclick=function(){
                
                t2=Date.now();
                reacttime=t2-t1;
                document.getElementById("time").innerHTML=(reacttime/1000)+" seconds";
                time=Math.floor(Math.random()*5000);
                document.getElementById("content").style.display="none"; 
                window.setTimeout(reappear,time);
            
            }
        