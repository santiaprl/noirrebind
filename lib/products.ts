export type ProductType =
  | "limited-edition"
  | "collection-edition"
  | "permanent"

export type Product = {
  id: string
  slug: string
  title: string
  subtitle?: string
  price: number
  type: ProductType

  editionIdentifier?: string
  editionLimit?: number

  /**
   * Historical copies already sold before this inventory system
   * is activated.
   *
   * This is NOT live inventory.
   */
  unitsAlreadyCommittedBeforeSystem?: number

  stripeProductId?: string
  stripePriceId?: string
}

export const products = {
  marcusAurelius: {
    id: "marcus-aurelius-edition-1",
    slug: "/books/stoiccollection/marcus-aurelius",
    title: "Marcus Aurelius",
    subtitle: "Meditations",
    price: 200,
    type: "limited-edition",
    editionIdentifier: "Edition I",
    editionLimit: 15,
    unitsAlreadyCommittedBeforeSystem: 0,
  },

  seneca: {
    id: "seneca-edition-1",
    slug: "/books/stoiccollection/seneca",
    title: "Seneca",
    price: 200,
    type: "limited-edition",
    editionIdentifier: "Edition I",
    editionLimit: 15,
    unitsAlreadyCommittedBeforeSystem: 0,
  },

  epictetus: {
    id: "epictetus-edition-1",
    slug: "/books/stoiccollection/epictetus",
    title: "Epictetus",
    price: 200,
    type: "limited-edition",
    editionIdentifier: "Edition I",
    editionLimit: 15,
    unitsAlreadyCommittedBeforeSystem: 0,
  },

  threeStoics: {
    id: "three-stoics-collection-edition-1",
    slug: "/books/stoiccollection/bundle",
    title: "The Three Stoics",
    price: 500,
    type: "collection-edition",
    editionIdentifier: "Edition I",
    editionLimit: 15,
    unitsAlreadyCommittedBeforeSystem: 0,
  },

  dailyStoic: {
    id: "daily-stoic-edition-1",
    slug: "/books/the-daily-stoic",
    title: "The Daily Stoic",
    price: 150,
    type: "limited-edition",
    editionIdentifier: "Edition I",
    editionLimit: 10,

    // Nine copies already belong to this edition's history.
    // The final tenth copy is the only one currently available.
    unitsAlreadyCommittedBeforeSystem: 9,
  },

  alchemist: {
    id: "the-alchemist",
    slug: "/books/the-alchemist",
    title: "The Alchemist",
    price: 200,
    type: "permanent",
  },
} satisfies Record<string, Product>

export type ProductKey = keyof typeof products

export function getProductById(id: string): Product | undefined {
  return Object.values(products).find((product) => product.id === id)
}

export function getProductEditionLabel(product: Product): string {
  if (
    (product.type === "limited-edition" ||
      product.type === "collection-edition") &&
    product.editionIdentifier &&
    product.editionLimit
  ) {
    return `${product.editionIdentifier} · Limited to ${product.editionLimit}`
  }

  return "Handcrafted Edition"
}