(function($){
    var fn = {
        MaxWordCount: 5,
        MaxConfirmCount: 8,

        ConfirmCount: 0,
        WordList: [],
        WrongList: [],
        Dictionary: GetDictionary(),
        Init: function(){
            fn.Create.Init();
            fn.Event.Init();
        },
        Create: {
            Init: function() {
            },
            Sky: function(){
                var target = $("#div_sky").empty();

                for(var i = 0; i < 20; i++){
                    fn.Create.Star(target);
                }
            },
            Star: function(target) {
                var divStart = $("<div>").addClass("div_star");
                var svg = $("#svg_star_template").clone().show();
                var position = fn.Data.GetRandomPosition();
                var size = fn.Data.GetRandomInt(4, 16);
                var rotate = fn.Data.GetRandomInt(0, 360);

                divStart.css({
                    left: position.x,
                    top: position.y
                });

                svg.attr({
                    height: size,
                    width: size
                });

                svg.css({
                    transform: `rotate(${rotate}deg)`
                });

                divStart.append(svg);
                target.append(divStart);
            },
            Response: function(text, textClass, timeout){
                var target = $("#div_input_quiz");
                var span = $("<span>").addClass("span_quiz_response response_" + textClass);

                span.text(text);

                if(timeout > 0) {
                    setTimeout(function(){
                        span.remove();
                    }, timeout);
                }

                target.append(span);
            }
        },
        Event: {
            Init: function() {
                $("#input_quiz").on("keyup", fn.Event.InputQuiz);
                $("#btn_disagree").on("click", fn.Event.TestDisagree);
                $("#btn_confirm").on("click", fn.Event.TestConfirm);

                fn.Create.Response("⇓ Type here ⇓", "default", 0); 
                fn.Event.Reset();
            },
            Reset: function() {
                fn.ConfirmCount = 0;
                fn.WrongList = [];
                fn.WordList = [];

                $("#div_first").show();
                $("#div_second").hide();
                $("#div_test_buttons").show();

                fn.Create.Sky();
            },
            InputQuiz: function(event){
                if (event.which == 13) {
                    var input = $("#input_quiz");
                    var word = input.val().toLowerCase();

                    if (word != ""){
                        var randomCorrect = fn.Data.GetRandomInt(0, 100);

                        $(".span_quiz_response").remove();

                        if (word.length > 2 && randomCorrect > 40 && fn.WordList.indexOf(word) == -1 && fn.WrongList.indexOf(word) == -1 && fn.Dictionary[word]) {
                            fn.WrongList = [];
                            fn.WordList.push(word);

                            console.log(GetSentence(fn.WordList));

                            if (fn.WordList.length < fn.MaxWordCount) {
                                fn.Event.RearrangeStars(); 
                            }
                            else {
                                fn.Event.SecondStage();
                            }
                        }
                        else { 
                            fn.WrongList.push(word);
                            fn.Create.Response("Wrong input!", "fail", 2000); 
                        }

                        input.val("");
                    }
                    else {
                        fn.Create.Response("Need input!", "fail", 2000); 
                    }
                }
            },
            RearrangeStars: function(){
                var starList = $(".div_star");
                var position, size, rotate, svg, animate;

                $.each(starList, function(i, star) {
                    svg = $(star).find("svg");
                    position = fn.Data.GetRandomPosition();
                    size = fn.Data.GetRandomInt(4, 16);
                    rotate = fn.Data.GetRandomInt(0, 360);

                    $(star).css({
                        left: position.x,
                        top: position.y
                    });

                    svg.css({
                        transform: `rotate(${rotate}deg)`
                    });

                    svg.attr({
                        width: size,
                        height: size,
                    });
                });
            },
            SecondStage: function() {
                $("#div_first").hide();
                $("#div_second").show();

                fn.Event.SetSentences();
            },
            SetSentences: function() {
                var wordList = [];
                var randomCount = fn.Data.GetRandomInt(1, 3);
                var randomWord, randomSentence;

                $("#div_test_buttons").hide();

                if (randomCount <= fn.WordList.length) {
                    for (var i = 0; i < randomCount; i++) {
                        randomWord = fn.WordList[fn.Data.GetRandomInt(0, fn.WordList.length -1)];

                        if (wordList.indexOf(randomWord) == -1) {
                            wordList.push(randomWord);
                        }
                        else i--;
                    }
                }

                randomSentence = GetSentence(wordList);

                $("#span_sentence").html(randomSentence);

                setTimeout(function() {
                    $("#div_test_buttons").show();
                }, 2000);
            },
            TestDisagree: function() {
                fn.ConfirmCount = 0;

                $("#span_sentence").html("<span style='color:#a00'>CAPTCHA-Error: Didn't confirm the sentences!</span>");
                $("#div_test_buttons").hide();

                setTimeout(fn.Event.Reset, 4000);
            },
            TestConfirm: function() {
                fn.ConfirmCount++;

                if(fn.ConfirmCount < fn.MaxConfirmCount)
                    fn.Event.SetSentences();
                else
                    fn.Event.Success();
            },
            Success: function() {
                window.top.postMessage("success", '*');
            }
        },
        Data: {
            GetRandomInt: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },
            GetRandomPosition: function() {
                var divSky = $("#div_sky");

                return {
                    x: fn.Data.GetRandomInt(15 , divSky.width() - 15),
                    y: fn.Data.GetRandomInt(15 , divSky.height() - 65)
                };
            },
        }
    };

    fn.Init();
})(jQuery);