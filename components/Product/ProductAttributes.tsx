interface Props {
  attributes: TProductAttributes
}

const ProductAttributes = ({ attributes }: Props) => {
  return (
    <div className="attributes">
      <h3>About this avocado</h3>
      <p>{attributes.description}</p>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{attributes.shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{attributes.hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{attributes.taste}</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .attributes {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        table {
          border-collapse: collapse;
        }
        td,
        th {
          border: 1px solid var(--white-color);
          padding: 12px;
          text-align: left;
        }
      `}</style>
    </div>
  )
}

export default ProductAttributes
