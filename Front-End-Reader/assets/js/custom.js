four=['also', 'away', 'baby', 'back', 'bear', 'book', 'came', 'crow', 'best', 'bird', 'blue', 'boat', 'both', 'does', 'down', 'food', 'gone', 'good', 'into', 'more', 'nose', 'read', 'come', 'have', 'just', 'know', 'like', 'make', 'eggs', 'farm', 'find', 'four', 'from', 'home', 'call', 'card', 'cold', 'dead', 'done', 'door', 'draw', 'want', 'some', 'that', 'them', 'then', 'they', 'this', 'time', 'well', 'what', 'when', 'with', 'your', 'were', 'sure', 'will', 'five', 'mean', 'need', 'last', 'said', 'face', 'fall', 'look', 'made', 'nest', 'once', 'over', 'rice', 'road', 'fast', 'feel', 'feet', 'fell', 'fine', 'fire', 'foot', 'free', 'full', 'game', 'girl', 'give', 'hand', 'hard', 'here', 'take', 'work', 'much', 'kind', 'tell', 'okay', 'week', 'only', 'next', 'went', 'head', 'help', 'sore', 'told', 'took', 'tree', 'turn', 'very', 'wolf', 'high', 'hold', 'hurt', 'idea', 'left', 'line', 'long', 'lost', 'year', 'nice', 'care', 'guys', 'half', 'been', 'than', 'stay', 'many', 'mine', 'move', 'name', 'nine', 'open', 'goes', 'gosh', 'cute', 'else', 'play', 'damn', 'part', 'pass', 'pick', 'pink', 'pull', 'push', 'rain', 'real', 'rest', 'same', 'show', 'side', 'love', 'used', 'ever', 'deal', 'hell', 'miss', 'snow', 'soft', 'soon', 'stop', 'talk', 'tall', 'tape', 'yeah', 'hair', 'neat', 'quit', 'Erin', 'Greg', 'mhmm', 'wait', 'walk', 'wash', 'wind', 'wear', 'Hurt', 'Lost', 'Down', 'Glad', 'Calm', 'Cozy', 'Safe'];
five=['about', 'after', 'asked', 'birds', 'cabin', 'child', 'could', 'again', 'break', 'dirty', 'going', 'juice', 'light', 'night', 'other', 'there', 'black', 'bring', 'broke', 'first', 'found', 'horse', 'house', 'brown', 'carry', 'chair', 'clean', 'close', 'color', 'crazy', 'drive', 'eight', 'write', 'right', 'think', 'those', 'would', 'stuff', 'every', 'muddy', 'floor', 'flood', 'fruit', 'funny', 'glass', 'green', 'happy', 'three', 'tough', 'doing', 'class', 'where', 'thing', 'hello', 'sides', 'their', 'wants', 'water', 'wheel', 'white', 'later', 'lunch', 'still', 'today', 'seven', 'might', 'hours', 'guess', 'leave', 'money', 'month', 'mouth', 'music', 'never', 'nurse', 'maybe', 'phone', 'these', 'forty', 'comes', 'paper', 'party', 'place', 'quiet', 'radio', 'ready', 'short', 'silly', 'heard', 'until', 'great', 'check', 'sorry', 'stand', 'store', 'table', 'teach', 'thank', 'train', 'study', 'watch', 'whole', 'bucks', 'girls', 'small', 'alone', 'Jacob', 'gonna', 'under', 'which', 'wrong', 'while', 'years', 'cause', 'Sorry', 'Awful', 'Jolly', 'Silly', 'Happy', 'Proud', 'Great', 'Loved', 'Giddy', 'Tense', 'Timid', 'among', 'piece'];
six=['around', 'before', 'called', 'afraid', 'always', 'animal', 'behind', 'better', 'little', 'myself', 'pretty', 'broken', 'change', 'coffee', 'dinner', 'really', 'enough', 'mother', 'people', 'robins', 'safely', 'school', 'second', 'father', 'finish', 'forget', 'friend', 'should', 'thirty', 'social', 'wanted', 'inside', 'listen', 'Friday', 'Monday', 'thanks', 'things', 'eleven', 'opener', 'please', 'sister', 'either', 'twenty', 'street', 'summer', 'eighty', 'making', 'spring', 'Sunday', 'Jerard', 'Travis', 'Trevor', 'yellow', 'Lonely', 'Bubbly', 'Joyful', 'Strong', 'Uneasy', 'arrive', 'course', 'cousin', 'decide', 'future', 'planet', 'surely', 'theyre', 'aerial', 'asthma'];
seven=['animals', 'because', 'chapter', 'another', 'believe', 'English', 'flowers', 'friends', 'hundred', 'brother', 'outside', 'reading', 'glasses', 'thought', 'getting', 'started', 'studies', 'alright', 'morning', 'nothing', 'tonight', 'already', 'anybody', 'picture', 'present', 'kidding', 'minutes', 'weekend', 'married', 'through', 'watched', 'working', 'Atlanta', 'playing', 'Tuesday', 'Ashamed', 'Tickled', 'Excited', 'Content', 'Pleased', 'Playful', 'Relaxed', 'Anxious', 'Worried', 'Crushed', 'Unloved', 'America', 'evening', 'finally', 'problem', 'receive', 'several', 'special', 'suppose', 'usually', 'abstain', 'amateur', 'amnesty', 'anxious', 'apology', 'archaic', 'asphalt', 'awkward', 'berserk'];

(function ($) {
	
	"use strict";

	$(function() {
		$("#tabs").tabs();
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
		$(document).on("scroll", onScroll);

	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	    	e.preventDefault();
	    	$(document).off("scroll");

	    	$('a').each(function () {
	    		$(this).removeClass('active');
	    	})
	    	$(this).addClass('active');

	    	var target = this.hash,
	    	menu = target;
	    	var target = $(this.hash);
	    	$('html, body').stop().animate({
	    		scrollTop: (target.offset().top) + 1
	    	}, 500, 'swing', function () {
	    		window.location.hash = target;
	    		$(document).on("scroll", onScroll);
	    	});
	    });
	});

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function() {

		$('#js-preloader').addClass('loaded');

	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

const recorder = new MicRecorder({bitRate: 128});

function startRecording() {
	recorder.start().catch((e) => {
		console.error(e);
	});
}

function stopRecording() {
	document.getElementById('caption-div').style.width = 'fit-content';
	
	recorder.stop().getMp3().then(([buffer, blob]) => {
		const file = new File(buffer, 'me-at-thevoice.mp3', {
			type: blob.type,
			lastModified: Date.now()
		});

		const player = new Audio(URL.createObjectURL(file));
  		player.play();
	});	
}

function reading(){
	startRecording();
	document.getElementById('caption-div').style.width = '100%';
	var sen_box = document.getElementById('sentance-box');
	sen_box.innerHTML = ""

	for(var i=0; i<6; i++){


		var list_num = Math.floor(Math.random() * 3);

		lists = [four,five,six,seven]

		var ran = Math.floor(Math.random() * lists[list_num].length);

		sen_box.innerHTML += (lists[list_num][ran] + " ");
	}

}

function getLocalStream() {
	navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch( err => {
    	console.log("u got an error:" + err)
    });
}
