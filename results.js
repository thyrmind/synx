input.oninput = function() {
  setTimeout(function() {
	    a = 0;

	    if (input.value !== "")
		    window.history.pushState('','','?' + "v=" + input.value);
	    else
		    window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	    Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; });

	    if (/\d/.test(input.value))
		    a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);

	    result.innerHTML = a;

    var checkBox = document.getElementById("showidentity");
    if (checkBox.checked == true){
    	    /* ID(Entity) */
	      textset = identity.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        identitycount.innerHTML = matchescount;
	        identitymatch.innerHTML = outputmatch;

	    } else {
	      identitycount.innerHTML = 0;
		  identitymatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showcthulhu");
    if (checkBox.checked == true){
    	    /* The Cthulhu Club */
	      textset = cthulhu.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        cthulhucount.innerHTML = matchescount;
	        cthulhumatch.innerHTML = outputmatch;

	    } else {
	      cthulhucount.innerHTML = 0;
		  cthulhumatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showaxsys");
    if (checkBox.checked == true){
    	    /* AOE / Axsys */
	      textset = axsys.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        axsyscount.innerHTML = matchescount;
	        axsysmatch.innerHTML = outputmatch;

	    } else {
	      axsyscount.innerHTML = 0;
		  axsysmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showatlantis");
    if (checkBox.checked == true){
    	    /* Black Atlantis */
	      textset = atlantis.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        atlantiscount.innerHTML = matchescount;
	        atlantismatch.innerHTML = outputmatch;

	    } else {
	      atlantiscount.innerHTML = 0;
		  atlantismatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showbarker");
    if (checkBox.checked == true){
    	    /* Barker */
	      textset = barker.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        barkercount.innerHTML = matchescount;
	        barkermatch.innerHTML = outputmatch;

	    } else {
	      barkercount.innerHTML = 0;
		  barkermatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showsarkon");
    if (checkBox.checked == true){
    	    /* Sarkon */
	      textset = sarkon.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        sarkoncount.innerHTML = matchescount;
	        sarkonmatch.innerHTML = outputmatch;

	    } else {
	      sarkoncount.innerHTML = 0;
		  sarkonmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showcybergothic");
    if (checkBox.checked == true){
    	    /* Cybergothic */
	      textset = cybergothic.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        cybergothiccount.innerHTML = matchescount;
	        cybergothicmatch.innerHTML = outputmatch;

	    } else {
	      cybergothiccount.innerHTML = 0;
		  cybergothicmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showpandemonium");
    if (checkBox.checked == true){
    	    /* Pandemonium */
	      textset = pandemonium.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        pandemoniumcount.innerHTML = matchescount;
	        pandemoniummatch.innerHTML = outputmatch;

	    } else {
	      pandemoniumcount.innerHTML = 0;
		  pandemoniummatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showqabbala");
    if (checkBox.checked == true){
            /* Qabbala 101 */
          textset = qabbala.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
        if (matchescount !== 0) {
            qabbalacount.innerHTML = matchescount;
            qabbalamatch.innerHTML = outputmatch;

        } else {
          qabbalacount.innerHTML = 0;
          qabbalamatch.innerHTML = "N/A";
        }
    }
    var checkBox = document.getElementById("showcalend");
    if (checkBox.checked == true){
            /* Calendric Dominion */
          textset = calend.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
        if (matchescount !== 0) {
            calendcount.innerHTML = matchescount;
            calendmatch.innerHTML = outputmatch;

        } else {
          calendcount.innerHTML = 0;
          calendmatch.innerHTML = "N/A";
        }
    }
    var checkBox = document.getElementById("showphyl");
    if (checkBox.checked == true){
    	    /* Phyl-Undhu */
	      textset = phyl.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        phylcount.innerHTML = matchescount;
	        phylmatch.innerHTML = outputmatch;

	    } else {
	      phylcount.innerHTML = 0;
		  phylmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showchasm");
    if (checkBox.checked == true){
    	    /* Chasm */
	      textset = chasm.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        chasmcount.innerHTML = matchescount;
	        chasmmatch.innerHTML = outputmatch;

	    } else {
	      chasmcount.innerHTML = 0;
		  chasmmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showcanon");
    if (checkBox.checked == true){
    	    /* Canon Wars */
	      textset = canon.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        canoncount.innerHTML = matchescount;
	        canonmatch.innerHTML = outputmatch;

	    } else {
	      canoncount.innerHTML = 0;
		  canonmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showspiral");
    if (checkBox.checked == true){
    	    /* Open Spiral */
	      textset = spiral.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        spiralcount.innerHTML = matchescount;
	        spiralmatch.innerHTML = outputmatch;

	    } else {
	      spiralcount.innerHTML = 0;
		  spiralmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showdevil");
    if (checkBox.checked == true){
    	    /* Devil's Work */
	      textset = devil.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+26>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+26;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        }
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        devilcount.innerHTML = matchescount;
	        devilmatch.innerHTML = outputmatch;

	    } else {
	      devilcount.innerHTML = 0;
		  devilmatch.innerHTML = "N/A";
	    }
    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
