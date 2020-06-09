export const removeSameCards = (originalCards, secondaryCards) => {
    const cards = [...originalCards, ...secondaryCards]
    
    return cards.filter((card, index, self) => self.findIndex((t) => {
      return (t.name === card.name)
    }) === index)
}
