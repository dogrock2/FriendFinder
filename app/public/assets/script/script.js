$().ready(() => {
    let cnt = 0;
    const q_and_a = {

        question1: {
            "question": "1- Do you like kids?",
            "option1": "Love them!",
            "option2": "I dont mind being around them.",
            "option3": "Like them as long as they are not mines.",
            "option4": "Rather not have them.",
            "option5": "Cant stand them!"
        },
        question2: {
            "question": "2- Do you drink alcohol?",
            "option1": "I dont drink.",
            "option2": "I only drink on special events.",
            "option3": "Only on weekends.",
            "option4": "I drink regularly.",
            "option5": "Im a raging alcoholic!"
        },
        question3: {
            "question": "3- What type of movies do you enjoy the most?",
            "option1": "Action",
            "option2": "Chick Flicks",
            "option3": "Romantic",
            "option4": "Porn",
            "option5": "I dont watch TV!"
        },
        question4: {
            "question": "4- What type of music do you mostly listen to?",
            "option1": "Latin",
            "option2": "Rock",
            "option3": "Balads",
            "option4": "Pop",
            "option5": "Rap!"
        },
        question5: {
            "question": "5- What is your opinion on religion?",
            "option1": "Im a fanatic!",
            "option2": "I attend church regularly.",
            "option3": "I rarely attend church.",
            "option4": "I dont attend but I dont mind if others do.",
            "option5": "100% against religion!"
        },
        question6: {
            "question": "6- What is your opinion on smokers?",
            "option1": "I cant be around smokers!",
            "option2": "Only weed.",
            "option3": "I dont mind being around smokers.",
            "option4": "I rarely smoke.",
            "option5": "Im a regular smoker!"
        },
        question7: {
            "question": "7- Do you like pets?",
            "option1": "I Love animals!",
            "option2": "I like them but dont have any.",
            "option3": "I only like to look at them.",
            "option4": "I rather stay away.",
            "option5": "I have animals!"
        },
        question8: {
            "question": "8- What is your current level of education?",
            "option1": "I have a degree!",
            "option2": "I have a technical diploma.",
            "option3": "I have high school diploma or GED.",
            "option4": "I never finished school.",
            "option5": "I hate school!"
        },
        question9: {
            "question": "9- How romantic do you consider yourself?",
            "option1": "Very Romantic!",
            "option2": "Im a bit shy but so so.",
            "option3": "Only when Im in the mood.",
            "option4": "Not too much.",
            "option5": "Not at all!"
        },
        question10: {
            "question": "10- Do you like to workout?",
            "option1": "Love it!",
            "option2": "I workout few times a week.",
            "option3": "I only do it couple times a month.",
            "option4": "I workout few times a year.",
            "option5": "I hate it!"
        }

    };

    let errMsg = msgIn => {

        $('#errMsg').text(msgIn);
    };

    $('#survBtn').on('click', () => {
        $('#logo').remove();
        $('#logoDiv').removeClass();
        $('#logoDiv').addClass('col-md-6');
        $('#survBtn').css('visibility', 'hidden');
        let newDiv = $('<div id="mainDivTop">');
        let frm = $('<form>');

        let nameDiv = $('<div>');
        nameDiv.addClass('form-group');
        nameDiv.append('<label for="nameInput">Name:</label>');
        nameDiv.append('<input type="text" class="form-control d-inline-block ml-2" id="nameInput" aria-describedby="input name" placeholder="Enter your name here">');
        nameDiv.append('<span id="errMsg" class="d-inline-block ml-2" style="color:red;"></span>');
        frm.append(nameDiv);

        let frmGroup = $('<div>');
        frmGroup.addClass('form-inline');
        let div1 = $('<div>');
        div1.addClass("form-group");
        div1.append('<label for="ageInput">Age:</label>');
        div1.append('<input type="text" class="form-control mx-2" id="ageInput" aria-describedby="input age" placeholder="Age">');
        frmGroup.append(div1);

        let div2 = $('<div>');
        div2.addClass("form-group");
        div2.append('<label for="genderSelect">Gender:</label>');
        let slct = $('<select>');
        slct.addClass('form-control mx-2');
        slct.attr('id', 'genderSelect');
        slct.append('<option>MALE</option>');
        slct.append('<option>FEMALE</option>');
        div2.append(slct);
        frmGroup.append(div2);

        frm.append(frmGroup);
        newDiv.append(frm);
        newDiv.css('overflow-y', 'scroll');
        newDiv.css('height', '525px');
        newDiv.append('<hr>');
        $('#logoDiv').append(newDiv);

        $.each(q_and_a, function (index, value) {
            cnt++;
            let main = $('<div>');
            main.addClass('form-check');
            main.append(`<label question1>${value.question}</label>`);
            let fldset = $('<fieldset>');
            fldset.attr('id', 'question' + cnt);
            fldset.append('<input type="radio" name="question' + cnt + '" value="1" class="mx-2" checked="checked">' + value.option1 + '<br>');
            fldset.append('<input type="radio" name="question' + cnt + '" value="2" class="mx-2">' + value.option2 + '<br>');
            fldset.append('<input type="radio" name="question' + cnt + '" value="3" class="mx-2">' + value.option3 + '<br>');
            fldset.append('<input type="radio" name="question' + cnt + '" value="4" class="mx-2">' + value.option4 + '<br>');
            fldset.append('<input type="radio" name="question' + cnt + '" value="5" class="mx-2">' + value.option5 + '<br>');
            newDiv.append(main);
            newDiv.append(fldset);
            newDiv.append('<br>');
        });

        newDiv.append('<button id="subBtn">Submit</button>');
        $("#resultsDiv").append(newDiv);


    }); //ends button click

    let submitForm = () => {
        let nameIn = $('#nameInput').val();
        let ageIn = $('#ageInput').val();
        let genderIn = $('#genderSelect').find(":selected").text();
        let qResults1 = [nameIn, genderIn];
        let qResults2 = {};

        if(ageIn >= 18){
            for (let i = 1; i <= 10; i++)
                qResults1.push($('#question' + i).children(':checked').val());
            qResults2.scores = qResults1.toString();

            $.post("/api/friends", qResults2)
                .done(function (data) {
                    let modalDiv = $('<div>');
                    modalDiv.attr('id', 'myModal');
                    modalDiv.addClass('modal');
                    let modalCont = $('<div>');
                    modalCont.addClass('modal-content');
                    modalCont.append('<img src="' + data.photo + '" alt="No image" style="height:400px;width:400px">');
                    modalCont.append('<span id="mName">'+data.name+'</span>');
                    modalCont.append('<span><a href="#">Email your soulmate!</a></span>');
                    modalDiv.append(modalCont);
                    $('#resultsDiv').append(modalDiv);
                    $('.modal').css('display', 'block');
                    $('.modal').on('click', function () {
                        $('.modal').css('display', 'none');
                    });
                });
            } else {
                errMsg('For ages 18 and up.');
                window.location.href = "#errMsg";
            }
    };

    $('#resultsDiv').on('click', '#subBtn', function () {

        let nameIn = $('#nameInput').val();
        let ageIn = $('#ageInput').val();

        if (!nameIn || !ageIn) {
            errMsg('Name/Age cannot be blank.');
            window.location.href = "#errMsg";
        } else {
            submitForm();
        }
    });

}); //ends ready