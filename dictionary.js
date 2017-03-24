class Dictionary
{
    constructor() {
        this.dictionary = {}
    }

    add(index, value) {
        if(this.dictionary[index])
            this.dictionary[index].push(value)
        else
            this.dictionary[index] = [value]
    }

    get(index) {
        return this.dictionary[index]
        ? this.dictionary[index]
        : null
    }

    count() {
        return Object.keys(this.dictionary).length
    }

    toString () {
        return  JSON.stringify(this.dictionary, null, 4)
    }
}

let dico = new Dictionary()
dico.add("first", 1)
dico.add("first", 2)
dico.add("two", "two")
console.log(dico.toString())