import * as anchor from "@coral-xyz/anchor";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.TiendaXiaomi;

export const crearCelular = async (
  modelo: string,
  precio: number,
  almacenamiento: number,
  color: string,
  stock: number
) => {

  const celular = anchor.web3.Keypair.generate();

  await program.methods
    .crearCelular(modelo, precio, almacenamiento, color, stock)
    .accounts({
      celular: celular.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .signers([celular])
    .rpc();

  console.log("Celular creado:", celular.publicKey.toString());
};

export const actualizarStock = async (celularPublicKey, stock) => {

  await program.methods
    .actualizarStock(stock)
    .accounts({
      celular: celularPublicKey,
    })
    .rpc();

  console.log("Stock actualizado");
};

export const actualizarPrecio = async (celularPublicKey, precio) => {

  await program.methods
    .actualizarPrecio(precio)
    .accounts({
      celular: celularPublicKey,
    })
    .rpc();

  console.log("Precio actualizado");
};

export const eliminarCelular = async (celularPublicKey) => {

  await program.methods
    .eliminarCelular()
    .accounts({
      celular: celularPublicKey,
      user: provider.wallet.publicKey,
    })
    .rpc();

  console.log("Celular eliminado");
};
