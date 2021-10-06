

let countryEU =
    [
        {country:'Austria',code:'AT',vat:20, flag:'\ud83c\udde6\ud83c\uddf9'},
        {country:'Belgium',code:'BE',vat:21 ,flag:'\ud83c\udde7\ud83c\uddea'},
        {country:'Bulgaria',code:'BG',vat:20 ,flag:'\t\ud83c\udde7\ud83c\uddec'},
        {country:'Croatia',code:'HR',vat:25 ,flag:'\ud83c\udded\ud83c\uddf7'},
        {country:'Cyprus',code:'CY',vat:19 ,flag:'\ud83c\udde8\ud83c\uddfe'},
        {country:'Czech Republic',code:'CZ',vat:21 ,flag:'\ud83c\udde8\ud83c\uddff'},
        {country:'Denmark',code:'DK',vat:25 ,flag:'\ud83c\udde9\ud83c\uddf0'},
        {country:'Estonia',code:'EE',vat:20 ,flag:'\ud83c\uddea\ud83c\uddea'},
        {country:'Finland',code:'FI',vat:24 ,flag:'\ud83c\uddeb\ud83c\uddee'},
        {country:'France',code:'FR',vat:20 ,flag:'\ud83c\uddeb\ud83c\uddf7'},
        {country:'Germany',code:'DE',vat:19 ,flag:'\ud83c\udde9\ud83c\uddea'},
        {country:'Greece',code:'GR',vat:24 ,flag:'\ud83c\uddec\ud83c\uddf7'},
        {country:'Hungary',code:'HU',vat:27 ,flag:'\ud83c\udded\ud83c\uddfa'},
        {country:'Ireland',code:'IE',vat:23 ,flag:'\ud83c\uddee\ud83c\uddea'},
        {country:'Italy',code:'IT',vat:22 ,flag:'\ud83c\uddee\ud83c\uddf9'},
        {country:'Latvia',code:'LV',vat:21 ,flag:'\ud83c\uddf1\ud83c\uddfb'},
        {country:'Lithuania',code:'LT',vat:21 ,flag:'\ud83c\uddf1\ud83c\uddf9'},
        {country:'Luxembourg',code:'LU',vat:17 ,flag:'\ud83c\uddf1\ud83c\uddfa'},
        {country:'Malta',code:'MT',vat:18 ,flag:'\ud83c\uddf2\ud83c\uddf9'},
        {country:'Netherlands',code:'NL',vat:21 ,flag:'\ud83c\uddf3\ud83c\uddf1'},
        {country:'Poland',code:'PL',vat:23 ,flag:'\ud83c\uddf5\ud83c\uddf1'},
        {country:'Portugal',code:'PT',vat:23 ,flag:'\ud83c\uddf5\ud83c\uddf9'},
        {country:'Romania',code:'RO',vat:19 ,flag:'\ud83c\uddf7\ud83c\uddf4'},
        {country:'Slovakia',code:'SK',vat:20 ,flag:'\ud83c\uddf8\ud83c\uddf0'},
        {country:'Slovenia',code:'SI',vat:22 ,flag:'\ud83c\uddf8\ud83c\uddee'},
        {country:'Spain',code:'ES',vat:21 ,flag:'\ud83c\uddea\ud83c\uddf8'},
        {country:'Sweden',code:'SE',vat:25 ,flag:'\ud83c\uddf8\ud83c\uddea'},
    ];

localStorage.setItem('countryEU', JSON.stringify(countryEU));