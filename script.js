(function () {
        var barId;
        var buttonVal = [];
        var progressObj;
        var buttonHtml;
        document.getElementById("barSelector").onchange = function (e) {
            barId = this.options[this.selectedIndex].value;
            console.log(barId);
            //updateProgressBar(barId, 10);    
        };

		var barObjs = {
			"progress": ["Progress Bar 1","Progress Bar 2","Progress Bar 3"],
			"buttons": [-25,-10,10,25],
			"bars": [62,45,62],
			"limit": 100
	    };
		
		var barLimit = barObjs["limit"];

		
		var progressOptions = "<option value=''> Select Bar </option>";
		for(progOptId in barObjs["progress"]){
			progressOptions += "<option value='progressbar"+ progOptId +"'>"+ barObjs["progress"][progOptId] +"</option>";
		}
		document.getElementById("barSelector").innerHTML = progressOptions;
		
		var  progressBtns = "";
		for(btnNum in barObjs["buttons"]){
			var valBtn = barObjs["buttons"][btnNum];
			progressBtns += "<button type='button'  value='"+ valBtn+ "' class='progressBtn'/>"+valBtn+"</button>";
		}
		document.getElementById("buttonWrapper").innerHTML = progressBtns;
		
		
       var buttons = document.getElementsByTagName("button");

        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', buttonClickHandler, false);
        }

        function buttonClickHandler(e) {
            //debugger;
            var weight = Number(this.value) + Number(document.getElementById(barId).getAttribute("data-weight"));
            console.log(weight);
            updateProgressBar(barId, weight);
        }
		
		var progresBars = "";

		for(progBarId in barObjs["bars"]){
			var currId = "progressbar"+progBarId;
			var val = barObjs["bars"][progBarId];
			progresBars += "<div id='progressbar"+progBarId+"' data-weight='"+ val +"' class='progressbar'><div id='progress"+progBarId+"' class='progressbar' style='background: orange; width: "+val+"%;'></div></div>"; 
		}
		
		document.getElementById("progressView").innerHTML = progresBars;
		
		
			
        function updateProgressBar(barId, weight) {
            var progressBar = document.getElementById(barId),
                progress = progressBar.children[0], //document.getElementsByClassName('progress')[0],
                parent = progressBar.parentNode,
                duration = 5; //seconds 
            if (weight > barLimit) {
                weight = 100;
                progress.style.background = "red";
            } else {
                progress.style.background = "orange";
            }

            progress.style.width = weight + "%"; //"100%";
            progressBar.setAttribute("data-weight", weight);

        }

        //setTimeout(updateProgressBar, 1000);        
})();