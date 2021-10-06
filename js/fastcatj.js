document.addEventListener('DOMContentLoaded', () => {

        /*let getData = (url) => {
            fetch(url)
                .then((resp) => resp.json())
                .then((data) => {
                    localStorage.setItem('products', JSON.stringify(data))
                })
        }
        getData('http://localhost:8090/products-json')*/
        let products = JSON.parse(localStorage.getItem('products'))


        renderByPlace('type', type, info_product, products)
        renderByPlace('name', product_name, info_product_name, products)
        renderByPlace('price', price, info_price, products)
        renderByPlace('id', id_number, info_id_number, products)
    generateItems( products, input)

        function renderByPlace(key, eventPlace, infoPlace, obj) {
            let options = valueSelector(0, key, true, obj).OptionArray
            renderOptions(options, eventPlace)
            eventPlace.onchange = function () {
                let value = this.value
                infoPlace.removeChild(infoPlace.firstChild)

                if (this.name === 'price') {
                    value = parseFloat(value)
                }
                if (this.name === 'id' || this.name === 'suppliers_id') {
                    value = parseInt(value, 10)
                }
                let newObj = valueSelector(0, key, value, obj).FullInfo
                generateItems(newObj, infoPlace);
            };
        }

        function prods(name, price, id, suppliersID, type, image, ingredients){
            return `
            <div class=" col-lg-4 col-md-6">
                <div class="product  product-fetched" id="product${id}" >
                <div class="product__image">
                <h3 class="product__title icon-title text-center">${name}</h3>
                <div class="ingredients-title">
                <p><span class="product-price__current">${price}</span><span>$</span></p>
            <p><span class="product-id" hidden>${id}</span><span></span></p>
            <p><span class="supplier-id" hidden >${suppliersID}</span><span></span></p>
            <span class="product__term">${type}:</span>
            <p> ${ingredients}</p>
            </div>
            <div class="product__switch image-switch">
                <div class="image-switch__item items-cover background-img"
            style="background-image: url(${image})">
                <div class="image-switch__img restaurant-icon restaurant-icon_square">
                <img src="${image}" alt="${name} ${type}" style="display: none;" id="img${id}">
                </div>
                </div>
                </div>
                <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                </div>
                <button  class="product__btn btn" value='${id}'>Add to cart</button>
            </div>
        </div>`
        };
        function generateItems (data, place) {
            let wrapper = document.createElement('div')
            wrapper.setAttribute('class', 'wrapper-child row')
            for (let i = 0; i < data.length; i++) {
                let p = prods(
                    data[i].name,
                    data[i].price,
                    data[i].id,
                    data[i].supplier_id,
                    data[i].type,
                    data[i].image,
                    data[i].ingredients.map(ingr => `<span>${ingr}</span>`).join(", ")
                )
                wrapper.insertAdjacentHTML('afterbegin', p)
            }
            place.appendChild(wrapper)
        }

        function renderOptions(array, selector) {
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
            let selected = {}
            let IDArray = []
            let SuppliersIdArray = []
            let Names = []
            let Price = []
            let Ingredients = []
            let FullInfo = []
            let Type = []
            let NamesForOption = []
            for (let i = startPoint; i < obj.length; i++) {
                NamesForOption.push(obj[i][key])
                if (typeof (keyValue === "string" || keyValue === "boolean")) {
                    if (obj[i][key] === keyValue) {
                        Names.push(obj[i].name)
                        Price.push(obj[i].price)
                        Ingredients.push(obj[i].ingredients)
                        IDArray.push(obj[i].id)
                        Type.push(obj[i].type)
                        FullInfo.push(obj[i])
                        SuppliersIdArray.push(obj[i]['suppliers_id'])
                    }
                }
                if (typeof obj[i][key] === "number" && obj[i][key] === keyValue) {
                    Price.push(obj[i].price)
                    IDArray.push(obj[i].id)
                    SuppliersIdArray.push(obj[i]['suppliers_id'])

                }
            }
            selected.Id = IDArray
            selected.SuppliersId = getUniqueArray(SuppliersIdArray)
            selected.Names = Names
            selected.PriceU = getUniqueArray(Price)
            selected.Price = Price
            selected.Type = getUniqueArray(Type)
            selected.Ingredients = Ingredients
            selected.FullInfo = FullInfo
            selected.OptionArray = getUniqueArray(NamesForOption)
            return selected
        }

        function getUniqueArray(arrayForSort){
            let arr = arrayForSort.sort((a, b) => a - b)
            let unique = (value, index, self) => self.indexOf(value) === index;
            return arr.filter(unique);
        }

    }
);

