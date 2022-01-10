export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

	updateQuality() {
		for(let i = 0; i < this.items.length; i++) {
			this.items[i].sellIn = this.items[i].sellIn - 1  // Disminuir sellIn en 1
			switch (this.items[i].name) {
				case "Sulfuras":
					break;  // No pasa nada
				case "Aged Brie":
					// Aumentar quality
					this.items[i].quality = this.updateQualityTo(this.items[i].quality, 1, "increase")
					break;
				case "Backstage passes to a TAFKAL80ETC concert":
					if (this.items[i].sellIn <= 10 && this.items[i].sellIn >= 6) {
						// Aumentar quality en 2
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 2, "increase")
					} else if (this.items[i].sellIn <= 5 && this.items[i].sellIn >= 1) {
						// Aumentar quality en 3
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 3, "increase")
					} else if (this.items[i].sellIn == 0) {
						// Igualar quality a 0 (cero)
						this.items[i].quality = 0
					} else {
						// Aumentar quality en 1
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 1, "increase")
					}
					break;
				case "Conjured":
					if (this.items[i].sellIn >= 0) {
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 2, "decrease")
					} else {
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 4, "decrease")
					}
					break;
				default:
					if (this.items[i].sellIn < 0) {
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 2, "decrease")
					} else {
						this.items[i].quality = this.updateQualityTo(this.items[i].quality, 1, "decrease")
					}
			}
		}
	}
	
	updateQualityTo(currentQuality: number, value: number, typeModification: string) {
		if (typeModification == "increase") {
			return currentQuality + value > 50 ? 50 : currentQuality + value
		} else if (typeModification == "decrease") {
			return currentQuality - value < 0 ? 0 : currentQuality - value
		} else {
			return currentQuality
		}
	}
}