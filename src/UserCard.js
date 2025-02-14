import react from "react";

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

const UserCard  = ({ user }) => {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "250px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      margin: "10px",
      backgroundColor: user.admin ? "red" : "",
    },
  };

  return (
    <div style={styles.card} /*className="card"*/>
      <h3>{user.nome}</h3>
      <h4>Idade:{user.idade}</h4>
      <h4>Profissão:{user.profissao}</h4>
      <h4>Cidade:{user.cidade}</h4>
      <h4>Admin: {isAdmin(user.admin)}</h4>
    </div>
  );
};

export default UserCard;
