var PhoneOne = {
    phone: "images/iphone11.png",
    name: "iphone 11",
    price: 98499,
    originalPrice : 102459,
    itemId:"I001"
}



var PhoneTwo= {
    phone:"images/iphone12.png",
    name:"iphone12",
    price:102599,
    originalPrice :110599,
    itemId:"I002"
}



var PhoneThree = {
    phone:"images/iphone13.jpeg",
    name:"iphone13",
    price : 150000,
    originalPrice:166000,
    itemId :"I003"
}
  
var PhoneFour = {
    phone:"images/iphone14.jpeg",
    name:"iphone14",
    price:165000,
    originalPrice: 172000,
    itemId:"I004"
}

var selectId = decodeURIComponent (window.location.search)
var selectedItem = selectId.substring(1)
 
if(selectedItem==PhoneOne.itemId) {
    document.getElementById("iphone11").src=PhoneOne.phone
    document.getElementById("name1").innerText=PhoneOne.name
    document.getElementById("price1").innerText=PhoneOne.price
    document.getElementById("original1").innerText=PhoneOne.originalPrice
    var cost = PhoneOne.price
    qty(cost)
}

else if(selectedItem==PhoneTwo.itemId) {
    document.getElementById ("iphone11").src=PhoneTwo.phone
    document.getElementById ("name1").innerText=PhoneTwo.name
    document.getElementById ("price1").innerText=PhoneTwo.price
    document.getElementById ("original1").innerText=PhoneTwo.originalPrice
    var cost =PhoneTwo.price
    qty(cost)
}
else if (selectedItem==PhoneThree.itemId) {
    document.getElementById("iphone11").src=PhoneThree.phone
    document.getElementById("name1").innerText=PhoneThree.name
    document.getElementById("price1").innerText=PhoneThree.price
    document.getElementById("original1").innerText=PhoneThree.originalPrice
    var cost = PhoneThree.price
    qty(cost)
}
else if (selectedItem==PhoneFour.itemId) {
    document.getElementById("iphone11").src=PhoneFour.phone
    document.getElementById("name1").innerText=PhoneFour.name
    document.getElementById("price1").innerText=PhoneFour.price
    document.getElementById("original1").innerText=PhoneFour.originalPrice
    var cost = PhoneFour.price
    qty(cost)
}

function qty (cost) {
    document.getElementById ("quantity").onkeyup=function() {
      let quantity = document.getElementById("quantity").value  
      let amount =cost
      if (quantity>1) { Total= quantity*amount
      document.getElementById("Total").innerText=Total}
      else if (quantity==1) { Total=amount
        document.getElementById("Total").innerText=Total
    }
    }
}

function qty (cost) {
    document.getElementById ("quantity").onkeyup = function() {
        let quantity = document.getElementById ("quantity").value
        let amount = cost
        if (quantity > 1) {
            Total = quantity*amount
            document.getElementById("Total").innerText= Total
            userlocation(Total)
        }
        else if (quantity==1) {
            Total=amount
            document.getElementById("Total").innerText=Total
            userlocation(Total)
        }
    }
}

function userlocation(Total) {
    document.getElementById("location").onchange=function() {
        let delivery = document.getElementById("location").value
        let Karen= 500
        let Muthaiga =300
        let Machakos= 600
        if (delivery =="Karen") {
            document.getElementById ("Total").innerText=Karen + Total
        }
        else if (delivery =="Muthaiga") {
            document.getElementById ("Total").innerText = Muthaiga + Total
        }
        else if (delivery =="Machakos") {
            document.getElementById ("Total").innerText = Machakos + Total
        }
        else if (delivery ==" ") {
            document.getElementById (" ").innerText = Total
        }
    }
}