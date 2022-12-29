export const getAllProducts = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/avo`)
  const { data }: TAPIAvoResponse = await response.json()
  return data
}

export const getProductById = async (id: string) => {
  const response = await fetch(`${process.env.API_HOST}/api/avo/${id}`)
  const product: TProduct = await response.json()
  return product
}
