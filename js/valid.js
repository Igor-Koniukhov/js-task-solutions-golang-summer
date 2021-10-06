document.addEventListener('DOMContentLoaded', () => {

    let countryEU = JSON.parse(localStorage.getItem('countryEU'))


    button_check_country.onclick = () => {
        let memberEU = check_country.value
        const check = new RegExp(/^[A-Z][a-z][^0-9][^S+$]/)
        if (memberEU == ''){
           small.innerHTML = "Name must be filled out";
            return false
        }
        if (!check.test(memberEU)){
            small.innerHTML = "Not allowed character in the field";
            return false
        }
        for (let i = 0; i < countryEU.length; i++) {
            if (memberEU === countryEU[i].country) {
                memberEU = countryEU[i]
                small.innerHTML = `Success`
                EU.setAttribute("src", "https://assets2.lottiefiles.com/render/kng5olbk.mp4")
                hidden.classList.remove("hidden")
                break
            } else {
                EU.setAttribute("src", "https://assets1.lottiefiles.com/render/kkgxkr39.mp4")
                small.innerHTML = `Check your spell`

            }
        }
        test.innerText = `Country: ${memberEU.country} `
        flag.innerText = `flag: ${memberEU.flag} `
        code.innerText = `code: ${memberEU.code} `
        vat.innerText = `vat: ${memberEU.vat}`
    }

    check_country.addEventListener('input', updateValue);
    function updateValue(e) {
        const regExp = new RegExp(/^[A-Z]/)

        let v =e.target.value
        if ( v.length === 1 && !regExp.test(v)){
            small.textContent = 'First letter only to Uppercase!';
        }else{
            small.textContent = ''
        }

        if(v.length > 1 && v.length < 4){
            length_check.textContent = '  Not allowed less then 4!';
        }else{
            length_check.textContent = ''
        }

    }


});