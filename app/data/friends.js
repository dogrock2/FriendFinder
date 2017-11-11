const profiles = [{
        "name": "Juan",
        "gender": "male",
        "photo": "https://i.pinimg.com/236x/21/b8/c4/21b8c496b7e61e47eb168605515b56d7.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Jerry",
        "gender": "male",
        "photo": "http://cdn.ebaumsworld.com/mediaFiles/picture/681853/81021222.jpg",
        "scores": [
            1,
            4,
            5,
            2,
            1,
            5,
            4,
            4,
            1,
            5
        ]
    },
    {
        "name": "Skeeter",
        "gender": "male",
        "photo": "https://i.pinimg.com/736x/68/28/dd/6828dd6101c11f88cbbbd3a6e1c65d35--ugly-guys-bad-hair-day.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Chris",
        "gender": "male",
        "photo": "https://i.pinimg.com/736x/e4/57/bc/e457bc13c93b3b530cb2012e2eacc8da--chris-hemsworth-thor-cris-hemsworth.jpg",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "Mike",
        "gender": "male",
        "photo": "http://cdn.smosh.com/sites/default/files/2014/11/celeb-vegans-tyson.jpg",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            5,
            5,
            3,
            2,
            2
        ]
    },
    {
        "name": "Jeorge",
        "gender": "male",
        "photo": "https://img.buzzfeed.com/buzzfeed-static/static/2013-11/campaign_images/webdr01/12/14/the-15-hottest-male-celebrities-according-to-stra-1-27210-1384284351-3_big.jpg",
        "scores": [
            2,
            3,
            4,
            5,
            1,
            1,
            5,
            4,
            3,
            2
        ]
    },
    {
        "name": "Violet",
        "gender": "female",
        "photo": "https://i.pinimg.com/736x/2d/0b/0e/2d0b0e95a0547bea114eb5cf6dfd7052--funny-people-pictures-really-funny-pictures.jpg",
        "scores": [
            2,
            3,
            4,
            5,
            1,
            1,
            5,
            4,
            3,
            2
        ]
    },
    {
        "name": "Caitlyn",
        "gender": "female",
        "photo": "https://pbs.twimg.com/profile_images/631155150816591872/OJPX5Wiy.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            5,
            4,
            4,
            4
        ]
    },
    {
        "name": "Lucy",
        "gender": "female",
        "photo": "https://www.360nobs.com/wp-content/uploads/2016/01/baboon-1-740x431.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Alicia",
        "gender": "female",
        "photo": "http://cdn.ebaumsworld.com/mediaFiles/picture/2183782/85510974.jpg",
        "scores": [
            3,
            3,
            4,
            1,
            1,
            1,
            1,
            1,
            3,
            3
        ]
    },
    {
        "name": "Laura",
        "gender": "female",
        "photo": "http://cdn.ebaumsworld.com/mediaFiles/picture/2183782/85510975.jpg",
        "scores": [
            3,
            3,
            4,
            1,
            1,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "Christine",
        "gender": "female",
        "photo": "http://cdn.cavemancircus.com//wp-content/uploads/images/2017/jan/beautiful_black_women/beautiful_black_women_4.jpg",
        "scores": [
            2,
            3,
            2,
            3,
            2,
            5,
            3,
            2,
            3,
            1
        ]
    },

];

////LOGIC GOES HERE


let friends = function () {

    this.displayResult = function (result) {
        this.result = result;
        this.input = this.result.scores.split(",");
        this.name = this.input[0];
        this.gender = this.input[1];
        this.resultName = [];
        this.LuckyWinner = {};

        for (let i = 0; i < 12; i++) {
            if ((this.gender === 'MALE' && profiles[i].gender === 'female') || (this.gender === 'FEMALE' && profiles[i].gender === 'male')) {
                this.result = [];
                this.resultSum = 0;
                this.exeArr = profiles[i].scores;
                for (let x = 0; x < 10; x++)
                    this.result.push(Math.abs(parseInt(this.input[x + 2]) - parseInt(profiles[i].scores[x])));
                for (let y = 0; y < 10; y++)
                    this.resultSum += this.result[y];
                this.resultName.push([this.resultSum, profiles[i].name, profiles[i].photo]);
            } //ends if
        } //ends for loop

        this.resultName.sort(this.sortNumber);
        this.LuckyWinner ={
             'name': this.resultName[0][1],
             'photo': this.resultName[0][2]
        };
        return this.LuckyWinner;
        

    }; //ends function

    this.sortNumber = function (a, b) {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    };

   
};

module.exports = {
    friendsProfiles: profiles,
    Friend: friends
};