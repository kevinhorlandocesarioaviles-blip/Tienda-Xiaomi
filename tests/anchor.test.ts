import * as anchor from "@coral-xyz/anchor";

describe("tienda-xiaomi", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.TiendaXiaomi;

  it("Crear celular Xiaomi", async () => {

    const celular = anchor.web3.Keypair.generate();

    await program.methods
      .crearCelular(
        "Xiaomi 13",
        new anchor.BN(12000),
        256,
        "Negro",
        10
      )
      .accounts({
        celular: celular.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([celular])
      .rpc();

    console.log("Celular creado");
  });

});
