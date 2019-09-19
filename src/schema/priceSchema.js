const priceSchema = `
enum Type {
    buy,
    sell
}

type Query {
  calculatePrice(type: Type!,margin: Float!,exchangeRate: Float!): Float!
}
`;

export default priceSchema;
