import Card, { Rank, Suit } from './Card';
import Croupier from './Croupier';
import Deck from './Deck';

describe('Croupier Package', () => {
  describe('Croupier', () => {
    it('should initialise', () => {
      const actual = new Croupier();
    });

    it('should shuffle deck', () => {
      const croupier = new Croupier();

      const deck = croupier.createDeck();

      croupier.shuffle(deck, 0.5);

      const expectedCards = [
        { suit: 'Diamonds', rank: 'Two' },
        { suit: 'Hearts', rank: 'Nine' },
        { suit: 'Diamonds', rank: 'Three' },
        { suit: 'Clubs', rank: 'Queen' },
        { suit: 'Diamonds', rank: 'Four' },
        { suit: 'Clubs', rank: 'Four' },
        { suit: 'Diamonds', rank: 'Five' },
        { suit: 'Hearts', rank: 'Five' },
        { suit: 'Diamonds', rank: 'Six' },
        { suit: 'Hearts', rank: 'King' },
        { suit: 'Diamonds', rank: 'Seven' },
        { suit: 'Clubs', rank: 'Eight' },
        { suit: 'Diamonds', rank: 'Eight' },
        { suit: 'Hearts', rank: 'Three' },
        { suit: 'Diamonds', rank: 'Nine' },
        { suit: 'Hearts', rank: 'Seven' },
        { suit: 'Diamonds', rank: 'Ten' },
        { suit: 'Hearts', rank: 'Jack' },
        { suit: 'Diamonds', rank: 'Jack' },
        { suit: 'Clubs', rank: 'Two' },
        { suit: 'Diamonds', rank: 'Queen' },
        { suit: 'Clubs', rank: 'Six' },
        { suit: 'Diamonds', rank: 'King' },
        { suit: 'Clubs', rank: 'Ten' },
        { suit: 'Diamonds', rank: 'Ace' },
        { suit: 'Clubs', rank: 'Ace' },
        { suit: 'Spades', rank: 'Two' },
        { suit: 'Hearts', rank: 'Four' },
        { suit: 'Spades', rank: 'Three' },
        { suit: 'Hearts', rank: 'Six' },
        { suit: 'Spades', rank: 'Four' },
        { suit: 'Hearts', rank: 'Eight' },
        { suit: 'Spades', rank: 'Five' },
        { suit: 'Hearts', rank: 'Ten' },
        { suit: 'Spades', rank: 'Six' },
        { suit: 'Hearts', rank: 'Queen' },
        { suit: 'Spades', rank: 'Seven' },
        { suit: 'Hearts', rank: 'Ace' },
        { suit: 'Spades', rank: 'Eight' },
        { suit: 'Clubs', rank: 'Three' },
        { suit: 'Spades', rank: 'Nine' },
        { suit: 'Clubs', rank: 'Five' },
        { suit: 'Spades', rank: 'Ten' },
        { suit: 'Clubs', rank: 'Seven' },
        { suit: 'Spades', rank: 'Jack' },
        { suit: 'Clubs', rank: 'Nine' },
        { suit: 'Spades', rank: 'Queen' },
        { suit: 'Clubs', rank: 'Jack' },
        { suit: 'Spades', rank: 'King' },
        { suit: 'Clubs', rank: 'King' },
        { suit: 'Spades', rank: 'Ace' },
        { suit: 'Hearts', rank: 'Two' }
      ];

      const expected = new Set(expectedCards);

      expect(deck.Cards).toEqual(expected);
    });
    it('should deal specified amount of cards from a deck', () => {
      const croupier = new Croupier();
      const deck = croupier.createDeck(false);
      const amount = 2;
      const actual = croupier.take(amount, deck);
      // expect(actual).toEqual()
    });
  });
  describe('Deck', () => {
    it('should create a deck with 52 cards in order', () => {
      const deck = new Deck();
      const expectedCards = [
        { suit: 'Diamonds', rank: 'Two' },
        { suit: 'Diamonds', rank: 'Three' },
        { suit: 'Diamonds', rank: 'Four' },
        { suit: 'Diamonds', rank: 'Five' },
        { suit: 'Diamonds', rank: 'Six' },
        { suit: 'Diamonds', rank: 'Seven' },
        { suit: 'Diamonds', rank: 'Eight' },
        { suit: 'Diamonds', rank: 'Nine' },
        { suit: 'Diamonds', rank: 'Ten' },
        { suit: 'Diamonds', rank: 'Jack' },
        { suit: 'Diamonds', rank: 'Queen' },
        { suit: 'Diamonds', rank: 'King' },
        { suit: 'Diamonds', rank: 'Ace' },
        { suit: 'Spades', rank: 'Two' },
        { suit: 'Spades', rank: 'Three' },
        { suit: 'Spades', rank: 'Four' },
        { suit: 'Spades', rank: 'Five' },
        { suit: 'Spades', rank: 'Six' },
        { suit: 'Spades', rank: 'Seven' },
        { suit: 'Spades', rank: 'Eight' },
        { suit: 'Spades', rank: 'Nine' },
        { suit: 'Spades', rank: 'Ten' },
        { suit: 'Spades', rank: 'Jack' },
        { suit: 'Spades', rank: 'Queen' },
        { suit: 'Spades', rank: 'King' },
        { suit: 'Spades', rank: 'Ace' },
        { suit: 'Hearts', rank: 'Two' },
        { suit: 'Hearts', rank: 'Three' },
        { suit: 'Hearts', rank: 'Four' },
        { suit: 'Hearts', rank: 'Five' },
        { suit: 'Hearts', rank: 'Six' },
        { suit: 'Hearts', rank: 'Seven' },
        { suit: 'Hearts', rank: 'Eight' },
        { suit: 'Hearts', rank: 'Nine' },
        { suit: 'Hearts', rank: 'Ten' },
        { suit: 'Hearts', rank: 'Jack' },
        { suit: 'Hearts', rank: 'Queen' },
        { suit: 'Hearts', rank: 'King' },
        { suit: 'Hearts', rank: 'Ace' },
        { suit: 'Clubs', rank: 'Two' },
        { suit: 'Clubs', rank: 'Three' },
        { suit: 'Clubs', rank: 'Four' },
        { suit: 'Clubs', rank: 'Five' },
        { suit: 'Clubs', rank: 'Six' },
        { suit: 'Clubs', rank: 'Seven' },
        { suit: 'Clubs', rank: 'Eight' },
        { suit: 'Clubs', rank: 'Nine' },
        { suit: 'Clubs', rank: 'Ten' },
        { suit: 'Clubs', rank: 'Jack' },
        { suit: 'Clubs', rank: 'Queen' },
        { suit: 'Clubs', rank: 'King' },
        { suit: 'Clubs', rank: 'Ace' }
      ];

      const expected = new Set(expectedCards);

      expect(deck.Cards).toEqual(expected);
    });
  });
});
