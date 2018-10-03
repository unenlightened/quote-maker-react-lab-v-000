import uuid from 'uuid'

//quote: {}
const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    { ...quote, id: uuid() }
  }
}

//quoteId: Integer
const removeQuote = (quoteId) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

const upvoteQuote = (quoteId) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

const downvoteQuote = (quoteId) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

export { addQuote, removeQuote, upvoteQuote, downvoteQuote }
