import { Connection, createConnection } from "typeorm";
import { Carrera } from "../entities/Carrera";

const getConnection = async (conn) => {
  createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Vrelinnbest845",
    database: "carrerasjs",
    entities: [Carrera],
    synchronize: true,
    logging: false,
  })
    .then((connection) => (conn = connection))
    .catch((err) => console.log(err));
};

const createCarrera = async () => {
  const conexion: Connection = null;
  await getConnection(conexion);
  console.log(conexion);
};

export { createCarrera };
