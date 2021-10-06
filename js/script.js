document.addEventListener('DOMContentLoaded', () => {

        let people = JSON.parse(localStorage.getItem("people"))

        let sex = 'sex'
        let age = 'age'
        let lang = 'langCount'
        let vegan = 'isVegetarian'
        let langArrSorted = getArrayByKey(people, lang).sort((a, b) => b - a)
        let maxLang = langArrSorted[0]

        let isVegan = valueSelector(0, vegan, true, people)
        let notVegan = valueSelector(0, vegan, false, people)
        let Male = valueSelector(0, sex, 'Male', people)
        let Female = valueSelector(0, sex, 'Female', people)
        let middleAge = (Male.middleAge + Female.middleAge) / 2

        let FemaleByLang = valueSelector(0, lang, maxLang, Female.peopleInfo)
        let MaleByLang = valueSelector(0, lang, maxLang, Male.peopleInfo)

        let FemaleVegan = valueSelector(0, vegan, true, Female.peopleInfo)
        let MaleVegan = valueSelector(0, vegan, true, Male.peopleInfo)
        let FemaleNotVegan = valueSelector(0, vegan, false, Female.peopleInfo)
        let MaleNotVegan = valueSelector(0, vegan, false, Male.peopleInfo)

        let FemaleVeganAge = valueSelector(0, age, 50, FemaleVegan.peopleInfo)
        let MaleVeganAge = valueSelector(0, age, 50, MaleVegan.peopleInfo)
        let FemaleNotVeganAge = valueSelector(0, age, 50, FemaleNotVegan.peopleInfo)
        let MaleNotVeganAge = valueSelector(0, age, 50, MaleNotVegan.peopleInfo)

        middle_age.innerHTML = middleAge;
        middle_age_male.innerHTML = Male.middleAge
        middle_age_female.innerHTML = Female.middleAge
        max_num_of_langs.innerHTML = maxLang
        num_veg_from_male.innerHTML = MaleVegan.numberOfPeople
        num_veg_from_female.innerHTML = FemaleVegan.numberOfPeople
        num_notveg_from_male.innerHTML = MaleNotVegan.numberOfPeople
        num_notveg_from_female.innerHTML = FemaleNotVegan.numberOfPeople

        sex_select.onchange = function () {
            all_info.removeChild(all_info.firstChild)
            renderSortedItems(valueSelector(0, this.name, this.value, people), all_info);
            if (this.value === "FemaleVegan") {
                all_info.removeChild(all_info.firstChild)
                renderSortedItems(FemaleVegan, all_info)
            }
            if (this.value === "MaleVegan") {
                all_info.removeChild(all_info.firstChild)
                renderSortedItems(MaleVegan, all_info)
            }
        };

        renderOptionsItem(Male.ageList, age_select)
        age_select.onchange = function () {
            age_additional.removeChild(age_additional.firstChild)
            renderSortedItems(valueSelector(0, age, +this.value, Male.peopleInfo), age_additional);
        };

        renderOptionsItem(Male.langList, lang_select)
        lang_select.onchange = function () {
            lang_additional.removeChild(lang_additional.firstChild)
            renderSortedItems(valueSelector(0, lang, +this.value, Male.peopleInfo), lang_additional);
        };

        renderOptionsItem(Female.ageList, age_female_select)
        age_female_select.onchange = function () {
            age_female_additional.removeChild(age_female_additional.firstChild)
            renderSortedItems(valueSelector(0, age, +this.value, Female.peopleInfo), age_female_additional);
        };

        renderOptionsItem(Female.langList, lang_female_select)
        lang_female_select.onchange = function () {
            lang_female_additional.removeChild(lang_female_additional.firstChild)
            renderSortedItems(valueSelector(0, lang, +this.value, Female.peopleInfo), lang_female_additional);
        };

        function renderSortedItems(VarName, idName) {
            let nested = document.createElement('div')
            nested.setAttribute("class", "nested")
            idName.appendChild(nested)
            for (let i = 0; i < VarName.peopleInfo.length; i++) {
                let tag = document.createElement('div');
                let text = document.createTextNode(`
                ${VarName.peopleInfo[i].id}. 
                ${VarName.peopleInfo[i].firstName}
                ${VarName.peopleInfo[i].surName} 
                 sex: ${VarName.peopleInfo[i].sex},  
                 age: ${VarName.peopleInfo[i].age},
                 vegetarian: ${VarName.peopleInfo[i].isVegetarian},
                 number of lang's: ${VarName.peopleInfo[i].langCount}`);
                tag.appendChild(text)
                nested.appendChild(tag)
            }
        }

        function renderOptionsItem(array, selector) {
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement('option')
                option.setAttribute("value", `${array[i]}`)
                let innerItem = document.createTextNode(array[i])
                option.appendChild(innerItem)
                selector.appendChild(option)
            }
            return array
        }


        function valueSelector(startPoint, key, keyValue, obj) {
            let ageSum = 0;
            let selected = {}
            let ageArray = []
            let langArray = []
            let fullNames = []
            let fullInfo = []
            for (let i = startPoint; i < obj.length; i++) {
                if (typeof keyValue === "string" || typeof keyValue === "boolean") {
                    if (obj[i][key] === keyValue) {
                        ageSum += obj[i].age
                        fullNames += `${obj[i].firstName} ${obj[i].surName}, `
                        fullInfo.push(obj[i])
                        ageArray.push(obj[i].age)
                        langArray.push(obj[i].langCount)
                    }
                }
                if (typeof obj[i][key] === "number" && obj[i][key] === keyValue) {
                    ageSum += obj[i].age
                    fullNames += `${obj[i].firstName} ${obj[i].surName}, `
                    fullInfo.push(obj[i])
                    ageArray.push(obj[i].age)
                    langArray.push(obj[i].langCount)
                }
            }
            selected.numberOfPeople = fullInfo.length;
            selected.middleAge = roundPlus(ageSum / selected.numberOfPeople, 0)
            selected.peopleNames = fullNames
            selected.peopleInfo = fullInfo
            selected.ageList = getUniqueArray(ageArray)
            selected.langList = getUniqueArray(langArray)
            return selected
        }

        function getUniqueArray(arrayForSort) {
            let arr = arrayForSort.sort((a, b) => a - b)
            let unique = (value, index, self) => self.indexOf(value) === index;
            return arr.filter(unique);
        }

        function getArrayByKey(obj, key) {
            let arr = []
            for (let i = 0; i < obj.length; i++) {
                arr.push(people[i][key])
            }
            return getUniqueArray(arr)
        }

        function roundPlus(x, n) {
            if (isNaN(x) || isNaN(n)) return false;
            let m = Math.pow(10, n);
            return Math.round(x * m) / m;
        }
    }
);

