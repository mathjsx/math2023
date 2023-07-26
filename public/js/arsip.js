<script>
  $('video').click(function(){this.paused?this.play():this.pause();});
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>




<script>
function parse_timestamp(s) {
	//var match = s.match(/^(?:([0-9]{2,}):)?([0-5][0-9]):([0-5][0-9][.,][0-9]{0,3})/);
	// Relaxing the timestamp format:
	var match = s.match(/^(?:([0-9]+):)?([0-5][0-9]):([0-5][0-9](?:[.,][0-9]{0,3})?)/);
	if (match == null) {
		throw 'Invalid timestamp format: ' + s;
	}
	var hours = parseInt(match[1] || "0", 10);
	var minutes = parseInt(match[2], 10);
	var seconds = parseFloat(match[3].replace(',', '.'));
	return seconds + 60 * minutes + 60 * 60 * hours;
}

// https://w3c.github.io/webvtt/
// https://developer.mozilla.org/en/docs/Web/API/Web_Video_Text_Tracks_Format
// https://en.wikipedia.org/wiki/WebVTT
//
// For better parsers, look at:
// https://github.com/annevk/webvtt
// https://github.com/mozilla/vtt.js
function quick_and_dirty_vtt_or_srt_parser(vtt) {
	var lines = vtt.trim().replace('\r\n', '\n').split(/[\r\n]/).map(function(line) {
		return line.trim();
	});
	var cues = [];
	var start = null;
	var end = null;
	var payload = null;
	for (var i = 0; i < lines.length; i++) {
		if (lines[i].indexOf('-->') >= 0) {
			var splitted = lines[i].split(/[ \t]+-->[ \t]+/);
			if (splitted.length != 2) {
				throw 'Error when splitting "-->": ' + lines[i];
			}

			// Already ignoring anything past the "end" timestamp (i.e. cue settings).
			start = parse_timestamp(splitted[0]);
			end = parse_timestamp(splitted[1]);
		} else if (lines[i] == '') {
			if (start && end) {
				var cue = new VTTCue(start, end, payload);
				cues.push(cue);
				start = null;
				end = null;
				payload = null;
			}
		} else if(start && end) {
			if (payload == null) {
				payload = lines[i];
			} else {
				payload += '\n' + lines[i];
			}
		}
	}
	if (start && end) {
		var cue = new VTTCue(start, end, payload);
		cues.push(cue);
	}

	return cues;
}

function init() {
	// http://www.html5rocks.com/en/tutorials/track/basics/yyy
	// https://www.iandevlin.com/blog/2015/02/javascript/dynamically-adding-text-tracks-to-html5-video
	var video = document.querySelector('video');
	var subtitle = document.getElementById('subtitle');
	var track = video.addTextTrack('subtitles', subtitle.dataset.label, subtitle.dataset.lang);
	track.mode = "showing";
	quick_and_dirty_vtt_or_srt_parser(subtitle.innerHTML).map(function(cue) {
		track.addCue(cue);
	});
}
init();
</script>













<div class="footer">
			<p>Copyright © Irzal Achmad <script>document.write(new Date().getFullYear());</script> </p>
			</p><br>
			
</div>







<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz45F8SMN9OXopec06yeCpeUOKmixCvxEcOoZrU67GtJt01LwfY5Hh69AfqxghqFq2ATQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert= document.querySelector('.my-alert');
     form.addEventListener('submite', e => {
       e.preventDefault();
      btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');


      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>
        {
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            playerScore = 0;
            console.log('Success!', response)
        } )
        .catch(error => console.error('Error!', error.message))
    })
  </script>
	<script>
	function resetform(){
		form.reset();
		playerScore = 0 ;
		document.getElementById("player-score-form").value=0;
	}
	</script>
	

<script src="js/wheelzoom.js"></script>
<script>
	wheelzoom(document.querySelector('img.zoom'));

	wheelzoom(document.querySelector('img.zoom2'));


</script>

<script language="javascript">
 	var today = new Date();
	document.getElementById('time').innerHTML=today;
</script>


<script>
    const questions = [
        {
        question: "Persamaan kuadrat yang melalui dua titik potong dengan sumbu x yakni (x1,0) dan (x2,0) adalah",
        optionA: "y=a(x-x1)(x-x2)",
        optionB: "y=a(x-x1)(x+x2)",
        optionC: "y=a(x+x1)(x+x)",
        optionD: "y=(x+x1)(x-x2) ",
        correctOption: "optionA"
    },

    {
        question: "Dalam persamaan kuadrat, jika nilai D>0 maka grafik  ?",
        optionA: "tidak memotong sumbu x",
        optionB: "memotong sumbu x didua titik",
        optionC: "memotong sumbu x disatu titik",
        optionD: "tidak bisa ditentukan dengan nilai D",
        correctOption: "optionB"
    },

    {
      question: "Kontraposisi dari : Jika covid berbahaya maka semua orang takut covid",
      optionA: "jika covid tidak berbahaya maka semua orang tidak takut covid",
      optionB: "jika ada yang takut covid, maka covid tidak berbahaya",
      optionC: "jika covid berbahaya, maka semua orang tidak takut covid",
      optionD: "jika semua orang takut covid maka covid tidak berbahaya",
      correctOption: "optionB"
  },

    {
        question: "Grafik sinus pada kuadran IV  ",
        optionA: "naik",
        optionB: "turun",
        optionC: "datar",
        optionD: "tak tentu",
        correctOption: "optionA"
    },

    
    {
      question: "negasi dari pernyataan : matematika tidak sulit atau membosankan , adalah  ",
      optionA: "matematika sulit dan tidak membosankan",
      optionB: "matematika sulit atau membosankan ",
      optionC: "matematika tidak sulit dan tidak membosankan",
      optionD: "matematika tidak sulit melainkan membosankan",
      correctOption: "optionA"
  },

      
  {
    question: "kesimpulan silogisme dari argumen berikut: jika p maka q dan jika q maka r  , adalah",
    optionA: "jika p maka r",
    optionB: "jika ~p maka ~r ",
    optionC: "jika r maka p",
    optionD: "jika ~r maka ~q",
    correctOption: "optionA"
},

    {
        question: "persamaan kuadrat yang akar akarnya 2 dan 3 adalah  ",
        optionA: "x&#178+5x+6",
        optionB: "x&#178-5x+6",
        optionC: "x&#178+5x-6",
        optionD: "x&#178-5x-6",
        correctOption: "optionB"
    },

 {
        question: "persamaan lingkaran yang berpusat P(2,3) dan jari-jarinya 5 adalah  ",
        optionA: "x&#178+y&#178+4x+6y=25",
        optionB: "x&#178+y&#178-4x-6y-12=0",
        optionC: "x&#178+y&#178-4x-6y=25",
        optionD: "x&#178+y&#178+4x-6y=25",
        correctOption: "optionB"
    },

    {
        question: "jika tripel phytagoras adalah {3,4,5} maka maka salah satu sinusnya adalah ",
        optionA: "1/3",
        optionB: "3/5",
        optionC: "4/3",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "sisi terpanjang atau garis miring dari tripel phytagoras {3,4,5} adalah",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctOption: "optionC"
    },

    {
        question: "Jumlah sudut-sudut dalam segitiga adalah",
        optionA: "30&#176",
        optionB: "90&#176",
        optionC: "180&#176",
        optionD: "360&#176",
        correctOption: "optionC"
    },

    {
        question: "Nilai sin 30&#176 , sin 45&#176 , sin 60&#176 , berturut-turut adalah",
        optionA: "1/2,1/3,1/4",
        optionB: "1/2,1/3.&#8730;2;1/3.&#8730;3",
        optionC: "1/2,1/2.&#8730;2;1/2.&#8730;3 ",
        optionD: "1/2,1/2.&#8730;3;1/2.&#8730;2",
        correctOption: "optionC"
    },
	     {
        question: "Nilai sin 210&#176 , sin 225&#176 , sin 240&#176 , berturut-turut adalah",
        optionA: "1/2,1/3,1/4",
        optionB: "-1/2,-1/3.&#8730;2;1/3.&#8730;3",
        optionC: "-1/2,-1/2.&#8730;2;-1/2.&#8730;3 ",
        optionD: "1/2,1/2.&#8730;3;1/2.&#8730;2",
        correctOption: "optionC"
    },
	    
 {
        question: ".. sin 135&#176  adalah",
        optionA: "1/2",
        optionB: "-1/2",
        optionC: "1/2.&#8730;2 ",
        optionD: "1/2.&#8730;3",
        correctOption: "optionC"
    },

	    
 {
        question: ".. tan 225&#176  adalah",
        optionA: "-1",
        optionB: "-1/2",
        optionC: "1/2.&#8730;2 ",
        optionD: "1",
        correctOption: "optionD"
    },

	    
    {
        question: "dalam segitiga siku siku, jika sudut alpha 30 derajat, maka sudut beta adalah",
        optionA: "10&#176",
        optionB: "60&#176",
        optionC: "80&#176",
        optionD: "90 &#176",
        correctOption: "optionB"
    },

    {
        question: "Jumlah sudut alpha dan sudut beta dalam segitiga siku-siku adalah",
        optionA: "30 &#176",
        optionB: "60 &#176",
        optionC: "90 &#176",
        optionD: "180&#176",
        correctOption: "optionC"
    },

    {
        question: "Sudut 180 derajat jika dikonversi ke radian adalah",
        optionA: "2&#8508",
        optionB: "1&#8508",
        optionC: "1/2.&#8508",
        optionD: "1/3.&#8508",
        correctOption: "optionB"
    },

    {
        question: "Sudut 30 derajat jika dikonversi ke radian adalah",
        optionA: "1/3.&#8508",
        optionB: "1/4.&#8508",
        optionC: "1/6.&#8508",
        optionD: "1/9.&#8508",
        correctOption: "optionC"
    },

    {
        question: "Sin 30 = ",
        optionA: "cos 60",
        optionB: "cos 30",
        optionC: "cos 45",
        optionD: "cos 90",
        correctOption: "optionA"
    },

    {
        question: "sin A dan cos A dikuadran 1 memiliki tanda ",
        optionA: "positif dan positif",
        optionB: "negatif dan negatif",
        optionC: "positif dan negatif",
        optionD: "negatif dan positif",
        correctOption: "optionA"
    },

    {
        question: "sin dan cos dibawah ini yang nilainya 1/2 , kecuali ?",
        optionA: "cos 60",
        optionB: "sin 30",
        optionC: "sin 150",
        optionD: "cos 120",
        correctOption: "optionD"
    },

    {
        question: "sudut 380 berada di kuadran ... ?",
        optionA: "I",
        optionB: "II",
        optionC: "III",
        optionD: "IV",
        correctOption: "optionA"
    },
  {
        question: "sin 40=...",
        optionA: "sin 30",
        optionB: "sin 45",
        optionC: "sin 60",
        optionD: "sin 140",
        correctOption: "optionD"
    },

    {
        question: "..  perbandingan sisi samping dengan sisi depan adalah",
        optionA: "sin ",
        optionB: "cos",
        optionC: "cot",
        optionD: "tan",
        correctOption: "optionC"
    },
     {
        question: "..  7/6.&#8508 rad jika dikonversi ke derajat adalah",
        optionA: "120",
        optionB: "210",
        optionC: "300",
        optionD: "310",
        correctOption: "optionB"
    },
    
    {
        question: ".. Sudut 150 derajat jika dikonversi ke radian adalah",
        optionA: "2/3.&#8508",
        optionB: "1/5.&#8508",
        optionC: "5/6.&#8508",
        optionD: "5/9.&#8508",
        correctOption: "optionC"
    },
    {
        question: "sin(180 + 30) =...",
        optionA: "sin 30",
        optionB: "-sin 30",
        optionC: "sin 60",
        optionD: "-sin 60",
        correctOption: "optionB"
    },

    {
        question: "sin(90-30)=...",
        optionA: "cos 30",
        optionB: "sin 30",
        optionC: "tan 30",
        optionD: "cot 30",
        correctOption: "optionA"
    },

    {
        question: "Jika sisi miring segitiga siku sama dengan 1 , maka sisi didepan sudut A sama dengan ...",
        optionA: "cos A",
        optionB: "sin A",
        optionC: "tan A",
        optionD: "csc A",
        correctOption: "optionB"
    },
 {
        question: ".. Sudut 90 derajat jika dikonversi ke radian adalah",
        optionA: "2/7 rad",
        optionB: "11/7 rad",
        optionC: "6/5 rad",
        optionD: "1/2. rad",
        correctOption: "optionB"
    },

    {
        question: "Diketahui sisi-sisi segitiga masing masing a=7, b=24 dan c=25.Keliling segitiga ini sama dengan ...",
        optionA: "28",
        optionB: "38",
        optionC: "56",
        optionD: "60",
        correctOption: "optionC"
    },
   
    {
        question: "Diketahui sisi-sisi segitiga masing masing a=7, b=24 dan c=25. Luas segitiga ini sama dengan ...",
        optionA: "80",
        optionB: "68",
        optionC: "84",
        optionD: "100",
        correctOption: "optionC"
    },
   
    {
        question: "sin(-30) =...",
        optionA: "sin(180+60)",
        optionB: "sin(360-30)",
        optionC: "sin(360+30)",
        optionD: "sin(180-30)",
        correctOption: "optionB"
    },

    {
        question: "sin 45=...",
        optionA: "cos 45",
        optionB: "-cos 45",
        optionC: "cos -145",
        optionD: "1/2.sin(90)",
        correctOption: "optionA"
    },

    {
        question: "sin 45.cos 45",
        optionA: "1/2",
        optionB: "1/4",
        optionC: "1",
        optionD: "1/4.&#8730;6",
        correctOption: "optionA"
    },

    {
        question: "sin 30.cos 60",
        optionA: "1/2",
        optionB: "1/4",
        optionC: "1/3",
        optionD: "1/4.&#8730;6",
        correctOption: "optionB"
    },

    {
        question: "sin 30 . cos 45 adalah ",
        optionA: "1/4.&#8730;2",
        optionB: "1/4.&#8730;3",
        optionC: "1/6",
        optionD: "1/6.&#8730;6",
        correctOption: "optionA"
    },

    {
        question: "sudut 114,6 &#176 jika dikonversi ke radian sama dengan ",
        optionA: "1 rad",
        optionB: "1,5 rad",
        optionC: "2 rad",
        optionD: "1/2 rad",
        correctOption: "optionC"
    },

    {
        question: "cos 30 . sin 45 adalah ",
        optionA: "1/4.&#8730;2",
        optionB: "1/4.&#8730;3",
        optionC: "1/2",
        optionD: "1/4.&#8730;6",
        correctOption: "optionD"
    },

	    
    {
        question: "sin 150 . tan 225 = ",
        optionA: "1/4",
        optionB: "1/3.&#8730;3",
        optionC: "1/2",
        optionD: "1/3",
        correctOption: "optionB"
    },
	    	    
    {
        question: "cos 60 + sin 210 +  tan 225 = ",
        optionA: "1/2",
        optionB: "&#8730;3",
        optionC: "3/2",
        optionD: "1",
        correctOption: "optionD"
    },
	    

	    
    {
        question: "yang termasuk sudut istimewa, kecuali ",
        optionA: "30",
        optionB: "45",
        optionC: "60",
        optionD: "75",
        correctOption: "optionD"
    },

    {
        question: "jika sin A = 1/2 maka csc A adalah ?",
        optionA: "1/3",
        optionB: "2",
        optionC: "3",
        optionD: "1/4",
        correctOption: "optionB"
    },
    
    {
        question: "jika tan A = 2/3 maka sinA.cos A adalah ?",
        optionA: "2/13",
        optionB: "5/13",
        optionC: "6/13",
        optionD: "8/13",
        correctOption: "optionC"
    },

	     {
        question: "..jika cos A = 3/5 maka sec A adalah ?",
        optionA: "4/3",
        optionB: "5/3",
        optionC: "5/2",
        optionD: "5/6",
        correctOption: "optionB"
    },
	    
    {
        question: "sin 15  adalah ",
        optionA: "sin 45. cos 30 - cos 45 . sin 30",
        optionB: "sin 45. cos 30 + cos 45 . sin 30",
        optionC: "sin 45. sin 30 - cos 45 . cos 30",
        optionD: "sin 45. sin 30 + cos 45 . cos 30",
        correctOption: "optionA"
    },

    {
        question: "cos A=-1, maka besar sudut A adalah  ",
        optionA: "0",
        optionB: "90",
        optionC: "180",
        optionD: "270",
        correctOption: "optionC"
    },

    {
        question: "cos 0 , cos 90 dan cos 180 berturut-turut adalah ",
        optionA: "0,1,-1",
        optionB: "1,0,-1/2",
        optionC: "1,0,-1",
        optionD: "0,1,0",
        correctOption: "optionC"
    },

    {
        question: "jika sec A= 3/2 maka cos A=... ?",
        optionA: "2",
        optionB: "2/3",
        optionC: "1/3",
        optionD: "1/4",
        correctOption: "optionB"
    },

    {
        question: "tan 45 =  ",
        optionA: "1",
        optionB: "1/2",
        optionC: "1/2.&#8730;2",
        optionD: "&#8730;2",
        correctOption: "optionA"
    },

    {
        question: "cos 60 + sin 30 = ... ",
        optionA: "2",
        optionB: "1",
        optionC: "0",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "jika sin A = 0,6 dan cos A = 0,8 maka tan A= ... ",
        optionA: "3/4",
        optionB: "5/3",
        optionC: "3/5",
        optionD: "4/3",
        correctOption: "optionA"
    }, 

    {
        question: "jika cos A = 0,6 dan sin A = 0,8 maka tan A= ... ",
        optionA: "3/4",
        optionB: "5/3",
        optionC: "3/5",
        optionD: "4/3",
        correctOption: "optionD"
    }, 

    {
        question: "jika cos A=3/5 maka sec A = ",
        optionA: "5/4",
        optionB: "5/3",
        optionC: "3/5",
        optionD: "4/3",
        correctOption: "optionB"
    },

    {
        question: "jika sin A=3/5 maka csc A = ",
        optionA: "5/4",
        optionB: "5/3",
        optionC: "3/4",
        optionD: "4/3",
        correctOption: "optionB"
    },

    {
        question: "Luas segitiga sama sisi dengan sisi = 4  adalah ",
        optionA: "12",
        optionB: "6",
        optionC: "24",
        optionD: " &#8730;48 ",
        correctOption: "optionD"
    },

    {
        question: "Luas segitiga dengan sisi-sisi :  5 , 4 ,7   adalah ",
        optionA: "&#8730;90",
        optionB: "6",
        optionC: "8",
        optionD: " 4 &#8730;6 ",
        correctOption: "optionD"
    },
    {
        question: "jika tan A=3/4 maka cot A=",
        optionA: "3/5",
        optionB: "4/5",
        optionC: "4/3",
        optionD: "5/3",
        correctOption: "optionC"
    },

    {
        question: "fungsi y=sin x dikuadran I ",
        optionA: "naik",
        optionB: "turun",
        optionC: "tetap",
        optionD: "naik turun",
        correctOption: "optionA"
    },

    {
        question: "fungsi y=cos x dikuadran I ",
        optionA: "naik",
        optionB: "turun",
        optionC: "tetap",
        optionD: "naik turun",
        correctOption: "optionB"
    },


    {
        question: "Dalam segitiga bukan siku, jika a dan b diketahui maka c ditentukan dengan ... ",
        optionA: "teorema phytagoras",
        optionB: "tripel phytagoras",
        optionC: "aturan cosinus",
        optionD: "aturan sinus",
        correctOption: "optionC"
    },
    
    {
        question: "perbandingan antara sisi depan dengan sisi samping adalah definisi dari  ",
        optionA: "sin",
        optionB: "cos",
        optionC: "tan",
        optionD: "cot",
        correctOption: "optionC"
    },

    {
        question: "jika cos A=7/25 maka sec A =   ",
        optionA: "25/24",
        optionB: "25/7",
        optionC: "24/25",
        optionD: "7/24",
        correctOption: "optionB"
    },

    {
        question: "kebalikan  dari sin adalah  ",
        optionA: "csc",
        optionB: "sec",
        optionC: "cot",
        optionD: "cos",
        correctOption: "optionA"
    },

    {
        question: "cos 0 =  ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "cos 270   =  ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "1/2",
        correctOption: "optionA"
    },

    {
        question: "sin 30=...  ",
        optionA: "-sin 120",
        optionB: "sin 210",
        optionC: "-sin 330",
        optionD: "sin-30",
        correctOption: "optionC"
    },

    {
        question: "jika sin A diketahui, maka cos A dapat ditentukan dengan ",
        optionA: "identitas trigonometri",
        optionB: "tripel phytagoras",
        optionC: "aturan cosinus",
        optionD: "aturan sinus",
        correctOption: "optionA"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3,4,3 adalah",
        optionA: "5 ",
        optionB: "4",
        optionC: "3",
        optionD: " &#8730;20 ",
        correctOption: "optionD"
    },
   
    {
        question: "grafik sinus naik pada kuadran ...",
        optionA: "I dan II ",
        optionB: "I dan III",
        optionC: "I dan III",
        optionD: "I dan IV ",
        correctOption: "optionD"
    },

    {
        question: "Bentuk lain aturan sinus",
        optionA: "a : b = sin A : sin B",
        optionB: "a : b = sin B : sin A",
        optionC: "a : sin B = b : sin A",
        optionD: "a : sin A = sin B : b",
        correctOption: "optionA"
    },

    {
        question: "sudut 120 berada dikuadran ...",
        optionA: "I",
        optionB: "II",
        optionC: "III",
        optionD: "IV",
        correctOption: "optionB"
    },

    {
        question: "sin 45 =  ,",
        optionA: "cos 45",
        optionB: "cos 135",
        optionC: "cos 225",
        optionD: "cos -45",
        correctOption: "optionA"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3 , 4 dan 5 adalah",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "8",
        correctOption: "optionB"
    },
    {
        question: 'Vektor adalah besaran yang memiliki ',
        optionA: "arah",
        optionB: "arah dan nilai",
        optionC: "nilai ",
        optionD: "nilai dan ukuran ",
        correctOption: "optionB"
    },

    {
        question: 'dibawah ini besaran vektor, kecuali',
        optionA: "kecepatam mobil",
        optionB: "arah angin",
        optionC: "jumlah siswa dalam kelas",
        optionD: "dorongan mesin",
        correctOption: "optionC"
    },

    {
        
        question: 'vektor satuan arah x+ adalah',
        optionA: 'i',
        optionB: "j",
        optionC: "k",
        optionD: "-i",
        correctOption: "optionA"
    },

    {
        question: "besar i adalah  ",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        optionD: "3",
        correctOption: "optionB" 
    },

    {
        question: "jika vektor a bergerak 5 satuan  ke x+ ditulis ",
        optionA: "2i",
        optionB: "4i",
        optionC: "5i",
        optionD: "9i",
        correctOption: "optionC"
    },

    {
        question: 'arah vektor v=3i+3j',
        optionA: "30&#176",
        optionB: "45&#176",
        optionC: "180&#176",
        optionD: "360&#176",
        correctOption: "optionB"
    },

    {
        question: 'arah vektor v=2i+2j',
        optionA: "30&#176",
        optionB: "45&#176",
        optionC: "180&#176",
        optionD: "360&#176",
        correctOption: "optionB"
    },

    {
        question: "jika a=5i dan b=3i+2j maka a+2b adalah",
        optionA: "8i+2j",
        optionB: "11i+4j",
        optionC: "11j+2j",
        optionD: "8i",
        correctOption: "optionB"
    },

    {
        question: "jika a=5i-2j dan b=3i+2j maka a-2b adalah",
        optionA: "2i+4j",
        optionB: "i+4j",
        optionC: "i-6j",
        optionD: "-i-6j",
        correctOption: "optionD"
    },

    {
        question: "jika a=i+3j maka 4a adalah",
        optionA: "4i+3j",
        optionB: "i+7j",
        optionC: "4i+12j",
        optionD: "4i-12j",
        correctOption: "optionC"
    },

    {
        question: "jika c=2i+3j maka c.c adalah",
        optionA: "&#8730;13",
        optionB: "13",
        optionC: "5",
        optionD: "7",
        correctOption: "optionB"
    },

    {
        question: "jika a=4i+3j maka a.a adalah",
        optionA: "&#8730;12",
        optionB: "13",
        optionC: "25",
        optionD: "5",
        correctOption: "optionC"
    },

    {
        question: "jika d=5i+12j maka besar d adalah",
        optionA: "11",
        optionB: "12",
        optionC: "13",
        optionD: "25",
        correctOption: "optionC"
    },

    {
        question: "jika a=3i+2j dan b=2i-5j maka b-a adalah",
        optionA: "-i-7j",
        optionB: "i-7j",
        optionC: "-i+3j",
        optionD: "i-3j",
        correctOption: "optionA"
    },

    {
        question: "i.j=? ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "2",
        correctOption: "optionA"
    },

    {
        question: "(3i+5j).(2i-j)",
        optionA: "6i+j",
        optionB: "6i-5j",
        optionC: "6i+5j",
        optionD: "1",
        correctOption: "optionD"
    },

    {
        question: "jika anak panah dengan kecepatan v=20 satuan , melesat keatas dengan sudut 60, maka kecepatan bayangannya",
        optionA: "10",
        optionB: "12",
        optionC: "15",
        optionD: "20",
        correctOption: "optionA"
    },

    {
        question: "arah vektor a=2i+5j adalah",
        optionA: "arc tan 5/4",
        optionB: "arc tan 5/2",
        optionC: "arc tan 2/5",
        optionD: "arc tan 5/4",
        correctOption: "optionB"
    },
    {
        question: "besar vektor satuan a=3i+4j adalah ",
        optionA: "3i+4j",
        optionB: "(3/5)i+(4/5)j",
        optionC: "5",
        optionD: "5i",
        correctOption: "optionB"
    },

    {
        question: "jika b=2i maka besar vektor satuannya adalah",
        optionA: "i",
        optionB: "2i",
        optionC: "2",
        optionD: "1",
        correctOption: "optionA"
    },

    {
        question: "jika a=5j , b=i-j , c= 2i maka besar d=a+b+c  adalah",
        optionA: "3",
        optionB: "5",
        optionC: "7",
        optionD: "8",
        correctOption: "optionB"
    },

    {
        question: "jika a=5i , b=-2j , c= 2i maka besar vektor a+b+c  adalah",
        optionA: "5i-2j",
        optionB: "7i-2j",
        optionC: "7i+2j",
        optionD: "5i",
        correctOption: "optionB"
    },

    {
        question: "Sebuah benda dtarik oleh  2 gaya (F) yaitu F1=3i+4j dan F2=-2j maka resultannya adalah",
        optionA: "3i+5j",
        optionB: "3i+2j",
        optionC: "3i-2j",
        optionD: "5i-j",
        correctOption: "optionB"
    },

    {
        question: "besar/nilai vektor a=-2i-5j adalah",
        optionA: "&#8730;20",
        optionB: "&#8730;29",
        optionC: "&#8730;21",
        optionD: "&#8730;50",
        correctOption: "optionB"
    },
    
    {
        question: "Susunan bilangan dalam bentuk baris dan kolom diantara dua garis vertikal disebut ...?",
        optionA: "deret",
        optionB: "tabel",
        optionC: "matrik",
        optionD: "barisan",
        correctOption: "optionC"
    },

    {
        question: "jenis matrik yang hanya terdiri atas 1 baris disebut...",
        optionA: "matrik identitas",
        optionB: "matrik kolom",
        optionC: "matrik baris",
        optionD: "matrik nol",
        correctOption: "optionC"
    },

    {
        question: "matrik berordo 2 x 3 hanya dapat dijumlah/dikurang  dengan matrik berordo",
        optionA: " 2 x 3 ",
        optionB: "2 x 2",
        optionC: "3 x 2",
        optionD: "3 x 3",
        correctOption: "optionA"
    },

    {
        question: "perkalian dua matrik A dan B  dapat terjadi jika... ?",
        optionA: "jumlah baris A = jumlah baris B",
        optionB: "jumlah baris A= jumlah kolom B",
        optionC: "semua matrik dapat dikalikan",
        optionD: "jumlah kolom A = jumlah baris B",
        correctOption: "optionD"
    },

    {
        question: "jika ordo A adalah 2 x 4 sedangkan ordo B: 4 x 1  maka ordo hasil perkaliannya adalah...?",
        optionA: "2 x 2",
        optionB: "2 x 1",
        optionC: "2 x 4",
        optionD: "4 x 4",
        correctOption: "optionB"
    },

    {
        question: "jika ordo A adalah 3 x 3 sedangkan ordo B: 3 x 3  maka ordo hasil perkaliannya adalah...?",
        optionA: "2 x 2",
        optionB: "3 x 3",
        optionC: "4 x 4",
        optionD: "9 x 9",
        correctOption: "optionB"
    },

    {
        question:  "invers dari matrik A sama dengan ",
        optionA: "adj A + det A",
        optionB: "adj A x det A",
        optionC: "adj A / det A",
        optionD: "adj A - det A",
        correctOption: "optionC"
    },
    {
        question:  "jika minor 12 adalah -4 maka cofaktor 12 adalah",
        optionA: "-4",
        optionB: "4",
        optionC: "12",
        optionD: "3",
        correctOption: "optionB"
    },
  
    {
        question:  "jika matrik A dikali matrik B sama dengan 1, maka B adalah ",
        optionA: "minor A",
        optionB: "invers A",
        optionC: "transpose A",
        optionD: "cofaktor A",
        correctOption: "optionB"
    }, 
   
    {
        question:  "urutan menentukan invers adalah ",
        optionA: "minor , transpose, cofaktor",
        optionB: "minor, cofaktor,transpose",
        optionC: "transpose, cofaktor,minor",
        optionD: "cofaktor,minor,transpose",
        correctOption: "optionB"
    }
   
    ]
  
    
    let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions
    
    function handleQuestions() { 
        //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
        while (shuffledQuestions.length <= 39) {
            const random = questions[Math.floor(Math.random() * questions.length)]
            if (!shuffledQuestions.includes(random)) {
                shuffledQuestions.push(random)
            }
        }
    }
    
    
    let questionNumber = 1 //holds the current question number
    let playerScore = 0  //holds the player score
    let wrongAttempt = 0 //amount of wrong answers picked by player
    let indexNumber = 0 //will be used in displaying next question
    
    // function for displaying next question in the array to dom
    //also handles displaying players and quiz information to dom
    function NextQuestion(index) {
        handleQuestions()
        const currentQuestion = shuffledQuestions[index]
        document.getElementById("question-number").innerHTML = questionNumber
        document.getElementById("player-score").innerHTML = playerScore
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
        document.getElementById("player-score-form").value= 100*playerScore/40 
    }
    
    
    function checkForAnswer() {
        const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
        const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
        const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
        let correctOption = null
    
        options.forEach((option) => {
            if (option.value === currentQuestionAnswer) {
                //get's correct's radio input with correct answer
                correctOption = option.labels[0].id
            }
        })
    
        //checking to make sure a radio input has been checked or an option being chosen
        if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
            document.getElementById('option-modal').style.display = "flex"
        }
    
        //checking if checked radio button is same as answer
        options.forEach((option) => {
            if (option.checked === true && option.value === currentQuestionAnswer) {
                document.getElementById(correctOption).style.backgroundColor = "green"
                playerScore++ //adding to player's score
                indexNumber++ //adding 1 to index so has to display next question..
                //set to delay question number till when next question loads
                setTimeout(() => {
                    questionNumber++
                }, 1000)
            }
    
            else if (option.checked && option.value !== currentQuestionAnswer) {
                const wrongLabelId = option.labels[0].id
                document.getElementById(wrongLabelId).style.backgroundColor = ""
                document.getElementById(correctOption).style.backgroundColor = ""
                wrongAttempt++ //adds 1 to wrong attempts 
                indexNumber++
                //set to delay question number till when next question loads
                setTimeout(() => {
                    questionNumber++
                }, 1000)
            }
        })
    }
    
    
    
    //called when the next button is called
    function handleNextQuestion() {
        checkForAnswer() //check if player picked right or wrong option
        unCheckRadioButtons()
        //delays next question displaying for a second just for some effects so questions don't rush in on player
        setTimeout(() => {
            if (indexNumber <= 39) {
    //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
                NextQuestion(indexNumber)
            }
            else {
                handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
            }
            resetOptionBackground()
        }, 1000);
    }
    
    //sets options background back to null after display the right/wrong colors
    function resetOptionBackground() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).style.backgroundColor = ""
        })
    }
    
    // unchecking all radio buttons for next question(can be done with map or foreach loop also)
    function unCheckRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }
    
    // function for when all questions being answered
    function handleEndGame() {
        let remark = null
        let remarkColor = null
    
        // condition check for player remark and remark color
        if (playerScore <= 21) {
            remark = "Kurang, C"
            remarkColor = "red"
        }
        else if (playerScore >= 22 && playerScore < 31) {
            remark = "Cukup , B"
            remarkColor = "orange"
        }
        else if (playerScore >= 31) {
            remark = "Excellent , baik , A"
            remarkColor = "green"
        }
        const playerGrade = (playerScore / 40) * 100
    
        //data to display to score board
        document.getElementById('remarks').innerHTML = remark
        document.getElementById('remarks').style.color = remarkColor
        document.getElementById('grade-percentage').innerHTML = playerGrade
        document.getElementById('wrong-answers').innerHTML = wrongAttempt
        document.getElementById('right-answers').innerHTML = playerScore
        document.getElementById('score-modal').style.display = "flex"
        document.getElementById('grade-percentage-form').value = playerGrade
    }
    
    //closes score modal, resets game and reshuffles questions
    function closeScoreModal() {
        questionNumber = 1
        playerScore = 0
        wrongAttempt = 0
        indexNumber = 0
        shuffledQuestions = []
        NextQuestion(indexNumber)
        document.getElementById('score-modal').style.display = "none"
    }
    
    //function to close warning modal
    function closeOptionModal() {
        document.getElementById('option-modal').style.display = "none"
    }
    </script>

    <script>
      
    function kirim2() {
      let poin=0
      const jno71=document.querySelector('#jno71')
      const jno72=document.querySelector('#jno72')
      const jno73=document.querySelector('#jno73')
      const jno74=document.querySelector('#jno74')
      const jno75=document.querySelector('#jno75')
      const jno76=document.querySelector('#jno76')
      const jno77=document.querySelector('#jno77')
      const jno78=document.querySelector('#jno78')
      const jno79=document.querySelector('#jno79')
      const jno80=document.querySelector('#jno80')
      const jno81=document.querySelector('#jno81')
      const jno82=document.querySelector('#jno82')
      const jno83=document.querySelector('#jno83')
      const jno84=document.querySelector('#jno84')
      const jno85=document.querySelector('#jno85')
      const jno86=document.querySelector('#jno86')
      const jno87=document.querySelector('#jno87')
      const jno88=document.querySelector('#jno88')
      const jno89=document.querySelector('#jno89')
      const jno90=document.querySelector('#jno90')   
      const jno91=document.querySelector('#jno91')   
      const jno92=document.querySelector('#jno92')   
      const jno93=document.querySelector('#jno93')   
      const jno94=document.querySelector('#jno94')   
      const jno95=document.querySelector('#jno95') 
      const jno121=document.querySelector('#jno121')   
      const jno122=document.querySelector('#jno122')   
      const jno123=document.querySelector('#jno123')   
      const jno124=document.querySelector('#jno124')   
      const jno125=document.querySelector('#jno125')   
      const jno126=document.querySelector('#jno126')   
      const jno127=document.querySelector('#jno127')   
      const jno128=document.querySelector('#jno128')   
      const jno129=document.querySelector('#jno129') 
      const jno130=document.querySelector('#jno130') 
  

      const sno121=document.querySelector('#sno121')
      const sno122=document.querySelector('#sno122')
      

      const nilaik2=document.querySelector('#nilaik2') 

      if (jno71.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno71.innerHTML=response
      
      if (jno72.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno72.innerHTML=response

      if (jno73.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno73.innerHTML=response
      
      if (jno74.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno74.innerHTML=response
      
      if (jno75.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno75.innerHTML=response
      
      if (jno76.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno76.innerHTML=response
      
      if (jno77.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno77.innerHTML=response
      
      if (jno78.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno78.innerHTML=response
      
      if (jno79.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno79.innerHTML=response
      
      if (jno80.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno80.innerHTML=response
      
      if (jno81.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno81.innerHTML=response
      
      if (jno82.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno82.innerHTML=response
      
      if (jno83.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno83.innerHTML=response
      
      
      if (jno84.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno84.innerHTML=response
      
      if (jno85.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno85.innerHTML=response
      
      if (jno86.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno86.innerHTML=response
      
      if (jno87.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno87.innerHTML=response
      
      if (jno88.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno88.innerHTML=response
      
      if (jno89.checked){
        response="ok"
        poin=poin+10
      }else {
          response="x" 
      }
      rno89.innerHTML=response
      
      if (jno90.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno90.innerHTML=response

      if (jno91.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno91.innerHTML=response
      
      if (jno92.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno92.innerHTML=response
      
      if (jno93.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno93.innerHTML=response
      
      if (jno94.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno94.innerHTML=response

      if (jno95.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno95.innerHTML=response

      if (jno121.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno121.innerHTML=response
      
      if (jno122.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno122.innerHTML=response

      if (jno123.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno123.innerHTML=response

      if (jno124.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno124.innerHTML=response

      if (jno125.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno125.innerHTML=response

      if (jno126.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno126.innerHTML=response

      if (jno127.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno127.innerHTML=response

      if (jno128.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno128.innerHTML=response
      
      if (jno129.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno129.innerHTML=response
      
      if (jno130.checked){
        response="ok"
        poin=poin+10  
      }else {
          response="x" 
      }
      rno130.innerHTML=response
      
if (sno121.value=="ponens"){
  response="ok";poin=poin+25} 
else {
  response="x"}
rsno121.innerHTML=response

if (sno122.value=="kontraposisi"){
  response="ok";poin=poin+25} 
else {
  response="x"}
rsno122.innerHTML=response


nilaik2.innerHTML=poin


      
      nilaik2.innerHTML=poin
    }
  </script>
  <script>
  
    function kirimtri2() {
    let poin=0
    const jno31=document.querySelector('#jno31')
    const jno32=document.querySelector('#jno32')
    const jno33=document.querySelector('#jno33')
    const jno34=document.querySelector('#jno34')
    const jno35=document.querySelector('#jno35')
    const jno36=document.querySelector('#jno36')
    const jno37=document.querySelector('#jno37')
    const jno38=document.querySelector('#jno38')
    const jno39=document.querySelector('#jno39')
    const jno40=document.querySelector('#jno40')
    const jno51=document.querySelector('#jno51')
    const jno52=document.querySelector('#jno52')
    const jno53=document.querySelector('#jno53')
    const jno54=document.querySelector('#jno54')
    const jno55=document.querySelector('#jno55')
    const jno101=document.querySelector('#jno101')
    const jno102=document.querySelector('#jno102')
    const jno103=document.querySelector('#jno103')
    const jno104=document.querySelector('#jno104')
    const jno105=document.querySelector('#jno105')
    const jno106=document.querySelector('#jno106')
    const jno107=document.querySelector('#jno107')
    const jno108=document.querySelector('#jno108')
    const jno109=document.querySelector('#jno109')
    const jno110=document.querySelector('#jno110')
    const jno111=document.querySelector('#jno111')
    const jno112=document.querySelector('#jno112')
    const jno113=document.querySelector('#jno113')
    const jno114=document.querySelector('#jno114')
    const jno115=document.querySelector('#jno115')
    const jno116=document.querySelector('#jno116')
    const jno117=document.querySelector('#jno117')
    const jno118=document.querySelector('#jno118')
    const jno119=document.querySelector('#jno119')
    const jno120=document.querySelector('#jno120')
    const jno131=document.querySelector('#jno131')
    const jno132=document.querySelector('#jno132')
    const jno133=document.querySelector('#jno133')
    const jno134=document.querySelector('#jno134')
    const jno135=document.querySelector('#jno135')
    const jno136=document.querySelector('#jno136')
    const jno137=document.querySelector('#jno137')
    const jno138=document.querySelector('#jno138')
    const jno139=document.querySelector('#jno139')
    const jno140=document.querySelector('#jno140')
    const jno141=document.querySelector('#jno141')
    const jno142=document.querySelector('#jno142')





    
    const sno101=document.querySelector('#sno101')
    const sno102=document.querySelector('#sno102')
    
    const sno111=document.querySelector('#sno111')
    const sno112=document.querySelector('#sno112')
    

        if (jno31.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno31.innerHTML=response

if (jno32.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno32.innerHTML=response

if (jno33.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno33.innerHTML=response


if (jno34.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno34.innerHTML=response

if (jno35.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno35.innerHTML=response

if (jno36.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno36.innerHTML=response

if (jno37.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno37.innerHTML=response

if (jno38.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno38.innerHTML=response

if (jno39.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno39.innerHTML=response

if (jno40.checked){
  response="ok"
  poin=poin+10  
}else {
    response="x" 
}
rno40.innerHTML=response

if (jno51.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno51.innerHTML=response

if (jno52.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno52.innerHTML=response

if (jno53.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno53.innerHTML=response

if (jno54.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno54.innerHTML=response

if (jno55.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno55.innerHTML=response

if (jno101.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno101.innerHTML=response
if (jno102.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno102.innerHTML=response
if (jno103.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno103.innerHTML=response
if (jno104.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno104.innerHTML=response
if (jno105.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno105.innerHTML=response

if (jno106.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno106.innerHTML=response
if (jno107.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno107.innerHTML=response
if (jno108.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno108.innerHTML=response
if (jno109.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno109.innerHTML=response
if (jno110.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno110.innerHTML=response

if (jno111.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno111.innerHTML=response

if (jno112.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno112.innerHTML=response
if (jno113.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno113.innerHTML=response
if (jno114.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno114.innerHTML=response
if (jno115.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno115.innerHTML=response
if (jno116.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno116.innerHTML=response
if (jno117.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno117.innerHTML=response
if (jno118.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno118.innerHTML=response
if (jno119.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno119.innerHTML=response
if (jno120.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno120.innerHTML=response

if (jno131.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno131.innerHTML=response

if (jno132.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno132.innerHTML=response
if (jno133.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno133.innerHTML=response
if (jno134.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno134.innerHTML=response
if (jno135.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno135.innerHTML=response
if (jno136.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno136.innerHTML=response
if (jno137.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno137.innerHTML=response
if (jno138.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno138.innerHTML=response
if (jno139.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno139.innerHTML=response
if (jno140.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno140.innerHTML=response

if (jno141.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno141.innerHTML=response


if (jno142.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno142.innerHTML=response




if (sno101.value=="3"){
  response="ok";poin=poin+25} 
else {
  response="x"}
rsno101.innerHTML=response
nilai2.innerHTML=poin

   if (sno102.value=="-1"){
     response="ok";poin=poin+25
   }else {
     response="x"
   }
   rsno102.innerHTML=response
   nilai2.innerHTML=poin

   if (sno111.value=="155"){
    response="ok";poin=poin+25
  }else {
    response="x"
  }
  rsno111.innerHTML=response
  nilai2.innerHTML=poin
  if (sno112.value=="200"){
    response="ok";poin=poin+25
  }else {
    response="x"
  }
  rsno112.innerHTML=response
  nilai2.innerHTML=poin

   

   if(jno31.checked)jno31.checked=false
if(jno32.checked)jno32.checked=false
if(jno33.checked)jno33.checked=false
if(jno34.checked)jno34.checked=false
if(jno35.checked)jno35.checked=false
if(jno36.checked)jno36.checked=false
if(jno37.checked)jno37.checked=false
if(jno38.checked)jno38.checked=false
if(jno39.checked)jno39.checked=false
if(jno40.checked)jno40.checked=false
if(jno51.checked)jno51.checked=false
if(jno52.checked)jno52.checked=false
if(jno53.checked)jno53.checked=false
if(jno54.checked)jno54.checked=false
if(jno55.checked)jno55.checked=false

if(jno101.checked)jno101.checked=false
if(jno102.checked)jno102.checked=false
if(jno103.checked)jno103.checked=false
if(jno104.checked)jno104.checked=false
if(jno105.checked)jno105.checked=false
if(jno106.checked)jno106.checked=false
if(jno107.checked)jno107.checked=false
if(jno108.checked)jno108.checked=false
if(jno109.checked)jno109.checked=false
if(jno110.checked)jno110.checked=false
if(jno111.checked)jno111.checked=false
if(jno112.checked)jno112.checked=false
if(jno113.checked)jno113.checked=false
if(jno114.checked)jno114.checked=false
if(jno115.checked)jno115.checked=false
if(jno116.checked)jno116.checked=false
if(jno117.checked)jno117.checked=false
if(jno118.checked)jno118.checked=false
if(jno119.checked)jno119.checked=false
if(jno120.checked)jno120.checked=false
if(jno131.checked)jno131.checked=false
if(jno132.checked)jno132.checked=false
if(jno133.checked)jno133.checked=false
if(jno134.checked)jno134.checked=false
if(jno135.checked)jno135.checked=false
if(jno136.checked)jno136.checked=false
if(jno137.checked)jno137.checked=false
if(jno138.checked)jno138.checked=false
if(jno139.checked)jno139.checked=false
if(jno140.checked)jno140.checked=false
if(jno141.checked)jno141.checked=false
if(jno142.checked)jno142.checked=false


}


 function kirimtri3() {
    let poin=0
    const jno41=document.querySelector('#jno41')
    const jno42=document.querySelector('#jno42')
    const jno43=document.querySelector('#jno43')
    const jno44=document.querySelector('#jno44')
    const jno45=document.querySelector('#jno45')
    const jno46=document.querySelector('#jno46')
    const jno47=document.querySelector('#jno47')
    const jno48=document.querySelector('#jno48')
    const jno49=document.querySelector('#jno49')
    const jno50=document.querySelector('#jno50')
    const jno61=document.querySelector('#jno61')
    const jno62=document.querySelector('#jno62')
    const jno63=document.querySelector('#jno63')
    const jno64=document.querySelector('#jno64')
    const jno65=document.querySelector('#jno65')
    const jno66=document.querySelector('#jno66')
    const jno67=document.querySelector('#jno67')
    const jno68=document.querySelector('#jno68')
    const jno69=document.querySelector('#jno69')
    const jno70=document.querySelector('#jno70')

    const sno41=document.querySelector('#sno41')
    const sno42=document.querySelector('#sno42')
    const sno43=document.querySelector('#sno43')
    const sno44=document.querySelector('#sno44')
    const sno45=document.querySelector('#sno45')

    


  if (jno41.checked){
  response=""
  poin=poin+10
}else {
    response="x" 
}
rno41.innerHTML=response


if (jno42.checked){
  response="ok"
  poin=poin+10
}else {
    response="x" 
}
rno42.innerHTML=response

if (jno43.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno43.innerHTML=response


if (jno44.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno44.innerHTML=response

if (jno45.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno45.innerHTML=response

if (jno46.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno46.innerHTML=response

if (jno47.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno47.innerHTML=response

if (jno48.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno48.innerHTML=response

if (jno49.checked){
  response="v"
  poin=poin+10
}else {
    response="x" 
}
rno49.innerHTML=response

if (jno50.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno50.innerHTML=response


if (jno61.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno61.innerHTML=response

if (jno62.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno62.innerHTML=response

if (jno63.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno63.innerHTML=response

if (jno64.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno64.innerHTML=response

if (jno65.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno65.innerHTML=response

if (jno66.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno66.innerHTML=response
if (jno67.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno67.innerHTML=response
if (jno68.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno68.innerHTML=response
if (jno69.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno69.innerHTML=response
if (jno70.checked){
  response="v"
  poin=poin+10  
}else {
    response="x" 
}
rno70.innerHTML=response




nilai3.innerHTML=poin





if (sno41.value=="4"){
    poin=poin+10} 
else {response=""}
rsno41.innerHTML=response
nilai3.innerHTML=poin

   if (sno42.value=="5"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno42.innerHTML=response
   nilai3.innerHTML=poin
 if (sno43.value=="4"){
    response=""; poin=poin+10} 
else {response=""}
rsno43.innerHTML=response
nilai3.innerHTML=poin
   if (sno44.value=="-10"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno44.innerHTML=response
   nilai3.innerHTML=poin

 if (sno45.value=="2"){
    response=""; poin=poin+10} 
else {response=""}
rsno45.innerHTML=response
nilai3.innerHTML=poin
kirimtri()
 }


function reset(){
if(jno41.checked)jno41.checked=false
if(jno42.checked)jno42.checked=false
if(jno43.checked)jno43.checked=false
if(jno44.checked)jno44.checked=false
if(jno45.checked)jno45.checked=false
if(jno46.checked)jno46.checked=false
if(jno47.checked)jno47.checked=false
if(jno48.checked)jno48.checked=false
if(jno49.checked)jno49.checked=false
if(jno50.checked)jno50.checked=false
if(jno61.checked)jno61.checked=false
if(jno62.checked)jno62.checked=false
if(jno63.checked)jno63.checked=false
if(jno64.checked)jno64.checked=false
if(jno65.checked)jno65.checked=false
if(jno66.checked)jno66.checked=false
if(jno67.checked)jno67.checked=false
if(jno68.checked)jno68.checked=false
if(jno69.checked)jno69.checked=false
if(jno70.checked)jno70.checked=false

}


function kirimtri(){
  

    const jno1=document.querySelector('#jno1')
    const jno2=document.querySelector('#jno2')
    const jno3=document.querySelector('#jno3')
    const jno4=document.querySelector('#jno4')
    const jno5=document.querySelector('#jno5')
    const jno6=document.querySelector('#jno6')
    const jno7=document.querySelector('#jno7')
    const jno8=document.querySelector('#jno8')
    const jno9=document.querySelector('#jno9')
    const jno10=document.querySelector('#jno10')
    const jno11=document.querySelector('#jno11')
    const jno12=document.querySelector('#jno12')
    const jno13=document.querySelector('#jno13')
    const jno14=document.querySelector('#jno14')
    const jno15=document.querySelector('#jno15')
    const jno16=document.querySelector('#jno16')
    const jno17=document.querySelector('#jno17')
    const jno18=document.querySelector('#jno18')
    const jno19=document.querySelector('#jno19')
    const jno20=document.querySelector('#jno20')
    const jno21=document.querySelector('#jno21')
    const jno22=document.querySelector('#jno22')
    const jno23=document.querySelector('#jno23')
    const jno24=document.querySelector('#jno24')
    const jno25=document.querySelector('#jno25')
    const jno26=document.querySelector('#jno26')
    const jno27=document.querySelector('#jno27')
    const jno28=document.querySelector('#jno28')
    const jno29=document.querySelector('#jno29')
    const jno30=document.querySelector('#jno30')
    const jno31=document.querySelector('#jno31')
    const jno32=document.querySelector('#jno32')
    const jno33=document.querySelector('#jno33')
    const jno34=document.querySelector('#jno34')
    const jno35=document.querySelector('#jno35')
    const jno36=document.querySelector('#jno36')
    const jno37=document.querySelector('#jno37')
    const jno38=document.querySelector('#jno38')
    const jno39=document.querySelector('#jno39')
    const jno40=document.querySelector('#jno40')
    const jno41=document.querySelector('#jno41')
    const jno42=document.querySelector('#jno42')
    const jno43=document.querySelector('#jno43')
    const jno44=document.querySelector('#jno44')
    const jno45=document.querySelector('#jno45')
    const jno46=document.querySelector('#jno46')
    const jno47=document.querySelector('#jno47')
    const jno48=document.querySelector('#jno48')
    const jno49=document.querySelector('#jno49')
    const jno50=document.querySelector('#jno50')
    const jno61=document.querySelector('#jno61')
    const jno62=document.querySelector('#jno62')
    const jno63=document.querySelector('#jno63')
    const jno64=document.querySelector('#jno64')
    const jno65=document.querySelector('#jno65')
    const jno66=document.querySelector('#jno66')
    const jno67=document.querySelector('#jno67')
    const jno68=document.querySelector('#jno68')
    const jno69=document.querySelector('#jno69')
    const jno70=document.querySelector('#jno70')




    const jno51=document.querySelector('#jno51')
    const jno52=document.querySelector('#jno52')
    const jno53=document.querySelector('#jno53')
    const jno54=document.querySelector('#jno54')
    const jno55=document.querySelector('#jno55')
    
    const jno101=document.querySelector('#jno101')
    const jno102=document.querySelector('#jno102')
    const jno103=document.querySelector('#jno103')
    const jno104=document.querySelector('#jno104')
    const jno105=document.querySelector('#jno105')
    const jno106=document.querySelector('#jno106')
    const jno107=document.querySelector('#jno107')
    const jno108=document.querySelector('#jno108')
    const jno109=document.querySelector('#jno109')
    const jno110=document.querySelector('#jno110')


    const sno1=document.querySelector('#sno1')
    const sno2=document.querySelector('#sno2')
    const sno3=document.querySelector('#sno3')
    const sno4=document.querySelector('#sno4')
    const sno5=document.querySelector('#sno5')
    const sno6=document.querySelector('#sno6')
    const sno7=document.querySelector('#sno7')
    const sno8=document.querySelector('#sno8')
    const sno9=document.querySelector('#sno9')
    const sno10=document.querySelector('#sno10')
    const sno11=document.querySelector('#sno11')
    const sno12=document.querySelector('#sno12')
    const sno13=document.querySelector('#sno13')
    const sno14=document.querySelector('#sno14')
    const sno15=document.querySelector('#sno15')
    const sno16=document.querySelector('#sno16')
    const sno17=document.querySelector('#sno17')
    const sno18=document.querySelector('#sno18')
    const sno19=document.querySelector('#sno19')
    const sno20=document.querySelector('#sno20')
    const sno21=document.querySelector('#sno21')
    const sno22=document.querySelector('#sno22')
    const sno23=document.querySelector('#sno23')
    const sno24=document.querySelector('#sno24')
    const sno25=document.querySelector('#sno25')
    const sno26=document.querySelector('#sno26')
    const sno27=document.querySelector('#sno27')
    const sno28=document.querySelector('#sno28')
    const sno29=document.querySelector('#sno29')
    const sno30=document.querySelector('#sno30')
    const sno31=document.querySelector('#sno31')
    const sno32=document.querySelector('#sno32')
    const sno33=document.querySelector('#sno33')
    const sno34=document.querySelector('#sno34')
    const sno35=document.querySelector('#sno35')
    const sno36=document.querySelector('#sno36')
    const sno37=document.querySelector('#sno37')
    const sno38=document.querySelector('#sno38')
    const sno39=document.querySelector('#sno39')
    const sno40=document.querySelector('#sno40')
    




    const rno1=document.querySelector('#rno1')
    const rno2=document.querySelector('#rno2')
    const rno3=document.querySelector('#rno3')
    const rno4=document.querySelector('#rno4')
    const rno5=document.querySelector('#rno5')
    const rno6=document.querySelector('#rno6')
    const rno7=document.querySelector('#rno7')
    const rno8=document.querySelector('#rno8')
    const rno9=document.querySelector('#rno9')
    const rno10=document.querySelector('#rno10')
    const rno11=document.querySelector('#rno11')
    const rno12=document.querySelector('#rno12')
    const rno13=document.querySelector('#rno13')
    const rno14=document.querySelector('#rno14')
    const rno15=document.querySelector('#rno15')
    const rno16=document.querySelector('#rno16')
    const rno17=document.querySelector('#rno17')
    const rno18=document.querySelector('#rno18')
    const rno19=document.querySelector('#rno19')
    const rno20=document.querySelector('#rno20')
    const rno21=document.querySelector('#rno21')
    const rno22=document.querySelector('#rno22')
    const rno23=document.querySelector('#rno23')
    const rno24=document.querySelector('#rno24')
    const rno25=document.querySelector('#rno25')
    const rno26=document.querySelector('#rno26')
    const rno27=document.querySelector('#rno27')
    const rno28=document.querySelector('#rno28')
    const rno29=document.querySelector('#rno29')
    const rno30=document.querySelector('#rno30')
    const rno31=document.querySelector('#rno31')







    const rsno1=document.querySelector('#rsno1')
    const rsno2=document.querySelector('#rsno2')
    const rsno3=document.querySelector('#rsno3')
    const rsno4=document.querySelector('#rsno4')
    const rsno5=document.querySelector('#rsno5')
    const rsno6=document.querySelector('#rsno6')
    const rsno7=document.querySelector('#rsno7')
    const rsno8=document.querySelector('#rsno8')
    const rsno9=document.querySelector('#rsno9')
    const rsno10=document.querySelector('#rsno10')

    const rsno11=document.querySelector('#rsno11')
    const rsno12=document.querySelector('#rsno12')
    const rsno13=document.querySelector('#rsno13')
    const rsno14=document.querySelector('#rsno14')
    const rsno15=document.querySelector('#rsno15')
    const rsno16=document.querySelector('#rsno16')
    const rsno17=document.querySelector('#rsno17')
    const rsno18=document.querySelector('#rsno18')
    const rsno19=document.querySelector('#rsno19')
    const rsno20=document.querySelector('#rsno20')

    const rsno21=document.querySelector('#rsno21')
    const rsno22=document.querySelector('#rsno22')
    const rsno23=document.querySelector('#rsno23')
    const rsno24=document.querySelector('#rsno24')
    const rsno25=document.querySelector('#rsno25')
    const rsno26=document.querySelector('#rsno26')
    const rsno27=document.querySelector('#rsno27')
    const rsno28=document.querySelector('#rsno28')
    const rsno29=document.querySelector('#rsno29')
    const rsno30=document.querySelector('#rsno30')
    const rsno31=document.querySelector('#rsno31')







    const nilai=document.querySelector('#nilai')

    
    let response
    let poin=0
    
    if (jno1.checked){
      poin=poin+10
      
    }else {
      //response="<h1>besar sudut A= arc tan y/x = arc tan 1 (gunakan kalkulator)</h1>"
      response="" 
    
    }
    rno1.innerHTML=response
  

  if (jno2.checked){
    response=""
    poin=poin+10
  }else {
   // response="<h1>pakai rumus phytagoras</h1>"
     response="" 
  }
  rno2.innerHTML=response

  if (jno3.checked){
    response=" "
    poin=poin+10
  }else {
    //response="<h1>pakai aturan cosinus</h1>"
    response=""   
}
  rno3.innerHTML=response


if (jno4.checked){
  response=" "
  poin=poin+10
}else {
  //response="<h1>lihat mindmap, rumus  s(s-a)(s-b)(s-c)</h1>"
  response="" 
}
rno4.innerHTML=response




  if (jno5.checked){
    response=""
    poin=poin+10
  }else {
//    response="<h1>sec adalah perbandingan sisi miring dengan sisi samping</h1>"
response="" 
}
  rno5.innerHTML=response


if (jno6.checked){
  response=""
  poin=poin+5
}else {
  
  response="" 
}
rno6.innerHTML=response


if (jno7.checked){
    response=" "
    poin=poin+10
  }else {
   // response="<h1>lihat vidio trigonometri #4<h1>"
        response="" 
  }
  rno7.innerHTML=response


if (jno8.checked){
  response=""
  poin=poin+10
}else {
 // response="<h1>cari r atau jari2 dengan phytagoras</h>"
    response="" 
}
rno8.innerHTML=response

if (jno9.checked){
    response=""
    poin=poin+5
  }else {
    // response="<h1>pakai aturan sinus, lihat mindmapnya</h1>"
     response=""  
}

  rno9.innerHTML=response


if (jno10.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno10.innerHTML=response


if (jno11.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno11.innerHTML=response


if (jno12.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno12.innerHTML=response

if (jno13.checked){
    response=" "
    poin=poin+10
  }else {
    //response="<h1>pakai aturan cosinus</h1>"
    response=""   
}
  rno13.innerHTML=response


if (jno14.checked){
  response=" "
  poin=poin+10
}else {
  //response="<h1>lihat mindmap, rumus  s(s-a)(s-b)(s-c)</h1>"
  response="" 
}
rno14.innerHTML=response




  if (jno15.checked){
    response=""
    poin=poin+10
  }else {
//    response="<h1>sec adalah perbandingan sisi miring dengan sisi samping</h1>"
response="" 
}
  rno15.innerHTML=response


if (jno16.checked){
  response=""
  poin=poin+5
}else {
  
  response="" 
}
rno16.innerHTML=response


if (jno17.checked){
    response=" "
    poin=poin+10
  }else {
   // response="<h1>lihat vidio trigonometri #4<h1>"
        response="" 
  }
  rno17.innerHTML=response


if (jno18.checked){
  response=""
  poin=poin+10
}else {
 // response="<h1>cari r atau jari2 dengan phytagoras</h>"
    response="" 
}
rno18.innerHTML=response

if (jno19.checked){
    response=""
    poin=poin+5
  }else {
    // response="<h1>pakai aturan sinus, lihat mindmapnya</h1>"
     response=""  
}

  rno19.innerHTML=response


if (jno20.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno20.innerHTML=response


if (jno21.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno21.innerHTML=response


if (jno22.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno22.innerHTML=response

if (jno23.checked){
    response=" "
    poin=poin+10
  }else {
    //response="<h1>pakai aturan cosinus</h1>"
    response=""   
}
  rno23.innerHTML=response


if (jno24.checked){
  response=" "
  poin=poin+10
}else {
  //response="<h1>lihat mindmap, rumus  s(s-a)(s-b)(s-c)</h1>"
  response="" 
}
rno24.innerHTML=response




  if (jno25.checked){
    response=""
    poin=poin+10
  }else {
//    response="<h1>sec adalah perbandingan sisi miring dengan sisi samping</h1>"
response="" 
}
  rno25.innerHTML=response


if (jno26.checked){
  response=""
  poin=poin+5
}else {
  
  response="" 
}
rno26.innerHTML=response


if (jno27.checked){
    response=" "
    poin=poin+10
  }else {
   // response="<h1>lihat vidio trigonometri #4<h1>"
        response="" 
  }
  rno27.innerHTML=response


if (jno28.checked){
  response=""
  poin=poin+10
}else {
 // response="<h1>cari r atau jari2 dengan phytagoras</h>"
    response="" 
}
rno28.innerHTML=response

if (jno29.checked){
    response=""
    poin=poin+5
  }else {
    // response="<h1>pakai aturan sinus, lihat mindmapnya</h1>"
     response=""  
}

  rno29.innerHTML=response


  if (jno30.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno30.innerHTML=response

if (jno31.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno31.innerHTML=response

if (jno32.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno32.innerHTML=response

if (jno33.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno33.innerHTML=response


if (jno34.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno34.innerHTML=response

if (jno35.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno35.innerHTML=response

if (jno36.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno36.innerHTML=response

if (jno37.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno37.innerHTML=response

if (jno38.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno38.innerHTML=response

if (jno39.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno39.innerHTML=response

if (jno40.checked){
  response=""
  poin=poin+10  
}else {
    response="" 
}
rno40.innerHTML=response

if (jno51.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno51.innerHTML=response

if (jno52.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno52.innerHTML=response

if (jno53.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno53.innerHTML=response

if (jno54.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno54.innerHTML=response

if (jno55.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno55.innerHTML=response


if (jno41.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno41.innerHTML=response


if (jno42.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno42.innerHTML=response

if (jno43.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno43.innerHTML=response


if (jno44.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno44.innerHTML=response

if (jno45.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno45.innerHTML=response

if (jno46.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno46.innerHTML=response

if (jno47.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno47.innerHTML=response

if (jno48.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno48.innerHTML=response

if (jno49.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno49.innerHTML=response

if (jno50.checked){
  response=""
  poin=poin+10  
}else {
    response="" 
}
rno50.innerHTML=response

if (jno101.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno101.innerHTML=response

if (jno102.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno102.innerHTML=response

if (jno103.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno103.innerHTML=response

if (jno104.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno104.innerHTML=response

if (jno105.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno105.innerHTML=response


if (jno106.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno106.innerHTML=response

if (jno107.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno107.innerHTML=response

if (jno108.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno108.innerHTML=response

if (jno109.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno109.innerHTML=response

if (jno110.checked){
  response=""
  poin=poin+10
}else {
    response="" 
}
rno110.innerHTML=response


if (sno1.value=="1,57"){
    response=""; poin=poin+10} 
else {response=""}
rsno1.innerHTML=response
nilai.innerHTML=poin
  
  

   if (sno2.value=="csc"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno2.innerHTML=response
 nilai.innerHTML=poin
 


 if (sno11.value=="1"){
    response="benar" ; poin=poin+10} 
else {response=""}
rsno11.innerHTML=response
nilai.innerHTML=poin
  
  

   if (sno12.value=="3"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno12.innerHTML=response
 nilai.innerHTML=poin
 


 if (sno13.value=="1"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno13.innerHTML=response
 nilai.innerHTML=poin
 


 if (sno14.value=="10"){
     response="benar";poin=poin+10
   }else {
     response=""
   }
   rsno14.innerHTML=response
 nilai.innerHTML=poin
 


if (sno21.value=="5"){
    response="benar";
    poin=poin+10} 
else {response=""}
rsno21.innerHTML=response
nilai.innerHTML=poin
  
  

   if (sno22.value=="45"){
     response="benar";
     poin=poin+10
   }else {
     response=""
   }
   rsno22.innerHTML=response
 nilai.innerHTML=poin
 



reset()

}


    </script>
 
 rno101.innerHTML = response;
 if (jno102.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno102.innerHTML = response;
 if (jno103.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno103.innerHTML = response;
 if (jno104.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno104.innerHTML = response;
 if (jno105.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno105.innerHTML = response;

 if (jno106.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno106.innerHTML = response;
 if (jno107.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno107.innerHTML = response;
 if (jno108.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno108.innerHTML = response;
 if (jno109.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno109.innerHTML = response;
 if (jno110.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno110.innerHTML = response;

 if (jno111.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno111.innerHTML = response;

 if (jno112.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno112.innerHTML = response;
 if (jno113.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno113.innerHTML = response;
 if (jno114.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno114.innerHTML = response;
 if (jno115.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno115.innerHTML = response;
 if (jno116.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno116.innerHTML = response;
 if (jno117.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno117.innerHTML = response;
 if (jno118.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno118.innerHTML = response;
 if (jno119.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno119.innerHTML = response;
 if (jno120.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno120.innerHTML = response;

 if (jno131.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno131.innerHTML = response;

 if (jno132.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno132.innerHTML = response;
 if (jno133.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno133.innerHTML = response;
 if (jno134.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno134.innerHTML = response;
 if (jno135.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno135.innerHTML = response;
 if (jno136.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno136.innerHTML = response;
 if (jno137.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno137.innerHTML = response;
 if (jno138.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno138.innerHTML = response;
 if (jno139.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno139.innerHTML = response;
 if (jno140.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno140.innerHTML = response;

 if (jno141.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno141.innerHTML = response;

 if (jno142.checked) {
   response = "";
   poin = poin + 10;
 } else {
   response = "";
 }
 rno142.innerHTML = response;

 if (jno101.checked) jno101.checked = false;
 if (jno102.checked) jno102.checked = false;
 if (jno103.checked) jno103.checked = false;
 if (jno104.checked) jno104.checked = false;
 if (jno105.checked) jno105.checked = false;
 if (jno106.checked) jno106.checked = false;
 if (jno107.checked) jno107.checked = false;
 if (jno108.checked) jno108.checked = false;
 if (jno109.checked) jno109.checked = false;
 if (jno110.checked) jno110.checked = false;
 if (jno111.checked) jno111.checked = false;
 if (jno112.checked) jno112.checked = false;
 if (jno113.checked) jno113.checked = false;
 if (jno114.checked) jno114.checked = false;
 if (jno115.checked) jno115.checked = false;
 if (jno116.checked) jno116.checked = false;
 if (jno117.checked) jno117.checked = false;
 if (jno118.checked) jno118.checked = false;
 if (jno119.checked) jno119.checked = false;
 if (jno120.checked) jno120.checked = false;
 if (jno131.checked) jno131.checked = false;
 if (jno132.checked) jno132.checked = false;
 if (jno133.checked) jno133.checked = false;
 if (jno134.checked) jno134.checked = false;
 if (jno135.checked) jno135.checked = false;
 if (jno136.checked) jno136.checked = false;
 if (jno137.checked) jno137.checked = false;
 if (jno138.checked) jno138.checked = false;
 if (jno139.checked) jno139.checked = false;
 if (jno140.checked) jno140.checked = false;
 if (jno141.checked) jno141.checked = false;
 if (jno142.checked) jno142.checked = false;
