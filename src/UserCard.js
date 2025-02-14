import React from "react";
import Imagem from "./Imagem";
import imagemTeste from  "../src/assets/imagemTeste.png";
import outraImg from "../src/assets/outraImg.png";

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

const UserCard  = ({ user }) => {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "40px",
      width: "330px",
      height:"400px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      margin: "10px",
      backgroundColor: user.admin ? "red" : "",

    },
    imagem: {
      width: "120px",
      height: "100px",
      borderRadius: "10%",
      overflow: "hidden",
      marginTop:"10px",
      marginBottom: "20px",
    },
  };

  const imagemUsuario = user.foto === "imagemTeste.png" ? imagemTeste : outraImg;

  return (
    <div style={styles.card} /*className="card"*/>
      <h3>{user.nome}</h3>
      <h4>Idade:{user.idade}</h4>
      <h4>Profissão:{user.profissao}</h4>
      <h4>Cidade:{user.cidade}</h4>
      <h4>Admin: {isAdmin(user.admin)}</h4>
      <Imagem user={user} style={styles.imagem} src={imagemUsuario}/>
    </div>
  );
};

export default UserCard;
