const Reyes = ({ rey, imagen, precio, color, setState }) => {
  const comprar = (x) => {
    setState((e) => e + precio);
    x.target.parentNode.style.display = "none";
  };

  return (
    <>
      <div className="rey" style={{ backgroundColor: color }}>
        <h1>{rey}</h1>
        <img src={imagen} />
        <div className="titulo">Precio:</div>
        <div className="precio">{precio} €</div>
        <button onClick={comprar}>Comprar</button>
      </div>
    </>
  );
};
export default Reyes;
