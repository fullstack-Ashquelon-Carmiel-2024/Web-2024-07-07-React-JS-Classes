const avatarStockEl = document.querySelector(`.customer-avatars .stock`);
const cartStockEl = document.querySelector(`.carts .stock`);
const productShelvesEl = document.querySelector(`.products .stock`);

const getRandColor = () => {
    const getRand0To255 = () => Math.floor(Math.random()*256);
    return `rgb(${getRand0To255()},${getRand0To255()},${getRand0To255()})`;
}

class Stock {
    constructor(iconList,el) {
        this.el = el;
        this.creStock(iconList);
    }

    creStock(iconList) {
        const toShuffle = [];
        for (let i = 0; i < iconList.length; i++) {
                     toShuffle.push(i)} 
        
        this.stock = iconList.map(i => {
            
            const newIcon = document.createElement('i');
            this.el.append(newIcon);
            let ix = Math.floor(Math.random() * toShuffle.length);
            newIcon.style.order = toShuffle[ix];
            toShuffle.splice(ix,1);
            return new Avatar(i,newIcon);
        })
    }
}

class Stock {
    constructor(iconList,el) {
        this.el = el;
        this.creStock(iconList);
    }

    creStock(iconList) {
        const toShuffle = [];
        for (let i = 0; i < iconList.length; i++) {
                     toShuffle.push(i)} 
        
        this.stock = iconList.map(i => {
            
            const newIcon = document.createElement('i');
            this.el.append(newIcon);
            let ix = Math.floor(Math.random() * toShuffle.length);
            newIcon.style.order = toShuffle[ix];
            toShuffle.splice(ix,1);
            return new Avatar(i,newIcon);
        })
    }
}

class Avatar {
    constructor(iconName,el) {
        this.iconName = iconName;
        this.el = el;
        this.el.style.color = getRandColor();
        
        this.el.className = iconName;
        this.el.classList.add('p-2');
        
    }

    changeChosen() {

    }
}



class Product {
    constructor(iconName,el) {
        this.iconName = iconName;
        this.el = el;
        this.el.style.color = getRandColor();
        
        this.el.className = iconName;
        this.el.classList.add('p-2');
        
    }

    changeChosen() {

    }
}

const avatarStock = new Stock(avatarIconNames,avatarStockEl);
const cartStock = new Stock(cartIconNames,cartStockEl);

