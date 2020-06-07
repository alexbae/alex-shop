const searchCards = (cards, word) => {
    let cardArray = []
    
    cards.map(card => {
      if (card.indexOf(word) > -1) {
        cardArray.push(card)
      }

      return cardArray
    })
    
    return cardArray
}
  
const searchWord = (cards, words) => {
    if (words.length > 1) {
        return words.map(word => {
            return searchCards(cards, word)
        })
    }
    
    return []
}
  
const searchName = (cards, words) => {
    const name = words.join(" ")
    
    return searchCards(cards, name)
}
  
const removeDuplications = (arrays) => {
    const array = [].concat(...arrays)
  
    const removedDupArray = array.reduce((unique, item) => {
      return unique.includes(item) ? unique : [...unique, item]
    }, [])
  
    return removedDupArray
}
  
const removeMatches = (bestArray, simArray) => {
    let array = simArray
    
    if (bestArray.length > 0) {
        bestArray.map(card => {
          return array.splice(array.indexOf(card), 1)
        })
    }
    
    return array
}
  
export const selectedCollection = (cards, words) => {
    if (!words[1] && words[0].length < 3) {
        return {}
    }

    const matchedCards = searchName(cards, words).slice(0, 5)
    const similarCards = removeDuplications(searchWord(cards, words)).slice(0, 10)
    
    return {
      best: matchedCards, 
      similar: removeMatches(matchedCards, similarCards)
    }
}
  
export const splitString = str => {
    const array = str.split(/(\s+)/)
    return array.filter(v => v !== ' ')
}
  