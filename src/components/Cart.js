function Cart() {
  const produits = [
    { nom: "Monstrera", prix: 8 },
    { nom: "Lierre", prix: 10 },
    { nom: "Bouquet de fleurs", prix: 15 }
  ];

  // fonction reduce pour calculer le prix
  const total = produits.reduce((acc, produit) => acc + produit.prix, 0);

  return (
    <div className="panier">
      <h2>Panier :</h2>
      <ul>
        {produits.map((produit, index) => (
          <li key={index}>
            {produit.nom} : {produit.prix} €
          </li>
        ))}
      </ul>
      <p>Total : {total} €</p>
    </div>
  );
}

export default Cart